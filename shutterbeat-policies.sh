#!/bin/bash
# ============================================================
#  ShutterBeat Media — Policies Page + Footer Patch
#  Run from PROJECT ROOT:  bash shutterbeat-policies.sh
# ============================================================

set -e

echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║   ShutterBeat — Policies + Footer Patch     ║"
echo "╚══════════════════════════════════════════════╝"
echo ""

# ══════════════════════════════════════════════
# 1. POLICIES DATA FILE
# ══════════════════════════════════════════════
echo "🗂   Writing src/data/policies.js ..."

cat > src/data/policies.js << 'POLICIES_DATA_EOF'
export const policiesMeta = {
  companyName:    'ShutterBeat Media',
  companyAddress: 'Pune, Maharashtra, India',
  contactEmail:   'shutterbeat.media@gmail.com',
  lastUpdated:    'March 2026',
  website:        'https://www.shutterbeatmedia.com',
}

export const policies = [
  {
    id: 'privacy',
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    badge: 'DPDP Act 2023',
    badgeColor: 'bg-primary/20 text-primary border-primary/30',
    icon: 'Shield',
    summary: 'How we collect, use, store and protect your personal data — including rights under India\'s Digital Personal Data Protection Act 2023 and global frameworks.',
    sections: [
      {
        heading: '1. Who We Are',
        body: `ShutterBeat Media ("we", "us", "our") is a creative media company based in Pune, Maharashtra, India. This policy explains how we handle personal data collected through our website, services and communications.`,
      },
      {
        heading: '2. Data We Collect',
        body: `We may collect: (a) Contact data — name, email address, phone number, company name submitted via our contact or application forms. (b) Usage data — pages visited, time spent, browser type, IP address collected automatically via analytics tools. (c) Communications — messages, project briefs and any content you send us. (d) Cookies & tracking data — described in our separate Cookie Policy.`,
      },
      {
        heading: '3. How We Use Your Data',
        body: `We use your data to: respond to enquiries and deliver requested services; send project updates and invoices; improve our website and user experience; comply with legal obligations. We do not sell your personal data to third parties.`,
      },
      {
        heading: '4. Legal Basis (India DPDP Act 2023)',
        body: `Under the Digital Personal Data Protection Act 2023, we process personal data on the basis of your consent (given when you submit a form or enquiry) and for legitimate interests (operating our business and communicating with clients). You may withdraw consent at any time by contacting us.`,
      },
      {
        heading: '5. International Visitors',
        body: `If you access our website from outside India, your data may be transferred to and processed in India. We take reasonable steps to ensure appropriate safeguards are in place. EU/UK visitors have additional rights under GDPR/UK GDPR — including the right to access, rectify, erase, restrict or port your data.`,
      },
      {
        heading: '6. Data Retention',
        body: `We retain personal data only as long as necessary for the purpose it was collected, typically 3 years for client communication records and 1 year for general enquiries. See our Data Processing & Retention policy for full details.`,
      },
      {
        heading: '7. Your Rights',
        body: `You have the right to: access your personal data; correct inaccurate data; request deletion (right to be forgotten); withdraw consent at any time; lodge a complaint with the relevant data protection authority. To exercise any right, email us at shutterbeat.media@gmail.com.`,
      },
      {
        heading: '8. Contact',
        body: `Data Controller: ShutterBeat Media, Pune, Maharashtra, India. Email: shutterbeat.media@gmail.com`,
      },
    ],
  },

  {
    id: 'terms',
    slug: 'terms-and-conditions',
    title: 'Terms & Conditions',
    badge: 'Website Usage',
    badgeColor: 'bg-secondary/20 text-secondary border-secondary/30',
    icon: 'FileText',
    summary: 'Rules governing your use of our website and any services engaged through it.',
    sections: [
      {
        heading: '1. Acceptance',
        body: `By accessing or using the ShutterBeat Media website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the website.`,
      },
      {
        heading: '2. Use of the Website',
        body: `You may use this website for lawful purposes only. You must not: use it in any way that violates applicable laws or regulations; transmit unsolicited commercial communications; attempt to gain unauthorised access to any part of the website or its servers.`,
      },
      {
        heading: '3. Services & Engagement',
        body: `Information on this website is for general informational purposes. Actual service terms, pricing and deliverables are governed by a separate Client Agreement or Statement of Work signed between you and ShutterBeat Media.`,
      },
      {
        heading: '4. Intellectual Property',
        body: `All content on this website — including text, images, graphics, logos and videos — is owned by or licensed to ShutterBeat Media and protected by applicable intellectual property laws. See our full Intellectual Property Policy for detail.`,
      },
      {
        heading: '5. Third-Party Links',
        body: `Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.`,
      },
      {
        heading: '6. Disclaimer of Warranties',
        body: `The website is provided "as is" without warranties of any kind. We do not warrant that the website will be uninterrupted, error-free or free of viruses or other harmful components.`,
      },
      {
        heading: '7. Limitation of Liability',
        body: `To the maximum extent permitted by law, ShutterBeat Media shall not be liable for any indirect, incidental, special or consequential damages arising from your use of the website.`,
      },
      {
        heading: '8. Governing Law',
        body: `These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.`,
      },
      {
        heading: '9. Changes',
        body: `We reserve the right to modify these Terms at any time. Continued use of the website after changes constitutes acceptance of the updated Terms.`,
      },
    ],
  },

  {
    id: 'cookies',
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    badge: 'Tracking Technologies',
    badgeColor: 'bg-tertiary/20 text-tertiary border-tertiary/30',
    icon: 'Cookie',
    summary: 'What cookies and tracking technologies we use, why we use them, and how you can control them.',
    sections: [
      {
        heading: '1. What Are Cookies',
        body: `Cookies are small text files placed on your device when you visit a website. They help us remember your preferences and understand how you use our site.`,
      },
      {
        heading: '2. Cookies We Use',
        body: `Strictly Necessary Cookies: Required for the website to function (e.g. session management). These cannot be disabled. Analytics Cookies: We may use tools such as Google Analytics to understand visitor behaviour — pages viewed, time on site, traffic sources. These are only active with your consent. Preference Cookies: Remember your choices (e.g. language, region). Marketing Cookies: If we run advertising campaigns, these track ad performance. Currently not active on this site.`,
      },
      {
        heading: '3. Third-Party Tracking',
        body: `We may embed third-party content (e.g. YouTube videos, Google Maps) that may set their own cookies. We have no control over these cookies — please review the respective third-party privacy policies.`,
      },
      {
        heading: '4. Managing Cookies',
        body: `You can control cookies through your browser settings — most browsers allow you to block or delete cookies. Note that disabling certain cookies may affect website functionality. You can also opt out of Google Analytics at: tools.google.com/dlpage/gaoptout`,
      },
      {
        heading: '5. Updates',
        body: `We may update this Cookie Policy as we adopt new technologies. Check back periodically for changes.`,
      },
    ],
  },

  {
    id: 'ip',
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    badge: 'Content Usage',
    badgeColor: 'bg-primary/20 text-primary border-primary/30',
    icon: 'Copyright',
    summary: 'Ownership of creative work, permitted uses of our content, and client content rights.',
    sections: [
      {
        heading: '1. Our Intellectual Property',
        body: `All original content created by ShutterBeat Media — including photography, videography, graphic design, website copy, logos and branding materials — is protected by copyright under the Copyright Act, 1957 (India) and international treaties.`,
      },
      {
        heading: '2. Website Content',
        body: `You may not reproduce, distribute, modify, create derivative works from, publicly display or commercially exploit any content from our website without our prior written consent.`,
      },
      {
        heading: '3. Client Work & Licensing',
        body: `Upon full payment of agreed fees, clients receive a licence to use deliverables as defined in the Client Agreement. Unless explicitly transferred in writing, copyright in all deliverables remains with ShutterBeat Media. We reserve the right to display client work in our portfolio unless a confidentiality clause is agreed.`,
      },
      {
        heading: '4. Portfolio Usage',
        body: `We may showcase work produced for clients on our website, social media and marketing materials. If you require that your project remain confidential, please notify us in writing before project commencement.`,
      },
      {
        heading: '5. Third-Party Content',
        body: `Where our deliverables incorporate licensed stock assets, fonts or third-party elements, usage is governed by the respective third-party licences. We will disclose such usage upon request.`,
      },
      {
        heading: '6. Reporting Infringement',
        body: `If you believe any content on our website infringes your intellectual property rights, please contact us at shutterbeat.media@gmail.com with details of the allegedly infringing content.`,
      },
    ],
  },

  {
    id: 'data-retention',
    slug: 'data-processing',
    title: 'Data Processing & Retention',
    badge: 'DPDP Compliance',
    badgeColor: 'bg-secondary/20 text-secondary border-secondary/30',
    icon: 'Database',
    summary: 'Detailed information on how long we keep your data, where it is stored, and how it is processed.',
    sections: [
      {
        heading: '1. Data Categories & Retention Periods',
        body: `Client contact details & project files: Retained for 5 years after project completion for legal and accounting purposes. General website enquiries: Retained for 12 months. Job applicant data: Retained for 6 months if unsuccessful; successful applicants' data is retained as part of the employment record. Analytics data: Aggregated and anonymised — retained indefinitely. Cookie consent records: Retained for 12 months.`,
      },
      {
        heading: '2. Data Storage & Security',
        body: `Data is stored on secure servers located in India and/or with reputable cloud providers (e.g. Google Workspace, AWS). We implement reasonable technical and organisational security measures including access controls, encryption in transit and regular security reviews.`,
      },
      {
        heading: '3. Data Processors',
        body: `We may share data with trusted third-party processors who act on our instructions: Google (Analytics, Workspace), email service providers, accounting software. All processors are required to handle data in accordance with applicable law.`,
      },
      {
        heading: '4. Cross-Border Transfers',
        body: `Some processors may store or process data outside India. We ensure appropriate safeguards are in place as required by the DPDP Act 2023.`,
      },
      {
        heading: '5. Data Deletion Requests',
        body: `To request deletion of your personal data, email shutterbeat.media@gmail.com. We will action your request within 30 days, subject to legal obligations that require us to retain certain records.`,
      },
    ],
  },

  {
    id: 'accessibility',
    slug: 'accessibility',
    title: 'Accessibility Statement',
    badge: 'WCAG 2.1',
    badgeColor: 'bg-tertiary/20 text-tertiary border-tertiary/30',
    icon: 'Accessibility',
    summary: 'Our commitment to making this website accessible to all users, including those with disabilities.',
    sections: [
      {
        heading: '1. Our Commitment',
        body: `ShutterBeat Media is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.`,
      },
      {
        heading: '2. Conformance Status',
        body: `We aim for conformance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. While we strive to meet this standard, some content may not yet fully conform as we continue to improve.`,
      },
      {
        heading: '3. Known Limitations',
        body: `Some older embedded media content and third-party widgets may not meet full accessibility standards. We are actively working to address these.`,
      },
      {
        heading: '4. Technical Specifications',
        body: `This website relies on HTML, CSS and JavaScript. We use semantic HTML, sufficient colour contrast, keyboard navigability and ARIA labels where appropriate.`,
      },
      {
        heading: '5. Feedback & Contact',
        body: `If you experience any accessibility barriers on our website, please contact us at shutterbeat.media@gmail.com. We take all feedback seriously and aim to respond within 5 business days.`,
      },
      {
        heading: '6. Formal Complaints',
        body: `If you are not satisfied with our response to your accessibility concern, you may contact the relevant regulatory authority in your jurisdiction.`,
      },
    ],
  },

  {
    id: 'disclosure',
    slug: 'disclosure',
    title: 'Disclosure Policy',
    badge: 'Sponsored & Affiliate',
    badgeColor: 'bg-primary/20 text-primary border-primary/30',
    icon: 'Megaphone',
    summary: 'Transparency about sponsored content, affiliate relationships and paid partnerships on our website and social channels.',
    sections: [
      {
        heading: '1. Sponsored Content',
        body: `ShutterBeat Media may occasionally publish content that is sponsored by or created in partnership with third-party brands. All sponsored content will be clearly labelled "Sponsored", "In Partnership With" or "Ad" at the top of the relevant page or post.`,
      },
      {
        heading: '2. Affiliate Links',
        body: `We may include affiliate links to products or services we recommend. If you click such a link and make a purchase, we may receive a commission at no extra cost to you. Affiliate links will be disclosed with a notice such as "This post contains affiliate links."`,
      },
      {
        heading: '3. Editorial Independence',
        body: `Regardless of sponsorship or affiliate relationships, all opinions expressed on this website are our own. We only recommend products and services we genuinely believe in. Sponsorship does not influence the editorial integrity of our content.`,
      },
      {
        heading: '4. Client Portfolio Content',
        body: `Work showcased in our portfolio was produced for paying clients. Portfolio case studies are factual representations of completed projects and are not paid promotional placements.`,
      },
      {
        heading: '5. Questions',
        body: `If you have any questions about our disclosure practices, please contact us at shutterbeat.media@gmail.com.`,
      },
    ],
  },

  {
    id: 'applicant',
    slug: 'applicant-data-notice',
    title: 'Career Applicant Data Notice',
    badge: 'Job Applications',
    badgeColor: 'bg-secondary/20 text-secondary border-secondary/30',
    icon: 'UserCheck',
    summary: 'How we handle personal data submitted through job applications and the Opportunities page.',
    sections: [
      {
        heading: '1. What Data We Collect',
        body: `When you apply for a role or submit your profile via our Opportunities page, we collect: your name, email address, phone number, portfolio/LinkedIn URL, CV/resume, employment type preference and any message you provide.`,
      },
      {
        heading: '2. How We Use It',
        body: `Your application data is used solely to: evaluate your suitability for current or future roles at ShutterBeat Media; contact you regarding your application; maintain records of talent we may engage in future.`,
      },
      {
        heading: '3. Who Sees Your Data',
        body: `Application data is accessible only to ShutterBeat Media's hiring team. We do not share applicant data with third parties without your explicit consent.`,
      },
      {
        heading: '4. Retention',
        body: `Unsuccessful applications are retained for 6 months from the date of submission, after which they are securely deleted. If you are offered and accept a role, your data is retained as part of your employment record.`,
      },
      {
        heading: '5. Your Rights',
        body: `You may request access to, correction of, or deletion of your applicant data at any time by emailing shutterbeat.media@gmail.com. We will respond within 30 days.`,
      },
      {
        heading: '6. Consent',
        body: `By submitting an application, you consent to the processing of your personal data as described in this notice and our Privacy Policy.`,
      },
    ],
  },
]
POLICIES_DATA_EOF

