import { useFormik } from 'formik'
import { FaArrowRight, FaShoppingBag, FaStar } from 'react-icons/fa'
import * as Yup from 'yup'
import notify from '../../../Utils/notify'
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .required('First name is required.')
    .min(3, 'First name must be at least 3 characters.')
    .max(10, 'First name must be 10 characters or fewer.'),

  lastName: Yup.string()
    .trim()
    .required('Last name is required.')
    .min(3, 'Last name must be at least 3 characters.')
    .max(20, 'Last name must be 20 characters or fewer.'),

  username: Yup.string()
    .trim()
    .required('Username is required.')
    .min(8, 'Username must be at least 8 characters.')
    .max(15, 'Username must be 15 characters or fewer.')
    .matches(
      /^[a-z0-9_-]+$/,
      'Use only lowercase letters, numbers, underscores, and hyphens.',
    ),

  email: Yup.string()
    .trim()
    .required('Email is required.')
    .email('Enter a valid email address.'),

  phone: Yup.string()
    .trim()
    .required('Phone number is required.')
    .transform((value) => value?.replace(/[\s()-]/g, ''))
    .matches(
      /^(?:09\d{9}|\+989\d{9}|00989\d{9})$/,
      'Enter a valid Iranian mobile number, such as 09123456789 or +989123456789.',
    ),

  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password must be at least 8 characters.')
    .matches(/[A-Z]/, 'Password must include an uppercase letter.')
    .matches(/[a-z]/, 'Password must include a lowercase letter.')
    .matches(/[0-9]/, 'Password must include a number.')
    .matches(
      /[#?!@$%^&*-]/,
      'Password must include a special character, such as ! or #.',
    ),

  confirmPassword: Yup.string()
    .required('Please confirm your password.')
    .oneOf([Yup.ref('password')], 'Passwords must match.'),

  terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions.')
    .required('You must accept the terms and conditions.'),
})
export default function Register({ handlePageType }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema,
    onSubmit : async (values , {setSubmitting , resetForm}) => {
      try {
        const res = await fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(values),
  credentials: 'include'
});
if (!res.ok){
  throw new Error(`Request failed with status ${res.status}`);
}
const data = await res.json();
notify("success" , "Account created successfully");
resetForm();
navigate("/");
      } catch (error) {
        notify("error" , "The request failed");
      }
      finally{
        setSubmitting(false);
      }
    }
  })

  const inputClass =
    'w-full rounded-xl border border-pink-100 bg-pink-50/50 px-4 py-3 text-sm text-violet-900 outline-none transition placeholder:text-violet-400/70 hover:border-pink-200 focus:border-fuchsia-400 focus:bg-white focus:ring-4 focus:ring-fuchsia-500/10'

  const labelClass = 'mb-2 block text-sm font-semibold text-violet-900'
  const errorClass = 'mt-1 block text-xs font-medium text-rose-600'

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

            <form className="mt-7 space-y-4" onSubmit={formik.handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First name
                  </label>
                  <input
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="First name"
                    className={inputClass}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <span className={errorClass}>
                      {formik.errors.firstName}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last name
                  </label>
                  <input
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Last name"
                    className={inputClass}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <span className={errorClass}>
                      {formik.errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="username" className={labelClass}>
                  Username
                </label>
                <input
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Choose a username"
                  className={inputClass}
                />
                {formik.touched.username && formik.errors.username && (
                  <span className={errorClass}>{formik.errors.username}</span>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email address
                </label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
                {formik.touched.email && formik.errors.email && (
                  <span className={errorClass}>{formik.errors.email}</span>
                )}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone number
                </label>
                <input
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  className={inputClass}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <span className={errorClass}>{formik.errors.phone}</span>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="password" className={labelClass}>
                    Password
                  </label>
                  <input
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Create a password"
                    className={inputClass}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <span className={errorClass}>
                      {formik.errors.password}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className={labelClass}>
                    Confirm password
                  </label>
                  <input
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Re-enter password"
                    className={inputClass}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <span className={errorClass}>
                        {formik.errors.confirmPassword}
                      </span>
                    )}
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-2 pt-1 text-xs leading-5 text-violet-800/75">
                <input
                  checked={formik.values.terms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
                  {formik.touched.terms && formik.errors.terms && (
                    <span className="mt-1 block text-xs font-medium text-rose-600">
                      {formik.errors.terms}
                    </span>
                  )}
                </span>
              </label>

              <button
              disabled={formik.isSubmitting || !formik.isValid}
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-700 to-fuchsia-600 px-4 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(139,50,155,0.22)] transition hover:-translate-y-0.5 hover:from-violet-800 hover:to-fuchsia-700 hover:shadow-[0_12px_25px_rgba(139,50,155,0.3)] focus:outline-none focus:ring-4 focus:ring-fuchsia-500/20"
              >
                {formik.isSubmitting ? "Creating account..." : "Create account"}
                <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
              </button>

              <button
              onClick={() => formik.resetForm()}
                type="button"
                className="w-full rounded-xl border border-pink-200 bg-white px-4 py-3 text-sm font-bold text-violet-800 transition hover:border-fuchsia-300 hover:bg-pink-50 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/10"
              >
                Reset form
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-violet-800/70">
              Already have an account?{' '}
              <button
                onClick={() => handlePageType('login')}
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