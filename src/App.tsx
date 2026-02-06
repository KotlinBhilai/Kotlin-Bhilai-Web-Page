import { FormEvent, useEffect, useMemo, useState } from 'react'
import {
  Calendar,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Sun,
  X as XIcon
} from 'lucide-react'

type EventItem = {
  title: string
  date: string
  venue: string
  description: string
}

const navLinks = [
  ['about', 'About'],
  ['submission', 'KUG Info'],
  ['organizer', 'Organizer'],
  ['events', 'Events'],
  ['join', 'Join'],
  ['resources', 'Resources']
] as const

const pastEvents: EventItem[] = [
  {
    title: 'Kotlin Kickstart: Syntax to Confidence',
    date: 'August 24, 2025',
    venue: 'Bhilai Innovation Hub',
    description: 'A beginner-friendly deep dive into Kotlin fundamentals, tooling, and project setup.'
  },
  {
    title: 'Android with Kotlin in Practice',
    date: 'October 12, 2025',
    venue: 'Community Tech Hall, Bhilai',
    description: 'Real-world Android architecture, state handling, and modern Kotlin-first development.'
  },
  {
    title: 'Kotlin Multiplatform Community Meetup',
    date: 'December 7, 2025',
    venue: 'Hybrid (Bhilai + Online)',
    description: 'Lightning talks on KMP, shared code strategies, and lessons from production teams.'
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)
  const [updatesEnabled, setUpdatesEnabled] = useState(true)
  const [newsletterText, setNewsletterText] = useState('')

  const websiteUrl = useMemo(() => {
    if (typeof window === 'undefined') {
      return 'https://sauravgx.github.io/bhilai-kotlin-user-group/'
    }

    return `${window.location.origin}${window.location.pathname}`
  }, [])

  useEffect(() => {
    const userTheme = localStorage.getItem('kug-theme') as 'light' | 'dark' | null
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = userTheme ?? (systemDark ? 'dark' : 'light')
    setTheme(nextTheme)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('kug-theme', theme)
  }, [theme])

  const handleNewsletterSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!newsletterText.trim()) {
      return
    }

    window.location.href = `mailto:hello@bhilaikug.org?subject=Newsletter Subscription&body=Please add ${newsletterText} to Bhilai KUG updates.`
    setNewsletterText('')
  }

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-ink-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <img src="/kotlin-logo.svg" alt="Kotlin logo" className="h-8 w-auto" />
            <span className="text-sm font-bold tracking-wide sm:text-base">Bhilai KUG</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-slate-700 transition hover:text-brand-600 dark:text-slate-200"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full border border-slate-300 p-2 transition hover:border-brand-500 hover:text-brand-600 dark:border-white/20"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-300 p-2 md:hidden dark:border-white/20"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <XIcon size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-white/10 dark:bg-ink-800">
            <div className="flex flex-col gap-3">
              {navLinks.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="text-sm">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="section-reveal mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:border-brand-300/20 dark:bg-brand-500/10 dark:text-brand-200">
                Bhilai Kotlin User Group
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
                Learn Kotlin. Build together. Grow the developer culture in Bhilai.
              </h1>
              <p className="mt-5 max-w-2xl text-base text-slate-700 dark:text-slate-300">
                A modern Kotlin community for Android, backend, and multiplatform developers to collaborate,
                mentor, and ship better software.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#join"
                  className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-500"
                >
                  Join the Community
                </a>
                <a
                  href="#events"
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-brand-500 hover:text-brand-600 dark:border-white/20"
                >
                  Attend a Meetup
                </a>
              </div>
            </div>

            <div className="relative rounded-3xl border border-white/30 bg-gradient-to-br from-brand-500/20 via-cyan-400/15 to-pink-500/20 p-8 shadow-2xl backdrop-blur-xl">
              <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-pink-500/40 blur-2xl" aria-hidden="true" />
              <img src="/hero-kodee.png" alt="Kodee mascot" className="mx-auto w-full max-w-sm drop-shadow-2xl" />
            </div>
          </div>
        </section>

        <section id="about" className="section-reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-bold">About the Group</h2>
            <p className="mt-4 max-w-4xl text-slate-700 dark:text-slate-300">
              Bhilai Kotlin User Group is a mission-driven learning community focused on Kotlin for Android,
              backend systems, and Kotlin Multiplatform development. We host practical talks, workshops,
              beginner-friendly sessions, and networking opportunities to strengthen the local developer ecosystem.
            </p>
          </div>
        </section>

        <section id="submission" className="section-reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold">Location & Identity</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">Bhilai Kotlin User Group | India | Bhilai</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-xl font-bold">KUG Submission Info</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="font-semibold">User Group Name:</span> Bhilai Kotlin User Group
                </li>
                <li>
                  <span className="font-semibold">Country/Region:</span> India
                </li>
                <li>
                  <span className="font-semibold">City:</span> Bhilai
                </li>
                <li>
                  <span className="font-semibold">Organizer Name & Surname:</span> Saurav Gupta
                </li>
                <li>
                  <span className="font-semibold">Contact Email:</span> hello@bhilaikug.org
                </li>
                <li>
                  <span className="font-semibold">Website URL:</span> {websiteUrl}
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold">Email updates preference:</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={updatesEnabled}
                    onClick={() => setUpdatesEnabled((value) => !value)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      updatesEnabled
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-600/20 dark:text-emerald-300'
                        : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {updatesEnabled ? 'Yes' : 'No'}
                  </button>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-xl font-bold">Group Naming Convention</h3>
              <p className="mt-4 text-slate-700 dark:text-slate-300">
                Official name used for submission and community channels:
              </p>
              <p className="mt-2 rounded-xl bg-brand-500/10 px-4 py-3 font-semibold text-brand-800 dark:text-brand-200">
                Bhilai Kotlin User Group
              </p>
            </div>
          </div>
        </section>

        <section id="organizer" className="section-reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-bold">Organizer</h2>
            <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-semibold">Saurav Gupta</p>
                <p className="mt-2 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Mail size={16} /> hello@bhilaikug.org
                </p>
              </div>
              <div className="flex gap-3">
                <a href="#" className="rounded-full border border-slate-300 p-3 hover:border-brand-500" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="#" className="rounded-full border border-slate-300 p-3 hover:border-brand-500" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="rounded-full border border-slate-300 p-3 hover:border-brand-500" aria-label="X">
                  <XIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="section-reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Events</h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="glass-card rounded-3xl p-6 lg:col-span-1">
              <h3 className="text-xl font-bold">Upcoming Meetups</h3>
              <div className="mt-5 rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-600 dark:border-white/20 dark:text-slate-300">
                No meetup announced yet. New sessions will appear here soon.
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="mb-4 text-xl font-bold">Past Events</h3>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {pastEvents.map((eventItem) => (
                  <article key={eventItem.title} className="glass-card flex rounded-2xl p-5 transition hover:-translate-y-1">
                    <div className="flex min-h-full flex-col">
                      <h4 className="font-semibold">{eventItem.title}</h4>
                      <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{eventItem.date}</p>
                      <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{eventItem.venue}</p>
                      <button
                        type="button"
                        onClick={() => setSelectedEvent(eventItem)}
                        className="mt-4 text-sm font-semibold text-brand-700 hover:text-brand-500 dark:text-brand-300"
                      >
                        View details
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="section-reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-bold">Join the Community</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {['WhatsApp', 'Telegram', 'Discord', 'Meetup', 'Google Form'].map((channel) => (
                <a
                  key={channel}
                  href="#"
                  className="rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-500"
                >
                  {channel}
                </a>
              ))}
            </div>

            <form onSubmit={handleNewsletterSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter" className="sr-only">
                Email for newsletter
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Enter email for newsletter updates"
                value={newsletterText}
                onChange={(event) => setNewsletterText(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-sm outline-none ring-brand-400 focus:ring dark:border-white/20 dark:bg-white/5"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white dark:bg-brand-600"
              >
                <Send size={14} /> Sign up
              </button>
            </form>
          </div>
        </section>

        <section id="resources" className="section-reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold">Resources</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Kotlin Docs', 'https://kotlinlang.org/docs/home.html'],
              ['Kotlin Playground', 'https://play.kotlinlang.org/'],
              ['Android Developers Kotlin', 'https://developer.android.com/kotlin'],
              ['JetBrains Academy', 'https://www.jetbrains.com/academy/']
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-2xl p-5 text-sm font-semibold transition hover:-translate-y-1"
              >
                <span className="inline-flex items-center gap-2">
                  {label} <ExternalLink size={14} />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold">Slides & Materials</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {['Intro to Kotlin PDF', 'Android Clean Architecture Deck', 'KMP Starter Repo Notes'].map((item) => (
                <article key={item} className="glass-card rounded-2xl p-5">
                  <h4 className="font-semibold">{item}</h4>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Material placeholder. Link coming soon.</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 px-4 py-10 dark:border-white/10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-sm text-slate-700 dark:text-slate-300 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Bhilai Kotlin User Group. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#home" className="inline-flex items-center gap-1 hover:text-brand-600">
              <Globe size={14} /> Home
            </a>
            <a href="#events" className="inline-flex items-center gap-1 hover:text-brand-600">
              <Calendar size={14} /> Events
            </a>
            <a href="#submission" className="inline-flex items-center gap-1 hover:text-brand-600">
              <MapPin size={14} /> Privacy note: community data used only for meetup updates.
            </a>
          </div>
        </div>
      </footer>

      {selectedEvent && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink-900/70 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 text-slate-900 dark:bg-ink-800 dark:text-slate-100">
            <h3 className="text-2xl font-bold">{selectedEvent.title}</h3>
            <p className="mt-3 inline-flex items-center gap-2 text-sm opacity-80">
              <Calendar size={14} /> {selectedEvent.date}
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm opacity-80">
              <MapPin size={14} /> {selectedEvent.venue}
            </p>
            <p className="mt-4 text-sm">{selectedEvent.description}</p>
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              className="mt-6 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
