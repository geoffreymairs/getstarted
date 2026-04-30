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
    const { email, name, phone, businessType } = await req.json()

    const firstName = name.split(' ')[0]

    // Send emails in sequence to ensure delivery
    // Customer confirmation email
    await resend.emails.send({
      from: 'Geoffrey at GetStarted AI <noreply@getstarted.co.nz>',
      to: email,
      replyTo: 'hello@getstarted.co.nz',
      subject: 'You\'re Booked! 🎉 GetStarted AI Workshop - June 2',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 0; color: #1a1a1a; background: #ffffff;">
          <!-- Header with gradient -->
          <div style="background: linear-gradient(135deg, #0099ff 0%, #0066cc 100%); padding: 40px 20px; text-align: center;">
            <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: rgba(255, 255, 255, 0.9);">Congratulations</p>
            <h1 style="margin: 0; font-size: 36px; font-weight: 800; color: #ffffff;">You're Booked!</h1>
            <p style="margin: 12px 0 0 0; font-size: 16px; color: rgba(255, 255, 255, 0.95);">Your spot is reserved for June 2nd</p>
          </div>

          <!-- Main content -->
          <div style="padding: 40px 20px;">
            <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.8; color: #333;">Hi ${firstName},</p>

            <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.8; color: #555;">Thanks for signing up for the <strong>Build & Launch Your Website in 3 Hours Using AI</strong> workshop. We're excited to have you there.</p>

            <!-- Before You Arrive -->
            <div style="margin: 0 0 32px 0;">
              <p style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #0099ff;">⚡ Before You Arrive</p>
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #333;">Create free accounts for these tools (takes 2 minutes):</p>

              <div style="margin: 0; padding: 0;">
                <div style="margin-bottom: 12px;">
                  <a href="https://chat.openai.com" style="display: block; padding: 16px 20px; background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%); border: 2px solid #0099ff; border-radius: 8px; text-decoration: none; color: #0099ff; font-weight: 600; font-size: 15px; text-align: center; transition: all 0.3s ease;">
                    ChatGPT →
                  </a>
                </div>
                <div style="margin-bottom: 12px;">
                  <a href="https://github.com" style="display: block; padding: 16px 20px; background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%); border: 2px solid #0099ff; border-radius: 8px; text-decoration: none; color: #0099ff; font-weight: 600; font-size: 15px; text-align: center; transition: all 0.3s ease;">
                    GitHub →
                  </a>
                </div>
                <div style="margin-bottom: 0;">
                  <a href="https://vercel.com" style="display: block; padding: 16px 20px; background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%); border: 2px solid #0099ff; border-radius: 8px; text-decoration: none; color: #0099ff; font-weight: 600; font-size: 15px; text-align: center; transition: all 0.3s ease;">
                    Vercel →
                  </a>
                </div>
              </div>
            </div>

            <!-- Please Bring -->
            <div style="margin: 32px 0; padding: 32px; background: linear-gradient(135deg, #fff5f0 0%, #fff9f5 100%); border-radius: 12px; border: 1px solid rgba(255, 100, 0, 0.15);">
              <p style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #ff6400;">📦 Please Bring</p>
              <div style="margin: 0; padding: 0;">
                <div style="margin-bottom: 12px; padding: 12px 16px; background: #ffffff; border-left: 4px solid #ff6400; border-radius: 4px;">
                  <p style="margin: 0; font-size: 15px; font-weight: 500; color: #333;">Your laptop</p>
                </div>
                <div style="margin-bottom: 0; padding: 12px 16px; background: #ffffff; border-left: 4px solid #ff6400; border-radius: 4px;">
                  <p style="margin: 0; font-size: 15px; font-weight: 500; color: #333;">Charger</p>
                </div>
              </div>
            </div>

            <!-- Workshop Location -->
            <div style="margin: 32px 0; padding: 32px; background: linear-gradient(135deg, #f5f0ff 0%, #fff0f5 100%); border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.15);">
              <p style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #a855f7;">📍 Workshop Location</p>
              <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1a1a1a; line-height: 1.8;">
                Remuera Golf Club<br />
                120 Abbotts Way<br />
                Remuera, Auckland 1050
              </p>
            </div>

            <!-- Goal -->
            <div style="margin: 32px 0; padding: 32px; background: linear-gradient(135deg, #0099ff 0%, #0066cc 100%); border-radius: 12px; border: 1px solid rgba(0, 153, 255, 0.4); text-align: center;">
              <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: rgba(255, 255, 255, 0.9);">Goal by 12pm</p>
              <p style="margin: 0; font-size: 28px; font-weight: 800; color: #ffffff;">Your Website Live</p>
              <p style="margin: 12px 0 0 0; font-size: 15px; color: rgba(255, 255, 255, 0.95);">A real, functioning website deployed to the internet</p>
            </div>

            <!-- Closing -->
            <p style="margin: 32px 0 24px 0; font-size: 16px; line-height: 1.8; color: #333;">Looking forward to seeing you and helping you launch!</p>

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

    // Admin notification email (single email to both recipients)
    await resend.emails.send({
      from: 'GetStarted AI <noreply@getstarted.co.nz>',
      to: 'hello@catchie.nz',
      cc: ['info@balloonz.co.nz'],
      subject: `New Workshop Registration: ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="margin: 0 0 16px 0; font-size: 16px;"><strong>${name}</strong> just registered for the GetStarted AI Workshop.</p>
          <div style="background: #f9f9f9; padding: 16px; border-radius: 6px; margin: 16px 0;">
            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 8px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 0;"><strong>Category:</strong> ${businessType}</p>
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
