import { useState } from 'react'
import { motion as Motion} from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Briefcase, MapPin, Clock, Upload, Send, Palette, Code, Megaphone, Film, Download } from 'lucide-react'
import { jobs } from '../data/jobs'
import TurnstileWidget from '../components/shared/TurnstileWidget'
import { careerSchema } from '../shared/security/formSchemas'
import SectionHeading from '../components/ui/SectionHeading'

const freelancerCategories = [
  { icon:Palette, title:'Designers',   desc:'Graphic designers, motion designers and UI/UX specialists.' },
  { icon:Film,    title:'Editors',     desc:'Video editors, color graders and post-production artists.' },
  { icon:Code,    title:'Developers',  desc:'Front-end, back-end and full-stack web developers.' },
  { icon:Megaphone,title:'Marketers', desc:'Performance marketers, content creators and SEO specialists.' },
]

const TYPE_COLOR = {
  'Full-time':'bg-primary/20 text-primary border-primary/30',
  'Part-time':'bg-secondary/20 text-secondary border-secondary/30',
  'Freelance':'bg-white/20 text-tertiary border-tertiary/30',
}

const FIELD_LABEL = 'mb-1.5 block font-body text-xs tracking-wide text-primary/68'
const FIELD_INPUT = 'w-full rounded-xl border border-primary/12 bg-white px-4 py-3 text-primary font-body text-sm placeholder:text-primary/30 transition-colors focus:border-primary/45 focus:outline-none'
const FIELD_ERROR = 'mt-1 text-xs text-red-600'

function buildJobDescription(job) {
  return [
    `${job.title} - ShutterBeat Media`,
    '',
    `Employment Type: ${job.type}`,
    `Location: ${job.location || 'Pune / Remote'}`,
    `Experience: ${job.experience || '2+ years'}`,
    '',
    'Job Description',
    job.description,
    '',
    'To apply, visit the careers page on the ShutterBeat Media website and submit your application.',
  ].join('\n')
}

