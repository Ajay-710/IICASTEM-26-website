"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Calendar, MapPin, Users, Award, Lightbulb,
  Presentation, Mic, BookOpen, Mail, FileText,
  CheckCircle, Video, Globe, ChevronDown
} from "lucide-react"
import { SparklesCore } from "@/components/ui/sparkles"
import { TypingAnimation } from "@/components/ui/typing-animation"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">

      {/* 🏠 HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-slate-900">

        {/* Background Image with Gradient Overlay and Sparkles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-blue-900/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2000&auto=format&fit=crop"
            alt="Conference Background"
            className="w-full h-full object-cover opacity-50"
          />

          {/* Sparkles Effect */}
          <div className="absolute inset-0 z-20">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#FFFFFF"
              speed={0.5}
            />
          </div>
        </div>

        <div className="relative z-30 text-center px-4 max-w-5xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-4 backdrop-blur-sm">
              IEEE Conference Record: 70785
            </span>
            <TypingAnimation
              text="IICASTEM’26"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-2 leading-tight text-white"
              duration={150}
            />
            <p className="text-xl md:text-2xl font-light text-slate-200 mb-8">
              IEEE International Conference on Applied Science, Technology, Engineering and Management
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <Calendar className="text-blue-400 mb-2" size={28} />
              <p className="font-semibold text-lg">December 18, 2026</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <Users className="text-blue-400 mb-2" size={28} />
              <p className="text-sm text-slate-300">Organized by</p>
              <p className="font-semibold">Alpha College of Engineering</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <Globe className="text-blue-400 mb-2" size={28} />
              <p className="text-sm text-slate-300">Technical Sponsor</p>
              <p className="font-semibold">IEEE Madras Section</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ℹ️ ABOUT SECTION */}
      <section id="about" className="py-20 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Conference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <BookOpen className="text-blue-600" /> About Conference
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              IICASTEM’26 calls out for solutions for the unresolved problems and issues in the field of engineering and science.
              This conference aims at providing a platform for academicians, scientists, R&D institutions, industrial experts,
              research scholars, undergraduate and postgraduate students to showcase their work on recent development and solutions.
            </p>
          </motion.div>

          {/* College */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <MapPin className="text-blue-600" /> Alpha College
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Alpha College of Engineering was established in the year 2006, at Thirumazhisai, Chennai in a lush green area of 60 acres.
              Approved by AICTE and affiliated to Anna University. The college offers UG & PG degrees in various streams.
              Under the guidance of Sevaratna Dr. (Mrs.) Grace George and Mrs. Suja George, it carries a legacy of educational eminence.
              Awarded ISO 9001:2015 certification.
            </p>
          </motion.div>

          {/* IEEE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Globe className="text-blue-600" /> IEEE Madras Section
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              IEEE Madras Section is an association of technical professionals in Tamil Nadu. Historically, activities started in 1973.
              Attained Section status on April 28, 1978. Celebrated Silver Jubilee Year (1978-2003) honoring members of 25 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ⭐ FEATURES */}
      <section id="features" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Conference Spotlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Presentation, title: "Presentations", desc: "Experience outstanding Oral and Virtual presentations." },
              { icon: Lightbulb, title: "Innovation", desc: "Explore new real-world innovation ideas and techniques." },
              { icon: Users, title: "Networking", desc: "Skill learning, Knowledge sharing & brainstorming sessions." },
              { icon: Award, title: "Awards", desc: "Recognition & Appreciation awards for best papers." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <feature.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 👥 COMMITTEES */}
      <section id="committees" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-5xl space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Program Committees</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          <CommitteeGroup title="International Scientific Committee (ISC)">
            <Member name="Mr. Souri Rajan" role="Co-Founder & COO" org="BONbLoc Inc, New Jersey" />
            <Member name="Mrs. Sabitha Sambath" role="IT Business Partner" org="Bector, Dickinson, New Jersey" />
            <Member name="Mr. Tahir Basha" role="IT Professional" org="State of Indiana, USA" />
            <Member name="Mr. Po-ming Lee" role="Professor" org="Southern Taiwan Univ of Science and Tech" />
            <Member name="Dr. C Chellaram" role="Assoc. Prof" org="Sur College of Applied Science, Oman" />
            <Member name="Dr. Mohd Yacin Sikkandar" role="Assoc. Prof (CAMS)" org="Majmaah University, Saudi Arabia" />
          </CommitteeGroup>

          <CommitteeGroup title="National Advisory Committee">
            <Member name="Dr. Sumit Misra" role="Vice President" org="3i Info Tech Limited, Mumbai" />
            <Member name="Dr. C Gomathy" role="Vice Principal" org="SRM University, Chennai" />
            <Member name="Dr. Manickam" role="Visiting Professor" org="IISER, Bhopal" />
            <Member name="Dr. Sendhil Kumar" role="Assoc. Prof" org="Anna University, Chennai" />
          </CommitteeGroup>

          <CommitteeGroup title="Technical Program Committee (TPC)">
            <Member name="Dr. B Sowmya" role="Chair, Principal" org="Alpha College of Engineering" highlighted />
            <Member name="Dr. R Manickavasagam" role="Co-Chair, Vice Principal" org="Alpha College of Engineering" highlighted />

            <div className="col-span-full py-4 text-center font-semibold text-slate-500 uppercase tracking-widest text-xs">Associate Members</div>

            <Member name="Dr. Yamuna Krishna" role="HOD - MBA" org="" />
            <Member name="Dr. J Thanusu" role="HOD - S&H" org="" />
            <Member name="Dr. M K Tamilselvi" role="HOD - Mathematics" org="" />
            <Member name="Dr. T Jerry Alexander" role="HOD - CSE & CS" org="" />
            <Member name="Mr. I Andrews Juben" role="HOD - ECE" org="" />
            <Member name="Ms. R Kavitha" role="HOD - Robotics" org="" />
            <Member name="Mr. G V Jason Jebasingh" role="HOD - BME" org="" />
          </CommitteeGroup>

          <CommitteeGroup title="Technical Committee">
            <Member name="Dr. P Gopinath" role="Assoc. Prof - Chemistry" org="" />
            <Member name="Dr. S Preethi Jenifer" role="Asst Prof - BME" org="" />
            <Member name="Dr. Silpaja Chandrasekar" role="Asst Prof - IT" org="" />
            <Member name="Dr. A Parthiban" role="Assoc. Prof - CSE" org="" />
            <Member name="Dr. S Kathiravan" role="Asst Prof - RA" org="" />
          </CommitteeGroup>
        </div>
      </section>

      {/* 🧠 TOPICS OF INTEREST */}
      <section id="topics" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Topics of Interest</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 items-start">
            <TopicCategory title="Artificial Intelligence" items={["Machine Intelligence", "Deep Learning", "Computer Vision", "Computational Intelligence", "Bioinformatics", "Bigdata Analytics"]} />
            <TopicCategory title="Next Gen Technologies" items={["Quantum Computing", "Block Chain", "Augmented/Virtual Reality", "Biometrics"]} />
            <TopicCategory title="Electronics & Circuits" items={["Analog/Mixed Signal/RF", "Millimeter wave circuits", "VLSI systems", "Nano/THz devices"]} />
            <TopicCategory title="Communications & Networks" items={["Wireless Communications", "5G/6G Systems", "Optical Comms", "Cognitive Radio", "Satellite Comms"]} />
            <TopicCategory title="Electrical Systems" items={["Computational Intelligence in Power", "Energy Policies", "Hybrid Vehicles", "Smart Grids", "Renewable Energy"]} />
            <TopicCategory title="Cyber Physical Systems" items={["Wireless Sensor Networks", "IoT", "Edge Computing", "Cyber Security"]} />
            <TopicCategory title="Signal Processing" items={["Image/Video Processing", "Biomedical Signal Processing", "DSP Algorithms", "MIMO Systems"]} />
            <TopicCategory title="RF & Microwave" items={["Antenna Theory", "EM Interference", "MIMO Antennas", "Radar Techniques"]} />
          </div>
        </div>
      </section>

      {/* ✍️ INSTRUCTIONS */}
      <section id="authors" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Instructions to Authors</h2>
            <ol className="space-y-6 list-decimal list-outside ml-5 text-slate-700">
              <li className="pl-2">
                <span className="font-semibold text-slate-900">Manuscript Submission:</span> Authors are invited to submit their manuscripts in not more than 6 pages in a double column, single-spaced format using a required IEEE Access template. Please follow the instructions from the following links:
                <div className="mt-2 space-y-1 text-sm bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <p>Manuscript templates: <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" className="text-blue-600 hover:underline break-all">ieee.org/conferences/publishing/templates.html</a></p>
                  <p>Plagiarism details: <a href="https://www.ieee.org/publications/rights/author-rights-responsibilities.html" target="_blank" className="text-blue-600 hover:underline break-all">ieee.org/publications/rights/author-rights-responsibilities.html</a></p>
                  <p>Copyright information: <a href="https://www.ieee.org/publications/rights/copyright-policy.html" target="_blank" className="text-blue-600 hover:underline break-all">ieee.org/publications/rights/copyright-policy.html</a></p>
                </div>
              </li>
              <li className="pl-2">
                <span className="font-semibold text-slate-900">Electronic Submission:</span> Only electronic submission in PDF format will be accepted through EasyChair.
                <div className="mt-2">
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                    <FileText size={16} /> Paper Submission Link (Coming Soon)
                  </a>
                </div>
              </li>
              <li className="pl-2">
                There should be only one corresponding author. He/She should not change the email id all through the conference process.
              </li>
              <li className="pl-2">
                All the papers that are submitted will be carefully reviewed by at least two/three experts and reviews will be returned to the author to ensure the high quality of the accepted papers.
              </li>
              <li className="pl-2">
                Authors of accepted papers must guarantee that their papers will be registered and presented at the conference.
              </li>
              <li className="pl-2">
                Upon acceptance, at least one of the authors listed in the paper must attend the conference and present the paper according to the schedule. In an event that the presenter is unable to attend the conference for any unavoidable reasons, the accepted paper will not be considered for submission to the proceeding of the IEEE Xplore.
              </li>
              <li className="pl-2">
                All <span className="font-bold text-slate-900">accepted and presented papers</span> will be submitted for inclusion into IEEE Xplore, subject to meeting IEEE Xplore’s scope and quality requirements.
              </li>
              <li className="pl-2">
                All contributions must be original, should not have been published elsewhere and should not be intended to be published elsewhere during the review period.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* 📍 CONTACT */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Address for Correspondence</h2>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 inline-block text-left w-full md:w-auto min-w-[320px]">
            <h3 className="text-xl font-bold mb-1 text-center text-white">Organizing Chair</h3>
            <h4 className="text-lg font-semibold mb-6 text-center text-blue-400">IICASTEM - 26</h4>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-semibold text-white">Alpha College of Engineering</p>
                  <p>34, Udayavar Koil Street,</p>
                  <p>Thirumazhisai,</p>
                  <p>Chennai – 600124</p>
                  <p>Tamil Nadu, INDIA</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Mail className="text-blue-500 flex-shrink-0" />
                <a href="mailto:IICASTEM.ace@gmail.com" className="hover:text-blue-300 transition-colors font-medium">IICASTEM.ace@gmail.com</a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-slate-400 mb-2">Website</p>
              <a href="#" className="inline-block text-blue-400 hover:text-blue-300 font-medium transition-colors border-b border-blue-400/30 hover:border-blue-400">
                Link Coming Soon
              </a>
            </div>
          </div>
          <p className="mt-12 text-slate-500 text-sm">© 2026 IICASTEM. All Rights Reserved.</p>
        </div>
      </section>
    </main>
  )
}

