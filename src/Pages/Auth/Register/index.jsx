import { FaArrowRight, FaShoppingBag, FaStar } from 'react-icons/fa'

export default function Register({handlePageType}) {
  const inputClass =
    'w-full rounded-xl border border-pink-100 bg-pink-50/50 px-4 py-3 text-sm text-violet-900 outline-none transition placeholder:text-violet-400/70 hover:border-pink-200 focus:border-fuchsia-400 focus:bg-white focus:ring-4 focus:ring-fuchsia-500/10'

  const labelClass = 'mb-2 block text-sm font-semibold text-violet-900'


  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff9fb] px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />

      <section className="relative grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_25px_90px_rgba(100,55,110,0.13)] md:grid-cols-[0.9fr_1.1fr]">
        {/* Welcome panel */}
        <aside className="relative flex min-h-[480px] flex-col overflow-hidden bg-gradient-to-br from-[#fff3e9] via-[#f8eaf2] to-[#eee8ff] p-8 text-violet-950 sm:p-12">
          {/* Decorative background shapes */}
          <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full border border-fuchsia-300/30" />
          <div className="pointer-events-none absolute -right-8 top-0 h-48 w-48 rounded-full border border-violet-300/30" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-pink-300/30 blur-2xl" />
          <div className="pointer-events-none absolute right-12 top-40 h-3 w-3 rounded-full bg-fuchsia-400/70" />
          <div className="pointer-events-none absolute right-28 top-28 h-2 w-2 rounded-full bg-violet-400/70" />

          <div className="relative flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/80 bg-white/75 text-lg text-fuchsia-700 shadow-sm">
              <FaShoppingBag />
            </span>
            <span className="text-xl font-bold tracking-wide">
              Ava <span className="font-normal text-fuchsia-700">Shop</span>
            </span>
          </div>

          <div className="relative mt-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-violet-800">
              <FaStar className="text-xs text-amber-500" />
              THE AVA EDIT
            </div>

            <h1 className="mt-6 max-w-md text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              A little space
              <br />
              for your
              <br />
              <span className="font-serif italic text-fuchsia-700">
                personal style.
              </span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-6 text-violet-900/70">
              Create your account and discover a thoughtful collection of
              pieces to make your everyday feel more like you.
            </p>
          </div>

          {/* Decorative shop illustration */}
          <div className="relative mt-auto pt-12">
            <div className="relative mx-auto flex h-48 max-w-sm items-center justify-center">
              <div className="absolute h-44 w-44 rounded-full border border-fuchsia-300/40" />
              <div className="absolute h-32 w-32 rounded-full border border-violet-300/40" />

              <div className="absolute left-3 top-6 rotate-[-8deg] rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-lg backdrop-blur-md">
                <p className="text-[9px] font-semibold tracking-[0.2em] text-fuchsia-700">
                  NEW SEASON
                </p>
                <p className="mt-1 font-serif text-lg italic text-violet-950">
                  Made for you
                </p>
              </div>

              <div className="relative flex h-28 w-24 -rotate-6 items-center justify-center rounded-t-[2rem] rounded-b-xl border border-white/80 bg-gradient-to-br from-white/90 to-pink-100 shadow-xl">
                <div className="absolute -top-5 h-9 w-12 rounded-t-full border-2 border-b-0 border-fuchsia-300" />
                <FaShoppingBag className="text-3xl text-fuchsia-700" />
              </div>

              <div className="absolute bottom-4 right-2 rotate-[7deg] rounded-2xl border border-white/80 bg-white/85 px-4 py-3 text-violet-950 shadow-lg">
                <p className="text-[9px] font-semibold tracking-[0.18em] text-fuchsia-700">
                  AVA SHOP
                </p>
                <p className="mt-1 text-xs font-medium">
                  Find your new favorite look
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-violet-800/60">
              <span className="h-px w-8 bg-violet-400/40" />
              STYLE STARTS HERE
              <span className="h-px w-8 bg-violet-400/40" />
            </div>
          </div>
        </aside>

        {/* Registration form */}
        <div className="flex items-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div className="mx-auto w-full max-w-lg">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-600">
              Join Ava Shop
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-violet-950 sm:text-4xl">
              Create an account
            </h2>
            <p className="mt-3 text-sm leading-6 text-violet-800/65">
              Add your details below to get started.
            </p>

            <form className="mt-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="First name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Last name"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="username" className={labelClass}>
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Choose a username"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="address" className={labelClass}>
                  Street address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  placeholder="House number and street name"
                  className={inputClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="city" className={labelClass}>
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="Your city"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="postalCode" className={labelClass}>
                    Postal code
                  </label>
                  <input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    autoComplete="postal-code"
                    placeholder="Postal code"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className={labelClass}>
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  autoComplete="country-name"
                  placeholder="Your country"
                  className={inputClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="password" className={labelClass}>
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Create a password"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className={labelClass}>
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Re-enter password"
                    className={inputClass}
                  />
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-2 pt-1 text-xs leading-5 text-violet-800/75">
                <input
                  type="checkbox"
                  name="terms"
                  className="mt-1 h-4 w-4 shrink-0 rounded border-pink-300 accent-fuchsia-600"
                />
                <span>
                  I agree to the{' '}
                  <a
                    href="/terms"
                    className="font-semibold text-fuchsia-700 hover:text-violet-900"
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    href="/privacy"
                    className="font-semibold text-fuchsia-700 hover:text-violet-900"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-700 to-fuchsia-600 px-4 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(139,50,155,0.22)] transition hover:-translate-y-0.5 hover:from-violet-800 hover:to-fuchsia-700 hover:shadow-[0_12px_25px_rgba(139,50,155,0.3)] focus:outline-none focus:ring-4 focus:ring-fuchsia-500/20"
              >
                Create account
                <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-violet-800/70">
              Already have an account?{' '}
              <button
                onClick={() => handlePageType("login")}
                className="font-bold text-fuchsia-700 transition hover:text-violet-900"
              >
                Log in
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}