function downloadJobDescription(job) {
  const fileContents = buildJobDescription(job)
  const blob = new Blob([fileContents], { type: 'text/plain;charset=utf-8' })
  const fileUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  const safeTitle = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  link.href = fileUrl
  link.download = `${safeTitle || 'job-description'}-job-description.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(fileUrl)
}

export default function Opportunities() {
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? ''
  const resumeUploadEnabled = import.meta.env.VITE_ENABLE_RESUME_UPLOAD === 'true'
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState:{ errors }, reset, setValue } = useForm({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      website: '',
      turnstileToken: '',
      resumeUploadEnabled,
    },
  })

  const onSubmit = async (data) => {
    setSubmitError('')
    setSubmitted(false)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, resumeUploadEnabled }),
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(result.error || 'Unable to submit your application right now.')
      }

      setSubmitted(true)
      reset({ name: '', email: '', portfolio: '', type: '', role: '', message: '', website: '', turnstileToken: '', resumeUploadEnabled })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      setSubmitError(error.message || 'Unable to submit your application right now.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const GRID_STYLE = {
    backgroundImage: 'linear-gradient(rgba(72,90,168,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(72,90,168,.08) 1px,transparent 1px)',
    backgroundSize: '60px 60px',
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[45vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-white to-primary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-32 sm:pt-36">
          <Motion.div
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            className="section-shell max-w-4xl px-6 py-8 sm:p-10">
            <span className="section-tag">Join the Team</span>
            <h1 className="font-heading text-display text-primary mb-4 leading-[1.04]" style={{ letterSpacing: '-0.025em' }}>
              Build With <span className="text-gradient">Us</span>
            </h1>
            <p className="text-primary/74 font-body text-base sm:text-lg lg:text-[1.1rem] max-w-xl leading-relaxed">
              We're always looking for talented, passionate creatives to join our team.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* Freelancer Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="mb-12 sm:mb-14">
            <SectionHeading
              tag="Freelance Careers"
              title="We&apos;re Looking for"
              accent="Creatives"
              align="center"
              className="max-w-2xl"
            />
          </Motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freelancerCategories.map((cat, i) => (
              <Motion.div key={cat.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30 text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <cat.icon size={22} className="text-secondary" />
                </div>
                <h3 className="font-heading text-primary text-base mb-2">{cat.title}</h3>
                <p className="text-primary/68 font-body text-sm leading-relaxed">{cat.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="mb-12 sm:mb-14">
            <SectionHeading
              tag="Open Positions"
              title="Current"
              accent="Openings"
              align="center"
              className="max-w-2xl"
            />
          </Motion.div>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {(jobs || []).map((job, i) => (
              <Motion.div key={job.id || i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group flex h-full flex-col hover:border-primary/30">
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full border ${TYPE_COLOR[job.type] || TYPE_COLOR['Freelance']}`}>
                    {job.type}
                  </span>
                </div>
                <h3 className="font-heading text-primary text-base sm:text-[1.05rem] mb-2">{job.title}</h3>
                <p className="text-primary/68 font-body text-sm mb-4 leading-relaxed flex-1">{job.description}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-primary/58 text-xs font-body">
                  <span className="flex items-center gap-1.5"><MapPin size={11}/> {job.location || 'Pune / Remote'}</span>
                  <span className="flex items-center gap-1.5"><Clock size={11}/> {job.experience || '2+ years'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => downloadJobDescription(job)}
                  className="mt-5 inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2.5 font-body text-sm font-medium text-primary transition-colors hover:border-primary/35 hover:bg-primary/10">
                  <Download size={15} />
                  Download Job Description
                </button>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="mb-10 sm:mb-12">
            <SectionHeading
              tag="Apply Now"
              title="Submit Your"
              accent="Application"
              align="center"
              className="max-w-2xl"
            />
          </Motion.div>

          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="section-shell p-6 sm:p-8">

            {submitted && (
              <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4 mb-6 text-secondary font-body text-sm">
                ✅ Application received! We'll review and get back to you within 3 business days.
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
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={FIELD_LABEL}>Full Name *</label>
                  <input {...register('name')} placeholder="Your name"
                    className={FIELD_INPUT} />
                  {errors.name && <p className={FIELD_ERROR}>{errors.name.message}</p>}
                </div>
                <div>
                  <label className={FIELD_LABEL}>Email Address *</label>
                  <input {...register('email')} type="email" placeholder="your@email.com"
                    className={FIELD_INPUT} />
                  {errors.email && <p className={FIELD_ERROR}>{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className={FIELD_LABEL}>Portfolio / LinkedIn URL</label>
                <input {...register('portfolio')} placeholder="https://yourportfolio.com"
                  className={FIELD_INPUT} />
                {errors.portfolio && <p className={FIELD_ERROR}>{errors.portfolio.message}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={FIELD_LABEL}>Employment Type *</label>
                  <select {...register('type')}
                    className={`${FIELD_INPUT} appearance-none`}>
                    <option value="">Select type...</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Freelance</option>
                    <option>Internship</option>
                  </select>
                  {errors.type && <p className={FIELD_ERROR}>{errors.type.message}</p>}
                </div>
                <div>
                  <label className={FIELD_LABEL}>Role Applying For</label>
                  <input {...register('role')} placeholder="e.g. Photographer"
                    className={FIELD_INPUT} />
                </div>
              </div>

              <div>
                <label className={FIELD_LABEL}>Why would you like to work with ShutterBeat Media?</label>
                <textarea {...register('message')} rows={4} placeholder="Tell us about yourself and why you want to work with us..."
                  className={`${FIELD_INPUT} min-h-[140px] resize-none`} />
                {errors.message && <p className={FIELD_ERROR}>{errors.message.message}</p>}
              </div>

              <div>
                <label className={FIELD_LABEL}>Upload CV / Resume</label>
                <div className="flex min-h-[132px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/12 bg-slate-50/70 p-6 text-center">
                  <Upload size={24} className="text-primary/20 mx-auto mb-2" />
                  <p className="text-primary/60 font-body text-sm leading-relaxed max-w-lg">
                    {resumeUploadEnabled
                      ? 'Secure resume upload will be enabled after private object storage and malware scanning are configured.'
                      : 'Resume upload is currently disabled until private object storage and malware scanning are configured.'}
                  </p>
                  <p className="text-primary/45 font-body text-xs mt-2">For now, please include your portfolio or LinkedIn URL.</p>
                </div>
              </div>

              <div>
                <label className={FIELD_LABEL}>Verification *</label>
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
                className="btn-primary w-full justify-center py-4 text-base mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Submitting...' : 'Submit Application'} <Send size={18}/>
              </button>
            </form>
          </Motion.div>
        </div>
      </section>
    </div>
  )
}
