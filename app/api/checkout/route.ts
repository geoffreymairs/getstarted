import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'nzd',
            product_data: {
              name: 'Get Started AI Workshop - Tuesday 2 June',
              description: 'Live hands-on workshop: Build & launch your AI-powered website in 3 hours',
            },
            unit_amount: 34415, // $344.15 NZD (inc. GST) - $299 + 15% GST in cents
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
