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
    `.trim()

    // For now, we'll use a simple approach - you can integrate with email services later
    // This creates a mailto link that can be used to send the email
    const mailtoLink = `mailto:info@pickleballatx.org?subject=${encodeURIComponent(`[Pickleball ATX Contact] ${subject}`)}&body=${encodeURIComponent(emailContent)}`

    // Log the submission (you can replace this with actual email sending)
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    // In a production environment, you would:
    // 1. Send email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the submission in a database
    // 3. Send confirmation email to the user

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        mailtoLink // For debugging - remove in production
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
