# Resend Email Setup Guide

## 🚀 Quick Setup (5 minutes)

### 1. Install Resend Package
```bash
npm install resend
# or
yarn add resend
# or
pnpm add resend
```

### 2. Get Your Free Resend API Key
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the key (starts with `re_`)

### 3. Add Environment Variable
Create a `.env.local` file in your project root:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

### 4. Deploy to Vercel
1. Add the environment variable in Vercel dashboard:
   - Go to your project settings
   - Environment Variables section
   - Add `RESEND_API_KEY` with your key
2. Redeploy your site

## ✅ What You Get

- **3,000 emails/month FREE**
- **Professional email delivery** to info@pickleballatx.org
- **HTML email templates** with your branding
- **Reply-to functionality** (you can reply directly to users)
- **Delivery tracking** and error handling

## 📧 Email Features

- **From:** Pickleball ATX <noreply@pickleballatx.org>
- **To:** info@pickleballatx.org
- **Reply-To:** User's email address
- **Subject:** [Pickleball ATX Contact] {User's Subject}
- **Content:** Professional HTML email with all form details

## 🔧 Domain Setup (Optional)

For better deliverability, you can:
1. Add your domain to Resend
2. Set up SPF/DKIM records
3. Use your domain for the "from" address

But it works great with the default setup too!

## 🎉 Ready to Go!

Once you add the API key, your contact forms will send real emails to info@pickleballatx.org!
