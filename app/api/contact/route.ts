import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Pickleball ATX

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from: ${request.headers.get('referer') || 'Pickleball ATX Contact Form'}
Time: ${new Date().toLocaleString()}
IP Address: ${request.ip || 'Unknown'}
User Agent: ${request.headers.get('user-agent') || 'Unknown'}
    `.trim()

    // Try to send email using Resend API directly
    let emailId = null
    if (process.env.RESEND_API_KEY) {
      console.log('Attempting to send email via Resend API...')
      
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Pickleball ATX <onboarding@resend.dev>',
            to: ['info@pickleballatx.org'],
            subject: `[Pickleball ATX Contact] ${subject}`,
            text: emailContent,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #10B981;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                  <strong>Message:</strong><br>
                  ${message.replace(/\n/g, '<br>')}
                </div>
                <hr style="margin: 20px 0;">
                <p style="color: #666; font-size: 12px;">
                  Sent from: ${request.headers.get('referer') || 'Pickleball ATX Contact Form'}<br>
                  Time: ${new Date().toLocaleString()}<br>
                  IP: ${request.ip || 'Unknown'}<br>
                  <strong>Reply to:</strong> ${email}
                </p>
              </div>
            `,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(`Resend API error: ${errorData.message || response.statusText}`)
        }

        const data = await response.json()
        emailId = data?.id
        console.log('Email sent successfully via Resend API:', data)
      } catch (resendError) {
        console.error('Resend API failed, falling back to mailto:', resendError)
        // Fall through to mailto method
      }
    }

    // Fallback: Create mailto link for manual sending
    const mailtoLink = `mailto:info@pickleballatx.org?subject=${encodeURIComponent(`[Pickleball ATX Contact] ${subject}`)}&body=${encodeURIComponent(emailContent)}`
    
    // Log the submission for manual processing
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      mailtoLink
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        emailId: emailId
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