echo "  ✅  src/data/policies.js"

# ══════════════════════════════════════════════
# 2. POLICIES PAGE
# ══════════════════════════════════════════════
echo "📄  Writing src/pages/Policies.jsx ..."

cat > src/pages/Policies.jsx << 'POLICIES_PAGE_EOF'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield, FileText, Cookie, Copyright, Database,
  Accessibility, Megaphone, UserCheck,
  ChevronDown, ChevronUp, ExternalLink, ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { policies, policiesMeta } from '../data/policies'

// Map icon strings → lucide components
const ICON_MAP = {
  Shield,
  FileText,
  Cookie,
  Copyright,
  Database,
  Accessibility,
  Megaphone,
  UserCheck,
}

const GRID_STYLE = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

// ── Single policy accordion card ─────────────
function PolicyCard({ policy }) {
  const [open, setOpen] = useState(false)
  const Icon = ICON_MAP[policy.icon] || FileText

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-dark-800 border border-dark-600 rounded-card overflow-hidden hover:border-white/10 transition-colors">

      {/* Header / toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start gap-5 p-6 text-left group">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-dark-700 border border-dark-600 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors">
          <Icon size={22} className="text-secondary" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-heading text-white text-base">{policy.title}</h3>
            <span className={`text-xs font-body font-semibold px-2.5 py-0.5 rounded-full border ${policy.badgeColor}`}>
              {policy.badge}
            </span>
          </div>
          <p className="text-white/40 font-body text-sm leading-relaxed line-clamp-2">{policy.summary}</p>
        </div>

        {/* Chevron */}
        <div className="shrink-0 mt-1">
          {open
            ? <ChevronUp  size={18} className="text-white/40 group-hover:text-white transition-colors" />
            : <ChevronDown size={18} className="text-white/40 group-hover:text-white transition-colors" />}
        </div>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden">
            <div className="px-6 pb-8 flex flex-col gap-6">
              <div className="h-px bg-dark-600" />
              {policy.sections.map((sec, i) => (
                <div key={i}>
                  <h4 className="font-heading text-white text-sm mb-2">{sec.heading}</h4>
                  <p className="text-white/50 font-body text-sm leading-relaxed">{sec.body}</p>
                </div>
              ))}
              {/* Contact footer */}
              <div className="mt-2 p-4 bg-dark-900 rounded-xl border border-dark-600">
                <p className="text-white/30 font-body text-xs">
                  Questions about this policy?{' '}
                  <a href={`mailto:${policiesMeta.contactEmail}`}
                    className="text-secondary hover:text-white transition-colors">
                    {policiesMeta.contactEmail}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Page ──────────────────────────────────────
export default function Policies() {
  return (
    <div className="bg-dark-900 min-h-screen">

      {/* ── Banner ──────────────────────────────── */}
      <section className="relative min-h-[45vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-dark-800 to-secondary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-36">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="section-tag">Legal & Compliance</span>
            <h1 className="font-heading text-display text-white mb-4 leading-tight">
              Policies &amp; <span className="text-gradient">Terms</span>
            </h1>
            <p className="text-white/50 font-body text-xl max-w-2xl">
              Transparency is core to how we operate. Read our policies to understand
              how we handle your data, protect intellectual property and run our business.
            </p>
            <p className="text-white/30 font-body text-sm mt-4">
              Last updated: {policiesMeta.lastUpdated} · {policiesMeta.companyName}, {policiesMeta.companyAddress}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Quick Nav ────────────────────────────── */}
      <section className="py-8 bg-dark-800 border-y border-dark-600 sticky top-16 z-20 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-white/30 font-body text-xs tracking-widest uppercase mr-2 shrink-0">Jump to:</span>
            {policies.map(p => {
              const Icon = ICON_MAP[p.icon] || FileText
              return (
                <a key={p.id}
                  href={`#${p.id}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-dark-600 text-white/40 hover:text-white hover:border-primary/40 font-body text-xs transition-all duration-200">
                  <Icon size={11} />
                  {p.title}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Policy Cards ─────────────────────────── */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom max-w-4xl flex flex-col gap-4">
          {policies.map(policy => (
            <div key={policy.id} id={policy.id}>
              <PolicyCard policy={policy} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Summary strip ────────────────────────── */}
      <section className="section-padding bg-dark-800 border-t border-dark-600">
        <div className="container-custom max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon:Shield,   label:'Data Protected',  desc:'We follow India\'s DPDP Act 2023 and global best practices.' },
              { icon:Copyright,label:'IP Respected',    desc:'All creative work is protected. Client licences are clearly defined.' },
              { icon:FileText, label:'Transparent',     desc:'No hidden clauses. Every policy is written in plain English.' },
            ].map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-white text-sm mb-1">{item.label}</h4>
                  <p className="text-white/40 font-body text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-6 bg-dark-900 border border-dark-600 rounded-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-white text-base mb-1">Questions about our policies?</h3>
              <p className="text-white/40 font-body text-sm">
                Reach out and we'll clarify anything within 2 business days.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Contact Us <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
POLICIES_PAGE_EOF

echo "  ✅  src/pages/Policies.jsx"

# ══════════════════════════════════════════════
# 3. ADD ROUTE TO App.jsx / main router
# ══════════════════════════════════════════════
echo "🛣   Checking routes file..."

ROUTER_FILE=""
for f in src/App.jsx src/router.jsx src/routes.jsx src/main.jsx; do
  if [ -f "$f" ]; then
    ROUTER_FILE="$f"
    break
  fi
done

if [ -n "$ROUTER_FILE" ]; then
  if grep -q "Policies" "$ROUTER_FILE" 2>/dev/null; then
    echo "  ℹ️   Policies route already exists in $ROUTER_FILE — skipping"
  else
    echo "  ⚠️   Found $ROUTER_FILE but Policies route is missing."
    echo "      Add this import + route manually (see instructions below)."
  fi
else
  echo "  ⚠️   Could not auto-detect router file."
fi

echo ""
echo "  📌  ADD THESE MANUALLY to your router file (App.jsx or similar):"
echo ""
echo "      import Policies from './pages/Policies'"
echo "      <Route path=\"/policies\" element={<Policies />} />"
echo ""

# ══════════════════════════════════════════════
# 4. FOOTER PATCH
# ══════════════════════════════════════════════
echo "🦶  Writing Footer patch..."

# Find Footer file
FOOTER_FILE=""
for f in \
  src/components/layout/Footer.jsx \
  src/components/Footer.jsx \
  src/layout/Footer.jsx \
  src/components/shared/Footer.jsx; do
  if [ -f "$f" ]; then
    FOOTER_FILE="$f"
    break
  fi
done

if [ -n "$FOOTER_FILE" ]; then
  echo "  Found Footer at: $FOOTER_FILE"
  echo "  ⚠️   Auto-patching is risky. Writing a REPLACEMENT Footer instead."
  cp "$FOOTER_FILE" "${FOOTER_FILE}.bak"
  echo "  ✅  Backup saved to ${FOOTER_FILE}.bak"
  FOOTER_OUT="$FOOTER_FILE"
else
  echo "  ℹ️   Footer not found — writing to src/components/layout/Footer.jsx"
  mkdir -p src/components/layout
  FOOTER_OUT="src/components/layout/Footer.jsx"
fi

cat > "$FOOTER_OUT" << 'FOOTER_EOF'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Linkedin, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react'
import { services } from '../../data/services'
import { clients } from '../../data/clients'

const LEGAL_LINKS = [
  { label: 'Privacy Policy',               href: '/policies#privacy' },
  { label: 'Terms & Conditions',           href: '/policies#terms' },
  { label: 'Cookie Policy',                href: '/policies#cookies' },
  { label: 'Intellectual Property',        href: '/policies#ip' },
  { label: 'Data Processing & Retention',  href: '/policies#data-retention' },
  { label: 'Accessibility Statement',      href: '/policies#accessibility' },
  { label: 'Disclosure Policy',            href: '/policies#disclosure' },
  { label: 'Applicant Data Notice',        href: '/policies#applicant' },
]

const SOCIALS = [
  { Icon: Instagram, href: '#', label: 'Instagram', hover: 'hover:text-pink-400 hover:border-pink-400/30' },
  { Icon: Facebook,  href: '#', label: 'Facebook',  hover: 'hover:text-blue-400 hover:border-blue-400/30' },
  { Icon: Linkedin,  href: '#', label: 'LinkedIn',  hover: 'hover:text-sky-400  hover:border-sky-400/30'  },
  { Icon: Youtube,   href: '#', label: 'YouTube',   hover: 'hover:text-red-400  hover:border-red-400/30'  },
  { Icon: Twitter,   href: '#', label: 'Twitter',   hover: 'hover:text-sky-300  hover:border-sky-300/30'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-600">

      {/* ── Main grid ─────────────────────────── */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-white text-xl font-bold tracking-wide">
                Shutter<span className="text-secondary">Beat</span>
              </span>
            </Link>
            <p className="text-white/40 font-body text-sm leading-relaxed mb-6 max-w-xs">
              A creative media studio based in Pune — photography, film, branding,
              advertising, events, music and digital strategy.
            </p>
            {/* Socials */}
            <div className="flex gap-2">
              {SOCIALS.map(({ Icon, href, label, hover }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`w-9 h-9 rounded-xl bg-dark-800 border border-dark-600 flex items-center justify-center text-white/30 transition-all duration-200 ${hover}`}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-white text-sm mb-4 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-2">
              {(services || []).map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`}
                    className="text-white/40 hover:text-white font-body text-sm transition-colors duration-150">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-white text-sm mb-4 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Home',          href: '/'             },
                { label: 'About Us',      href: '/about'        },
                { label: 'Portfolio',     href: '/portfolio'    },
                { label: 'Opportunities', href: '/opportunities' },
                { label: 'Contact',       href: '/contact'      },
                { label: 'Policies',      href: '/policies'     },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link to={href}
                    className="text-white/40 hover:text-white font-body text-sm transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-white text-sm mb-4 tracking-wide">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-white/40 font-body text-sm">
                <MapPin size={14} className="text-secondary shrink-0 mt-0.5" />
                Pune, Maharashtra, India
              </li>
              <li>
                <a href="tel:+919158664515"
                  className="flex items-center gap-2.5 text-white/40 hover:text-white font-body text-sm transition-colors">
                  <Phone size={14} className="text-secondary shrink-0" />
                  +91 91586 64515
                </a>
              </li>
              <li>
                <a href="tel:+919561422961"
                  className="flex items-center gap-2.5 text-white/40 hover:text-white font-body text-sm transition-colors">
                  <Phone size={14} className="text-secondary shrink-0" />
                  +91 95614 22961
                </a>
              </li>
              <li>
                <a href="mailto:shutterbeat.media@gmail.com"
                  className="flex items-center gap-2.5 text-white/40 hover:text-white font-body text-sm transition-colors break-all">
                  <Mail size={14} className="text-secondary shrink-0" />
                  shutterbeat.media@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Legal strip ───────────────────────── */}
      <div className="border-t border-dark-600">
        <div className="container-custom py-6">
          {/* Policy links */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link key={href} to={href}
                className="text-white/25 hover:text-white/60 font-body text-xs transition-colors duration-150">
                {label}
              </Link>
            ))}
          </div>
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-white/20 font-body text-xs">
              © {year} ShutterBeat Media. All rights reserved.
            </p>
            <p className="text-white/15 font-body text-xs">
              Made with ❤️ in Pune, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
FOOTER_EOF

echo "  ✅  Footer written to $FOOTER_OUT"

# ══════════════════════════════════════════════
# DONE
# ══════════════════════════════════════════════
echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                    ✅  ALL DONE!                        ║"
echo "╠══════════════════════════════════════════════════════════╣"
echo "║  Files written:                                         ║"
echo "║   src/data/policies.js      (8 full policy documents)  ║"
echo "║   src/pages/Policies.jsx    (accordion UI page)        ║"
echo "║   src/components/layout/Footer.jsx  (with legal strip) ║"
echo "╠══════════════════════════════════════════════════════════╣"
echo "║  MANUAL STEPS REQUIRED:                                 ║"
echo "║   1. Add to your router (App.jsx):                     ║"
echo "║      import Policies from './pages/Policies'           ║"
echo "║      <Route path=\"/policies\" element={<Policies />} /> ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
