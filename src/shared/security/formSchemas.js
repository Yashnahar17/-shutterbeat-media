import { z } from 'zod'

const optionalTrimmedString = (max) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .or(z.literal(''))

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().trim().email('Please enter a valid email address').max(254, 'Email is too long'),
  phone: optionalTrimmedString(30),
  company: optionalTrimmedString(120),
  service: optionalTrimmedString(100),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(5000, 'Message is too long'),
  turnstileToken: z.string().trim().min(1, 'Verification is required'),
  website: z.string().max(0).optional().or(z.literal('')),
})

export const careerSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().trim().email('Please enter a valid email address').max(254, 'Email is too long'),
  portfolio: z.string().trim().url('Please enter a valid URL').max(300, 'URL is too long').optional().or(z.literal('')),
  type: z.enum(['Full-time', 'Part-time', 'Freelance', 'Internship'], {
    error: 'Please select an employment type',
  }),
  role: optionalTrimmedString(100),
  message: optionalTrimmedString(3000),
  turnstileToken: z.string().trim().min(1, 'Verification is required'),
  website: z.string().max(0).optional().or(z.literal('')),
  resumeUploadEnabled: z.boolean().optional(),
})

export const CONTACT_MAX_BODY_BYTES = 16 * 1024
export const CAREER_MAX_BODY_BYTES = 24 * 1024
