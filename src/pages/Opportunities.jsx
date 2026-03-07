import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Briefcase, MapPin, Clock, Upload, Send, Palette, Code, Megaphone, Film } from 'lucide-react'
import { jobs } from '../data/jobs'

const schema = z.object({
  name:      z.string().min(2, 'Name must be at least 2 characters'),
  email:     z.string().email('Please enter a valid email address'),
  portfolio: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  type:      z.string().min(1, 'Please select an employment type'),
  role:      z.string().optional(),
  message:   z.string().optional(),
})

const freelancerCategories = [
  { icon:Palette, title:'Designers',   desc:'Graphic designers, motion designers and UI/UX specialists.' },
  { icon:Film,    title:'Editors',     desc:'Video editors, color graders and post-production artists.' },
  { icon:Code,    title:'Developers',  desc:'Front-end, back-end and full-stack web developers.' },
  { icon:Megaphone,title:'Marketers', desc:'Performance marketers, content creators and SEO specialists.' },
]

const TYPE_COLOR = {
  'Full-time':'bg-primary/20 text-primary border-primary/30',
  'Part-time':'bg-secondary/20 text-secondary border-secondary/30',
  'Freelance':'bg-tertiary/20 text-tertiary border-tertiary/30',
}

export default function Opportunities() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = (data) => {
    console.log('Application:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  const GRID_STYLE = {
    backgroundImage: 'linear-gradient(rgba(72,90,168,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(72,90,168,.08) 1px,transparent 1px)',
    backgroundSize: '60px 60px',
  }

  return (
    <div className="bg-tertiary min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[45vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4E8DC]" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-[#F4E8DC] to-primary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-36">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <span className="section-tag">Join the Team</span>
            <h1 className="font-heading text-display text-primary mb-4 leading-tight">
              Build With <span className="text-gradient">Us</span>
            </h1>
            <p className="text-primary/50 font-body text-xl max-w-xl">
              We're always looking for talented, passionate creatives to join our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Freelancer Categories */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Freelance Opportunities</span>
            <h2 className="font-heading text-h2 text-primary">We're Looking for <span className="text-gradient">Creatives</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freelancerCategories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30 text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <cat.icon size={22} className="text-secondary" />
                </div>
                <h3 className="font-heading text-primary text-base mb-2">{cat.title}</h3>
                <p className="text-primary/50 font-body text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Open Positions</span>
            <h2 className="font-heading text-h2 text-primary">Current <span className="text-gradient">Openings</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {(jobs || []).map((job, i) => (
              <motion.div key={job.id || i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-primary/30">
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full border ${TYPE_COLOR[job.type] || TYPE_COLOR['Freelance']}`}>
                    {job.type}
                  </span>
                </div>
                <h3 className="font-heading text-primary text-base mb-2">{job.title}</h3>
                <p className="text-primary/50 font-body text-sm mb-4 leading-relaxed">{job.description}</p>
                <div className="flex items-center gap-4 text-primary/30 text-xs font-body">
                  <span className="flex items-center gap-1.5"><MapPin size={11}/> {job.location || 'Pune / Remote'}</span>
                  <span className="flex items-center gap-1.5"><Clock size={11}/> {job.experience || '2+ years'}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom max-w-2xl">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-12">
            <span className="section-tag">Apply Now</span>
            <h2 className="font-heading text-h2 text-primary">Submit Your <span className="text-gradient">Application</span></h2>
          </motion.div>

          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="bg-[#F4E8DC] border border-[#D7C2AD] rounded-card p-8">

            {submitted && (
              <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4 mb-6 text-secondary font-body text-sm">
                ✅ Application received! We'll review and get back to you within 3 business days.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-primary/50 font-body text-xs mb-1.5 block tracking-wide">Full Name *</label>
                  <input {...register('name')} placeholder="Your name"
                    className="w-full bg-tertiary border border-[#D7C2AD] rounded-xl px-4 py-3 text-primary font-body text-sm placeholder:text-primary/20 focus:outline-none focus:border-primary/50 transition-colors" />
                  {errors.name && <p className="text-primary text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="text-primary/50 font-body text-xs mb-1.5 block tracking-wide">Email Address *</label>
                  <input {...register('email')} type="email" placeholder="your@email.com"
                    className="w-full bg-tertiary border border-[#D7C2AD] rounded-xl px-4 py-3 text-primary font-body text-sm placeholder:text-primary/20 focus:outline-none focus:border-primary/50 transition-colors" />
                  {errors.email && <p className="text-primary text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="text-primary/50 font-body text-xs mb-1.5 block tracking-wide">Portfolio / LinkedIn URL</label>
                <input {...register('portfolio')} placeholder="https://yourportfolio.com"
                  className="w-full bg-tertiary border border-[#D7C2AD] rounded-xl px-4 py-3 text-primary font-body text-sm placeholder:text-primary/20 focus:outline-none focus:border-primary/50 transition-colors" />
                {errors.portfolio && <p className="text-primary text-xs mt-1">{errors.portfolio.message}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-primary/50 font-body text-xs mb-1.5 block tracking-wide">Employment Type *</label>
                  <select {...register('type')}
                    className="w-full bg-tertiary border border-[#D7C2AD] rounded-xl px-4 py-3 text-primary font-body text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                    <option value="">Select type...</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Freelance</option>
                    <option>Internship</option>
                  </select>
                  {errors.type && <p className="text-primary text-xs mt-1">{errors.type.message}</p>}
                </div>
                <div>
                  <label className="text-primary/50 font-body text-xs mb-1.5 block tracking-wide">Role Applying For</label>
                  <input {...register('role')} placeholder="e.g. Photographer"
                    className="w-full bg-tertiary border border-[#D7C2AD] rounded-xl px-4 py-3 text-primary font-body text-sm placeholder:text-primary/20 focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
              </div>

              <div>
                <label className="text-primary/50 font-body text-xs mb-1.5 block tracking-wide">Why ShutterBeat?</label>
                <textarea {...register('message')} rows={4} placeholder="Tell us about yourself and why you want to work with us..."
                  className="w-full bg-tertiary border border-[#D7C2AD] rounded-xl px-4 py-3 text-primary font-body text-sm placeholder:text-primary/20 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
              </div>

              {/* CV Upload placeholder */}
              <div>
                <label className="text-primary/50 font-body text-xs mb-1.5 block tracking-wide">Upload CV / Resume</label>
                <div className="border-2 border-dashed border-[#D7C2AD] rounded-xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer">
                  <Upload size={24} className="text-primary/20 mx-auto mb-2" />
                  <p className="text-primary/30 font-body text-sm">Drag & drop or click to upload</p>
                  <p className="text-primary/20 font-body text-xs mt-1">PDF, DOC up to 10 MB</p>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-4 text-base mt-2">
                Submit Application <Send size={18}/>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
