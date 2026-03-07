import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react'
import { contactInfo } from '../data/contact'

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const SERVICES = [
  'Photography','Music','Event Management','Film Making',
  'Advertising','Web Development','Branding','Business Consultation',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log('Form data:', data)
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-[#F4E8DC] to-secondary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-36">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <span className="section-tag">Get In Touch</span>
            <h1 className="font-heading text-display text-primary mb-4 leading-tight">
              Let's <span className="text-gradient">Talk</span>
            </h1>
            <p className="text-primary/50 font-body text-xl max-w-xl">
              Have a project in mind? We'd love to hear about it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <span className="section-tag">Contact Info</span>
                <h2 className="font-heading text-h3 text-primary mt-2 mb-6">Reach Out to <span className="text-gradient">Us</span></h2>
              </div>

              {/* Phone */}
              <div className="card group hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-primary/40 font-body text-xs mb-1 tracking-widest uppercase">Phone</p>
                    {(contactInfo?.phones || ['+91 9158664515','+91 9561422961']).map(p => (
                      <a key={p} href={`tel:${p}`} className="block font-heading text-primary text-sm hover:text-secondary transition-colors">{p}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card group hover:border-secondary/30">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-primary/40 font-body text-xs mb-1 tracking-widest uppercase">Email</p>
                    <a href={`mailto:${contactInfo?.email || 'shutterbeat.media@gmail.com'}`}
                      className="font-heading text-primary text-sm hover:text-secondary transition-colors">
                      {contactInfo?.email || 'shutterbeat.media@gmail.com'}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="card group hover:border-tertiary/30">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-tertiary" />
                  </div>
                  <div>
                    <p className="text-primary/40 font-body text-xs mb-1 tracking-widest uppercase">Address</p>
                    <p className="font-heading text-primary text-sm">{contactInfo?.address || 'Pune, Maharashtra, India'}</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="text-primary/40 font-body text-xs mb-4 tracking-widest uppercase">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { Icon:Instagram, href:contactInfo?.socials?.instagram || '#', color:'hover:text-secondary' },
                    { Icon:Facebook,  href:contactInfo?.socials?.facebook  || '#', color:'hover:text-secondary' },
                    { Icon:Linkedin,  href:contactInfo?.socials?.linkedin  || '#', color:'hover:text-secondary' },
                    { Icon:Youtube,   href:contactInfo?.socials?.youtube   || '#', color:'hover:text-primary' },
                    { Icon:Twitter,   href:contactInfo?.socials?.twitter   || '#', color:'hover:text-secondary' },
                  ].map(({ Icon, href, color }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-xl bg-[#F4E8DC] border border-[#D7C2AD] flex items-center justify-center text-primary/40 ${color} hover:border-primary/20 transition-all duration-200`}>
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="lg:col-span-3">
              <div className="bg-[#F4E8DC] border border-[#D7C2AD] rounded-card p-8">
                <h3 className="font-heading text-primary text-xl mb-6">Send Us a Message</h3>

                {submitted && (
                  <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4 mb-6 text-secondary font-body text-sm">
                    ✅ Thank you! We'll get back to you within 24 hours.
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

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-primary/50 font-body text-xs mb-1.5 block tracking-wide">Phone Number</label>
                      <input {...register('phone')} placeholder="+91 00000 00000"
                        className="w-full bg-tertiary border border-[#D7C2AD] rounded-xl px-4 py-3 text-primary font-body text-sm placeholder:text-primary/20 focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                    <div>
                      <label className="text-primary/50 font-body text-xs mb-1.5 block tracking-wide">Company / Brand</label>
                      <input {...register('company')} placeholder="Your company (optional)"
                        className="w-full bg-tertiary border border-[#D7C2AD] rounded-xl px-4 py-3 text-primary font-body text-sm placeholder:text-primary/20 focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="text-primary/50 font-body text-xs mb-1.5 block tracking-wide">Service Interested In</label>
                    <select {...register('service')}
                      className="w-full bg-tertiary border border-[#D7C2AD] rounded-xl px-4 py-3 text-primary font-body text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-primary/50 font-body text-xs mb-1.5 block tracking-wide">Message *</label>
                    <textarea {...register('message')} rows={5} placeholder="Tell us about your project..."
                      className="w-full bg-tertiary border border-[#D7C2AD] rounded-xl px-4 py-3 text-primary font-body text-sm placeholder:text-primary/20 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                    {errors.message && <p className="text-primary text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button type="submit"
                    className="btn-primary w-full justify-center py-4 text-base mt-2">
                    Send Message <Send size={18}/>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
