import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, company, email, phone, message } = await req.json()

    const firstName = (name || '').split(' ')[0]

    // Notification to GetStarted
    await resend.emails.send({
      from: 'GetStarted AI <noreply@getstarted.co.nz>',
      to: 'hello@getstarted.co.nz',
      replyTo: email,
      subject: `New Enquiry: ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="margin: 0 0 16px 0; font-size: 16px;"><strong>${name}</strong> submitted a new enquiry via the website.</p>
          <div style="background: #f9f9f9; padding: 16px; border-radius: 6px; margin: 16px 0;">
            <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 8px 0;"><strong>Company:</strong> ${company || '—'}</p>
            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 8px 0;"><strong>Phone:</strong> ${phone || '—'}</p>
            <p style="margin: 0;"><strong>Message:</strong><br />${(message || '').replace(/\n/g, '<br />')}</p>
          </div>
        </div>
      `,
    })

    // Auto-reply confirmation to the enquirer
    await resend.emails.send({
      from: 'Geoffrey at GetStarted AI <noreply@getstarted.co.nz>',
      to: email,
      replyTo: 'hello@getstarted.co.nz',
      subject: 'Thanks for reaching out to GetStarted AI',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 0; color: #1a1a1a; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #0099ff 0%, #0066cc 100%); padding: 40px 20px; text-align: center;">
            <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: rgba(255, 255, 255, 0.9);">Message Received</p>
            <h1 style="margin: 0; font-size: 34px; font-weight: 800; color: #ffffff;">Thanks For Reaching Out</h1>
          </div>

          <div style="padding: 40px 20px;">
            <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.8; color: #333;">Hi ${firstName},</p>

            <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.8; color: #555;">Thanks for getting in touch with GetStarted AI. We&rsquo;ve received your message and will be in touch within one business day to arrange your free 30 minute AI Strategy Consultation, or answer any questions you have.</p>

            <p style="margin: 24px 0; font-size: 16px; line-height: 1.8; color: #333;">If anything is urgent in the meantime, just reply to this email.</p>

            <div style="border-top: 1px solid #e5e5e5; padding-top: 24px; text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 15px; font-weight: 600; color: #1a1a1a;">Geoffrey</p>
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #666;">GetStarted AI</p>
              <p style="margin: 0; font-size: 13px; color: #999;">Have questions? <a href="mailto:hello@getstarted.co.nz" style="color: #0099ff; text-decoration: none; font-weight: 500;">hello@getstarted.co.nz</a></p>
            </div>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact form email error:', error)
    return Response.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
