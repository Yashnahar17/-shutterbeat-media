import { createElement, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  MessageCircleMore,
  ArrowRight,
} from 'lucide-react'
import { contactInfo } from '../data/contact'
import { visibleServices } from '../data/services'
import TurnstileWidget from '../components/shared/TurnstileWidget'
import { contactSchema } from '../shared/security/formSchemas'

const SERVICES = visibleServices.map((service) => service.title)
const FIELD_LABEL = 'mb-1.5 block font-body text-xs tracking-wide text-primary/68'
const FIELD_INPUT = 'w-full rounded-xl border border-primary/12 bg-white px-4 py-3 text-primary font-body text-sm placeholder:text-primary/35 transition-colors focus:border-primary/45 focus:outline-none focus:ring-2 focus:ring-primary/10'
const FIELD_ERROR = 'mt-1 text-xs text-red-600'

function FieldLabel({ children }) {
  return <label className={FIELD_LABEL}>{children}</label>
}

function TextField({ error, ...props }) {
  return (
    <>
      <input
        {...props}
        className={FIELD_INPUT}
      />
      {error && <p className={FIELD_ERROR}>{error.message}</p>}
    </>
  )
}

function ContactCard({ icon, title, children, tone = 'primary' }) {
  const toneStyles = {
    primary: 'bg-primary/10 border-primary/20 text-primary',
    secondary: 'bg-secondary/10 border-secondary/20 text-secondary',
    tertiary: 'bg-tertiary/30 border-tertiary text-primary',
  }

  return (
    <div className="rounded-card border border-primary/12 bg-white p-4 sm:p-5 shadow-[0_8px_20px_rgba(72,90,168,0.05)] hover:border-primary/24 transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-start gap-3.5">
        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${toneStyles[tone]}`}>
          {createElement(icon, { size: 18 })}
        </div>
        <div>
          <p className="text-primary/65 font-body text-[11px] mb-1 tracking-widest uppercase">{title}</p>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? ''
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      website: '',
      turnstileToken: '',
    },
  })

  const onSubmit = async (data) => {
    setSubmitError('')
    setSubmitted(false)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(result.error || 'Unable to submit your message right now.')
      }

      setSubmitted(true)
      reset({ name: '', email: '', phone: '', company: '', service: '', message: '', website: '', turnstileToken: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      setSubmitError(error.message || 'Unable to submit your message right now.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const GRID_STYLE = {
    backgroundImage:
      'linear-gradient(rgba(72,90,168,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(72,90,168,.08) 1px,transparent 1px)',
    backgroundSize: '48px 48px',
  }

  const socialLinks = [
    { Icon: Instagram, href: contactInfo?.socials?.instagram || '#', label: 'Instagram' },
    { Icon: Facebook, href: contactInfo?.socials?.facebook || '#', label: 'Facebook' },
    { Icon: Linkedin, href: contactInfo?.socials?.linkedin || '#', label: 'LinkedIn' },
    { Icon: Youtube, href: contactInfo?.socials?.youtube || '#', label: 'YouTube' },
    { Icon: Twitter, href: contactInfo?.socials?.twitter || '#', label: 'Twitter' },
  ]

  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden pt-32 sm:pt-36 pb-12 sm:pb-16">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-white to-secondary/10" />
        <div className="absolute inset-0 opacity-10" style={GRID_STYLE} />
        <div className="absolute -top-8 -right-10 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-shell max-w-4xl px-6 py-8 text-center sm:p-10 mx-auto">
            <span className="section-tag">Get In Touch</span>
            <h1 className="font-heading text-display text-primary leading-[1.04]" style={{ letterSpacing: '-0.025em' }}>
              Start Your Next <span className="text-gradient">Creative Project</span>
            </h1>
            <p className="mt-4 text-primary/74 font-body text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mx-auto">
              Share your goals, timeline, and service needs. Our team will respond with a clear plan and next steps.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <a href={`tel:${contactInfo?.phones?.[0] || '+91 9158664515'}`} className="rounded-xl border border-primary/12 bg-white/95 px-4 py-3 hover:border-primary/24 transition">
                <p className="text-[11px] uppercase tracking-widest text-primary/65">Call</p>
                <p className="text-sm font-heading text-primary mt-1">Quick Discussion</p>
              </a>
              <a href={`mailto:${contactInfo?.email || 'shutterbeat.media@gmail.com'}`} className="rounded-xl border border-primary/12 bg-white/95 px-4 py-3 hover:border-secondary/30 transition">
                <p className="text-[11px] uppercase tracking-widest text-primary/65">Email</p>
                <p className="text-sm font-heading text-primary mt-1">Project Inquiry</p>
              </a>
              <a href="#contact-form" className="rounded-xl border border-primary/12 bg-white/95 px-4 py-3 hover:border-primary/24 transition">
                <p className="text-[11px] uppercase tracking-widest text-primary/65">Form</p>
                <p className="text-sm font-heading text-primary mt-1">Share Requirements</p>
              </a>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <Motion.aside
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
              <div className="section-shell bg-gradient-to-br from-primary/8 via-white to-secondary/10 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <MessageCircleMore size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary/65">Support Window</p>
                    <p className="text-primary font-heading text-sm">Mon - Sat, 10:00 AM - 7:00 PM IST</p>
                  </div>
                </div>
              </div>

              <ContactCard icon={Phone} title="Phone" tone="primary">
                {(contactInfo?.phones || ['+91 9158664515', '+91 9561422961']).map((p) => (
                  <a key={p} href={`tel:${p}`} className="block font-heading text-primary text-sm hover:text-secondary transition-colors">
                    {p}
                  </a>
                ))}
              </ContactCard>

              <ContactCard icon={Mail} title="Email" tone="secondary">
                <a
                  href={`mailto:${contactInfo?.email || 'shutterbeat.media@gmail.com'}`}
                  className="font-heading text-primary text-sm hover:text-secondary transition-colors break-all">
                  {contactInfo?.email || 'shutterbeat.media@gmail.com'}
                </a>
              </ContactCard>

              <ContactCard icon={MapPin} title="Office" tone="tertiary">
                <p className="font-heading text-primary text-sm">{contactInfo?.address || 'Pune, Maharashtra, India'}</p>
              </ContactCard>

              <div className="rounded-card border border-tertiary bg-white p-4 sm:p-5">
                <p className="text-primary/65 font-body text-xs mb-3 tracking-widest uppercase">Follow Us</p>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl border border-primary/12 bg-white text-primary/72 flex items-center justify-center hover:border-primary/24 hover:text-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-2">
                      {createElement(Icon, { size: 16 })}
                    </a>
                  ))}
                </div>
              </div>
            </Motion.aside>

            <Motion.div
              id="contact-form"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="lg:col-span-8">
              <div className="section-shell p-6 sm:p-8 shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                  <div>
                    <span className="section-tag mb-1">Project Brief</span>
                    <h2 className="font-heading text-h3 text-primary">Send Us a Message</h2>
                    <p className="text-primary/72 text-sm mt-2 leading-relaxed">Tell us what you need and we will reply with a tailored scope.</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary/65 font-body">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Usually replies within 24 hours
                  </div>
                </div>

                {submitted && (
                  <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4 mb-6 text-secondary font-body text-sm">
                    Thank you. Your message has been sent successfully.
                  </div>
                )}

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-red-700 font-body text-sm">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('website')} />
                  <input type="hidden" {...register('turnstileToken')} />
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <FieldLabel>Full Name *</FieldLabel>
                      <TextField {...register('name')} error={errors.name} placeholder="Your name" />
                    </div>
                    <div>
                      <FieldLabel>Email Address *</FieldLabel>
                      <TextField {...register('email')} error={errors.email} type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <FieldLabel>Phone Number</FieldLabel>
                      <TextField {...register('phone')} placeholder="+91 00000 00000" />
                    </div>
                    <div>
                      <FieldLabel>Company / Brand</FieldLabel>
                      <TextField {...register('company')} placeholder="Your company (optional)" />
                    </div>
                  </div>

                  <div>
                    <FieldLabel>Service Interested In</FieldLabel>
                    <select
                      {...register('service')}
                      className={`${FIELD_INPUT} appearance-none`}>
                      <option value="">Select a service...</option>
                      {SERVICES.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <FieldLabel>Message *</FieldLabel>
                    <textarea
                      {...register('message')}
                      rows={6}
                      placeholder="Tell us about your project goals, timeline, and expected deliverables..."
                      className={`${FIELD_INPUT} min-h-[160px] resize-none`}
                    />
                    {errors.message && <p className={FIELD_ERROR}>{errors.message.message}</p>}
                  </div>

                  <div>
                    <FieldLabel>Verification *</FieldLabel>
                    <TurnstileWidget
                      siteKey={turnstileSiteKey}
                      onTokenChange={(token) => {
                        setValue('turnstileToken', token, { shouldValidate: true })
                      }}
                    />
                    {errors.turnstileToken && <p className={FIELD_ERROR}>{errors.turnstileToken.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto sm:min-w-[220px] justify-center py-3.5 text-base mt-1 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                  </button>
                </form>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24 bg-white">
        <div className="container-custom">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="section-tag">Our Location</span>
            <h2 className="font-heading text-h2 text-primary mb-4">
              Find Us in <span className="text-gradient">Pune</span>
            </h2>
            <p className="text-primary/72 font-body text-sm sm:text-base leading-relaxed">
              Visit our Pune location or use the map below to get directions and plan a quick meeting with our team.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[1.75rem] border border-primary/12 bg-white shadow-[0_20px_44px_rgba(72,90,168,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-[340px] lg:min-h-[420px]">
                <iframe
                  title="ShutterBeat Media Pune location map"
                  src="https://www.google.com/maps?q=Pune,%20Maharashtra,%20India&z=13&output=embed"
                  className="h-full min-h-[340px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex flex-col justify-center gap-5 p-6 sm:p-8">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/12 bg-primary/5 px-4 py-2">
                  <MapPin size={14} className="text-secondary" />
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary/68">
                    Pune Office
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-h3 text-primary mb-3">Come Say Hello</h3>
                  <p className="text-primary/72 font-body text-sm sm:text-base leading-relaxed">
                    We are based in Pune, Maharashtra, India. If you would like to discuss your project in person, reach out and we will help schedule a meeting.
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-primary/[0.03] p-4 sm:p-5">
                  <p className="font-heading text-primary text-base mb-2">{contactInfo?.address || 'Pune, Maharashtra, India'}</p>
                  <p className="text-primary/65 font-body text-sm leading-relaxed">
                    Available Monday to Saturday, 10:00 AM to 7:00 PM IST for calls, meetings, and project discussions.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={`mailto:${contactInfo?.email || 'shutterbeat.media@gmail.com'}`} className="btn-primary justify-center">
                    Request Meeting <ArrowRight size={16} />
                  </a>
                  <a href={`tel:${contactInfo?.phones?.[0] || '+91 9158664515'}`} className="btn-secondary justify-center">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  )
}
