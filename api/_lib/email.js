import { HttpError } from './http.js'
import { serverEnv } from './env.js'

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

async function sendResendEmail({ to, subject, html, replyTo }) {
  if (!serverEnv.resendApiKey || !serverEnv.fromEmail || !to) {
    throw new HttpError(503, 'Email delivery is not configured')
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${serverEnv.resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: serverEnv.fromEmail,
      to: [to],
      subject,
      html,
      reply_to: replyTo,
    }),
  })

  if (!response.ok) {
    throw new HttpError(502, 'Email delivery failed')
  }
}

export async function sendContactSubmission(data) {
  const html = `
    <h1>New Contact Submission</h1>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || 'Not provided')}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company || 'Not provided')}</p>
    <p><strong>Service:</strong> ${escapeHtml(data.service || 'Not provided')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replaceAll('\n', '<br>')}</p>
  `

  await sendResendEmail({
    to: serverEnv.contactToEmail,
    subject: `Contact request from ${data.name}`,
    html,
    replyTo: data.email,
  })
}

export async function sendCareerSubmission(data) {
  const html = `
    <h1>New Career Submission</h1>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Employment Type:</strong> ${escapeHtml(data.type)}</p>
    <p><strong>Role:</strong> ${escapeHtml(data.role || 'Not provided')}</p>
    <p><strong>Portfolio:</strong> ${escapeHtml(data.portfolio || 'Not provided')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message || 'Not provided').replaceAll('\n', '<br>')}</p>
    <p><strong>Resume Upload Enabled:</strong> ${data.resumeUploadEnabled ? 'Yes' : 'No'}</p>
  `

  await sendResendEmail({
    to: serverEnv.careersToEmail,
    subject: `Career application from ${data.name}`,
    html,
    replyTo: data.email,
  })
}
