import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// Prices include 15% NZ GST, in cents (NZD)
const PACKAGES = {
  'one-on-one': {
    name: '1-on-1 AI Training',
    description: 'Personalised, on-site AI training tailored to your business (approx. 2 hours)',
    unit_amount: 22885, // $199 + 15% GST
  },
  team: {
    name: 'Team AI Workshop',
    description: 'On-site, hands-on AI workshop for up to 20 participants (approx. 3 hours)',
    unit_amount: 114885, // $999 + 15% GST
  },
} as const

type PackageType = keyof typeof PACKAGES

export async function POST(req: Request) {
  try {
    const { email, name, packageType } = await req.json()

    const selected = PACKAGES[(packageType as PackageType)] ?? PACKAGES['one-on-one']

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'nzd',
            product_data: {
              name: `GetStarted AI — ${selected.name}`,
              description: selected.description,
            },
            unit_amount: selected.unit_amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://www.getstarted.co.nz'}/thank-you`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://www.getstarted.co.nz'}/cancel`,
      customer_email: email,
      metadata: {
        name: name,
        packageType: packageType ?? 'one-on-one',
      },
    })

    return Response.json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe error:', error)
    return Response.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
