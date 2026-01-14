"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Calendar, MapPin, Users, Award, Lightbulb,
  Presentation, Mic, BookOpen, Mail, FileText,
  CheckCircle, Video, Globe, ChevronDown
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">

      {/* 🏠 HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-blue-900/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2000&auto=format&fit=crop"
            alt="Conference Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-4 backdrop-blur-sm">
              IEEE Conference Record: 70785
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 leading-tight">
              IICASTEM’26
            </h1>
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
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Calendar className="text-blue-400 mb-2" size={28} />
              <p className="font-semibold text-lg">December 18, 2026</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Users className="text-blue-400 mb-2" size={28} />
              <p className="text-sm text-slate-300">Organized by</p>
              <p className="font-semibold">Alpha College of Engineering</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
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
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
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
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Instructions to Authors</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <FileText className="text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Paper Format</h3>
                  <p className="text-slate-600">Authors should submit the full version of the paper as per IEEE Access Double Column template. Maximum limit: 6 pages.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Submission</h3>
                  <p className="text-slate-600">Submission must be done via EasyChair. All papers will undergo a thorough review process.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Video className="text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Presentation</h3>
                  <p className="text-slate-600">Selected papers will be allowed for presentation in Oral/Virtual mode. Published papers will be submitted for inclusion in IEEE Xplore.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📍 CONTACT */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 inline-block text-left w-full md:w-auto">
            <h3 className="text-xl font-semibold mb-4 text-center border-b border-white/10 pb-4">Organizing Chair</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" />
                <span>Alpha College of Engineering, Thirumazhisai, Chennai</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" />
                <a href="mailto:iicastem.ace@gmail.com" className="hover:text-blue-300 transition-colors">iicastem.ace@gmail.com</a>
              </div>
            </div>
            <div className="mt-8 text-center bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold cursor-not-allowed opacity-80">
              Paper Submission Link (Coming Soon)
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
      className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
    >
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 font-bold text-lg text-slate-800">
        {title}
      </div>
      <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </motion.div>
  )
}

function Member({ name, role, org, highlighted }: { name: string, role: string, org: string, highlighted?: boolean }) {
  return (
    <div className={`flex flex-col ${highlighted ? 'bg-blue-50/50 p-4 rounded-lg border border-blue-100' : ''}`}>
      <span className="font-bold text-slate-800">{name}</span>
      <span className="text-sm text-blue-600 font-medium">{role}</span>
      {org && <span className="text-xs text-slate-500 mt-1">{org}</span>}
    </div>
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