function CommitteeGroup({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />
      <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-2xl text-slate-800 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
          {title}
        </h3>
        <div className="hidden md:flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-blue-400/30" />
          <div className="w-2 h-2 rounded-full bg-blue-400/60" />
          <div className="w-2 h-2 rounded-full bg-blue-400" />
        </div>
      </div>
      <div className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </motion.div>
  )
}

function Member({ name, role, org, highlighted }: { name: string, role: string, org: string, highlighted?: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -2 }}
      className={`group relative p-5 rounded-2xl transition-all duration-300 border ${highlighted
        ? 'bg-blue-50/50 border-blue-200 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-900/5'
        : 'bg-slate-50/80 border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-md'
        }`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl flex-shrink-0 ${highlighted ? 'bg-blue-100 text-blue-600' : 'bg-white text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50'} transition-colors`}>
          <Users size={20} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-lg leading-tight mb-1 group-hover:text-blue-700 transition-colors">
            {name}
          </h4>
          <p className="text-sm text-blue-600 font-medium mb-2">{role}</p>
          {org && (
            <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-200/60 pt-2 mt-2">
              {org}
            </p>
          )}
        </div>
      </div>
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500/10 rotate-45 transform origin-bottom-left group-hover:bg-blue-500/20 transition-colors" />
      </div>
    </motion.div>
  )
}

function TopicCategory({ title, items }: { title: string, items: string[] }) {
  const [isOpen, setIsOpen] = React.useState(false) // Default closed for clean look

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 font-semibold text-slate-900 hover:bg-slate-50 transition-colors text-left"
      >
        <span className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
          {title}
        </span>
        <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <ul className="p-4 pt-0 grid gap-2">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2 pl-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-1.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
