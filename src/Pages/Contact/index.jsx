import React from 'react'

export default function Contact() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-white via-pink-50 to-fuchsia-50 px-5 py-16 sm:px-8">
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-fuchsia-200/30 blur-3xl" />

      <section className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-pink-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-fuchsia-600 shadow-sm">
            We’d love to hear from you
          </span>

          <h1 className="mt-4 font-logo text-4xl tracking-wide text-violet-800 sm:text-5xl">
            Get in <span className="text-fuchsia-500">Touch</span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-violet-700">
            Have a question or just want to say hi? Send us a message.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-[0_12px_35px_rgba(219,39,119,0.14)] md:grid-cols-[0.85fr_1.15fr]">
          <aside className="bg-gradient-to-br from-fuchsia-500 to-pink-400 p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold">Contact details</h2>
            <p className="mt-3 leading-relaxed text-white/90">
              We’re here to make your Ava Shop experience lovely.
            </p>

            <div className="mt-9 space-y-5">
              <div className="rounded-2xl bg-white/15 p-4">
                <p className="text-sm text-white/75">Email us</p>
                <p className="mt-1 font-medium">hello@avashop.com</p>
              </div>

              <div className="rounded-2xl bg-white/15 p-4">
                <p className="text-sm text-white/75">Call us</p>
                <p className="mt-1 font-medium">+1 (555) 123-4567</p>
              </div>

              <div className="rounded-2xl bg-white/15 p-4">
                <p className="text-sm text-white/75">Our location</p>
                <p className="mt-1 font-medium">Your City, Your Country</p>
              </div>
            </div>

            <p className="mt-8 text-sm text-white/80">
              We look forward to hearing from you ♡
            </p>
          </aside>

          <div className="p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-violet-800">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-violet-600">
              Leave us a note and we’ll be in touch.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-violet-800">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-sm text-violet-900 outline-none placeholder:text-violet-400 focus:border-fuchsia-400 focus:bg-white focus:ring-4 focus:ring-fuchsia-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-violet-800">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-sm text-violet-900 outline-none placeholder:text-violet-400 focus:border-fuchsia-400 focus:bg-white focus:ring-4 focus:ring-fuchsia-100"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-violet-800">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-sm text-violet-900 outline-none placeholder:text-violet-400 focus:border-fuchsia-400 focus:bg-white focus:ring-4 focus:ring-fuchsia-100"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-violet-800">
                Your message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full resize-y rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-sm text-violet-900 outline-none placeholder:text-violet-400 focus:border-fuchsia-400 focus:bg-white focus:ring-4 focus:ring-fuchsia-100"
              />
            </div>

            <button
              type="button"
              className="mt-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-[0_6px_16px_rgba(217,70,239,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_9px_22px_rgba(217,70,239,0.4)]"
            >
              Send message <span className="ml-1">♡</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}