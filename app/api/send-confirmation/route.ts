import { Resend } from 'resend'

const PACKAGE_NAMES: Record<string, string> = {
  'one-on-one': '1-on-1 AI Training',
  team: 'Team AI Workshop',
}

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { email, name, phone, business, packageType } = await req.json()

    const firstName = (name || '').split(' ')[0]
    const packageName = PACKAGE_NAMES[packageType] || 'AI Training'

    // Customer confirmation email
    await resend.emails.send({
      from: 'Geoffrey at GetStarted AI <noreply@getstarted.co.nz>',
      to: email,
      replyTo: 'hello@getstarted.co.nz',
      subject: `Thanks for booking ${packageName} with GetStarted AI`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 0; color: #1a1a1a; background: #ffffff;">
          <!-- Header with gradient -->
          <div style="background: linear-gradient(135deg, #0099ff 0%, #0066cc 100%); padding: 40px 20px; text-align: center;">
            <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: rgba(255, 255, 255, 0.9);">Booking Received</p>
            <h1 style="margin: 0; font-size: 34px; font-weight: 800; color: #ffffff;">Thank You</h1>
            <p style="margin: 12px 0 0 0; font-size: 16px; color: rgba(255, 255, 255, 0.95);">${packageName}</p>
          </div>

          <!-- Main content -->
          <div style="padding: 40px 20px;">
            <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.8; color: #333;">Hi ${firstName},</p>

            <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.8; color: #555;">Thanks for booking <strong>${packageName}</strong> with GetStarted AI. We deliver our training on-site at your workplace, and we&rsquo;ll be in touch shortly to confirm a date and time that suits your business.</p>

            <!-- What happens next -->
            <div style="margin: 0 0 24px 0; padding: 28px; background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%); border-radius: 12px; border: 1px solid rgba(0, 153, 255, 0.15);">
              <p style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #0099ff;">What Happens Next</p>
              <p style="margin: 0 0 12px 0; font-size: 15px; line-height: 1.7; color: #333;">1. We&rsquo;ll contact you to schedule your session.</p>
              <p style="margin: 0 0 12px 0; font-size: 15px; line-height: 1.7; color: #333;">2. We&rsquo;ll learn about your business so we can tailor the training.</p>
              <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #333;">3. We come to you and deliver practical, hands-on AI training.</p>
            </div>

            <p style="margin: 24px 0; font-size: 16px; line-height: 1.8; color: #333;">If you have any questions in the meantime, just reply to this email.</p>

            <!-- Footer -->
            <div style="border-top: 1px solid #e5e5e5; padding-top: 24px; text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 15px; font-weight: 600; color: #1a1a1a;">Geoffrey</p>
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #666;">GetStarted AI</p>
              <p style="margin: 0; font-size: 13px; color: #999;">Have questions? <a href="mailto:hello@getstarted.co.nz" style="color: #0099ff; text-decoration: none; font-weight: 500;">hello@getstarted.co.nz</a></p>
            </div>
          </div>
        </div>
      `,
    })

    // Admin notification email
    await resend.emails.send({
      from: 'GetStarted AI <noreply@getstarted.co.nz>',
      to: 'hello@catchie.nz',
      cc: ['info@balloonz.co.nz'],
      subject: `New Booking: ${packageName} — ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="margin: 0 0 16px 0; font-size: 16px;"><strong>${name}</strong> just booked <strong>${packageName}</strong>.</p>
          <div style="background: #f9f9f9; padding: 16px; border-radius: 6px; margin: 16px 0;">
            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 8px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 0 0 8px 0;"><strong>Business:</strong> ${business || '—'}</p>
            <p style="margin: 0;"><strong>Package:</strong> ${packageName}</p>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return Response.json(
      { error: 'Failed to send confirmation' },
      { status: 500 }
    )
  }
}
