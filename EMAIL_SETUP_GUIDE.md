# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form in this project.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for an account if you don't already have one.
2. After signing up, you'll be taken to your dashboard.

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services" in the sidebar.
2. Click "Add New Service".
3. Choose your email provider (Gmail, Outlook, custom SMTP, etc.) and follow the instructions to connect it.
4. Once connected, you'll get a **Service ID**. Copy this for later.

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to "Email Templates" in the sidebar.
2. Click "Create New Template".
3. Design your email template. Make sure to include these variables from the contact form:
   - `{{user_name}}` - The name from the contact form
   - `{{user_email}}` - The email from the contact form
   - `{{user_phone}}` - The phone number from the contact form
   - `{{subject}}` - The subject from the contact form
   - `{{message}}` - The message from the contact form
4. After saving, you'll get a **Template ID**. Copy this for later.

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to "Account" > "API Keys".
2. Copy your **Public Key** from there.

## Step 5: Update Your Environment Variables

1. Open your `.env.local` file and update these values:
   ```
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
   ```

## Step 6: Test Your Configuration

1. Start your development server with `npm run dev`.
2. Go to `/email-test` in your browser (e.g., http://localhost:3000/email-test).
3. The test page will show if your environment variables are properly set.
4. Send a test email to verify everything is working.

## Common Issues:

1. **CORS Errors**: Make sure to add your domain to the list of allowed domains in EmailJS settings (under "Account" > "Security").
2. **Template Variables**: Ensure your template uses the same variable names that the contact form sends.
3. **Service Quota**: Check if you've exceeded the free tier limits if using a free plan.

## Additional Notes for Vercel Deployment:

When deploying to Vercel, be sure to add these same environment variables in your Vercel project settings. 