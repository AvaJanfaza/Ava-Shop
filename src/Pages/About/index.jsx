import React from 'react'

export default function About() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-white via-pink-50 to-fuchsia-50 px-5 py-16 sm:px-8">
      <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-fuchsia-200/30 blur-3xl" />

      <section className="relative mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-pink-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-fuchsia-600 shadow-sm">
            A little about us
          </span>

          <h1 className="mt-4 font-logo text-4xl tracking-wide text-violet-800 sm:text-5xl">
            Welcome to <span className="text-fuchsia-500">Ava Shop</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-violet-700">
            We believe the little things can bring a lot of joy. Ava Shop is
            here to help you find lovely pieces for everyday moments and special
            occasions.
          </p>
        </header>

        <section className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-3 rotate-2 rounded-3xl bg-gradient-to-br from-pink-200 to-fuchsia-200 opacity-70" />
            <div className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-100 via-pink-100 to-rose-200 p-10">
              <div className="text-center">
                <span className="text-7xl">♡</span>
                <p className="mt-4 font-logo text-3xl text-violet-800">
                  Made with love
                </p>
                <p className="mt-2 text-violet-600">For the moments that matter</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-pink-100 bg-white/90 p-8 shadow-[0_12px_35px_rgba(219,39,119,0.12)] sm:p-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-fuchsia-500">
              Our story
            </span>
            <h2 className="mt-3 text-3xl font-bold text-violet-800">
              Thoughtful finds, happy hearts
            </h2>
            <p className="mt-5 leading-relaxed text-violet-700">
              Ava Shop started with a simple idea: shopping should feel
              personal, joyful, and easy. We bring together a carefully chosen
              collection of items we hope you’ll love giving, receiving, and
              keeping for yourself.
            </p>
            <p className="mt-4 leading-relaxed text-violet-700">
              Every detail matters to us—from the products we select to the
              experience we create for our customers. Thank you for being part
              of our story.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-fuchsia-500">
              What matters to us
            </span>
            <h2 className="mt-3 text-3xl font-bold text-violet-800">
              A shop with a little extra heart
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-pink-100 bg-white p-7 shadow-[0_8px_25px_rgba(219,39,119,0.09)]">
              <span className="text-3xl">✿</span>
              <h3 className="mt-4 text-xl font-bold text-violet-800">
                Thoughtful choices
              </h3>
              <p className="mt-2 leading-relaxed text-violet-600">
                We look for lovely, useful finds that feel special in the
                everyday.
              </p>
            </article>

            <article className="rounded-2xl border border-pink-100 bg-white p-7 shadow-[0_8px_25px_rgba(219,39,119,0.09)]">
              <span className="text-3xl">♡</span>
              <h3 className="mt-4 text-xl font-bold text-violet-800">
                Customer care
              </h3>
              <p className="mt-2 leading-relaxed text-violet-600">
                We want every part of your experience with us to feel warm and
                welcoming.
              </p>
            </article>

            <article className="rounded-2xl border border-pink-100 bg-white p-7 shadow-[0_8px_25px_rgba(219,39,119,0.09)] sm:col-span-2 lg:col-span-1">
              <span className="text-3xl">✧</span>
              <h3 className="mt-4 text-xl font-bold text-violet-800">
                Everyday joy
              </h3>
              <p className="mt-2 leading-relaxed text-violet-600">
                We’re here for the little details that make ordinary moments
                feel brighter.
              </p>
            </article>
          </div>
        </section>

        <div className="mt-14 rounded-3xl bg-gradient-to-r from-fuchsia-500 to-pink-400 px-6 py-10 text-center text-white shadow-[0_12px_30px_rgba(217,70,239,0.2)] sm:px-10">
          <p className="font-logo text-3xl">Thank you for being here ♡</p>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            We’re so glad you found us. We hope you discover something that
            makes you smile.
          </p>
        </div>
      </section>
    </main>
  )
}