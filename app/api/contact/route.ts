import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
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

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Pickleball ATX <noreply@pickleballatx.org>',
      to: ['info@pickleballatx.org'],
      replyTo: email,
      subject: `[Pickleball ATX Contact] ${subject}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10B981;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <strong>Message:</strong><br>
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Sent from: ${request.headers.get('referer') || 'Pickleball ATX Contact Form'}<br>
            Time: ${new Date().toLocaleString()}<br>
            IP: ${request.ip || 'Unknown'}
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        emailId: data?.id
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
