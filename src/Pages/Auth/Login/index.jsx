import { FaArrowRight, FaHeart, FaShoppingBag, FaStar } from 'react-icons/fa'
import useFromFields from '../../../Hook/useFromFields'
import notify from '../../../Utils/notify'
import AuthContext from '../../../Context/AuthContext'
import { useContext } from 'react';
import { useNavigate } from 'react-router';

export default function Login({ handlePageType }) {
  const [fields,handleChange,setFields] = useFromFields({
    username:"",
    password : ""
  });

  const {handleToken} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
       username: fields.username,
       password: fields.password,
       expiresInMins: 30, 
  }),
});
const data = await res.json();
if (!data.accessToken){
  setFields({username : "" , password : ""});
  notify("error" , "Username or password is incorrect");
}
else{
  notify("success" , "Welcome back!");
  handleToken(data.accessToken);
  navigate("/");
}
    } catch (error) {
      console.log(error);
      notify("error" , "Something went wrong, try again");
    }
  }
  
  return (
    <main className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-pink-50 to-fuchsia-50 px-4 py-12">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl" />

      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-[0_25px_80px_rgba(139,92,246,0.16)] md:grid-cols-2">
        {/* Welcome / shop panel */}
        <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-800 via-fuchsia-700 to-pink-500 p-8 text-white sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -right-8 -top-4 h-40 w-40 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-pink-300/20 blur-2xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-xl shadow-lg backdrop-blur">
                <FaShoppingBag />
              </span>
              <span className="font-logo text-2xl tracking-wide">
                Ava <span className="text-pink-200">Shop</span>
              </span>
            </div>

            <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-pink-50 backdrop-blur">
              <FaStar className="text-yellow-200" />
              YOUR NEXT FAVORITE FIND
            </div>

            <h2 className="mt-5 max-w-sm text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              A little treat
              <br />
              for your style.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-pink-50/90">
              Sign in to explore your favorites, discover new arrivals, and
              enjoy a shopping experience made for you.
            </p>
          </div>

          <div onClick={() => navigate("/favorites")} className="relative mt-10 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-fuchsia-600 shadow-md">
              <FaHeart />
            </span>
            <div>
              <p className="text-sm font-semibold">Your favorites are waiting</p>
              <p className="mt-0.5 text-xs text-pink-50/80">
                Pick up where you left off.
              </p>
            </div>
            <FaArrowRight className="ml-auto text-pink-100" />
          </div>
        </div>

        {/* Login form */}
        <div className="flex items-center px-7 py-10 sm:px-12 sm:py-14">
          <div className="w-full">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-500">
              Welcome back
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-violet-900 sm:text-4xl">
              Login to Ava Shop
            </h1>
            <p className="mt-3 text-sm leading-6 text-violet-700/70">
              Your next favorite find is just a sign-in away.
            </p>

            <form 
            onSubmit={handleSubmit}
              className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-semibold text-violet-900"
                >
                  Username
                </label>
                <input
                required
                value={fields.username}
                onChange={handleChange}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Enter your username"
                  className="w-full rounded-xl border border-pink-100 bg-pink-50/50 px-4 py-3.5 text-sm text-violet-900 outline-none transition placeholder:text-violet-400/70 hover:border-pink-200 focus:border-fuchsia-400 focus:bg-white focus:ring-4 focus:ring-fuchsia-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-violet-900"
                >
                  Password
                </label>
                <input
                required
                value={fields.password}
                onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-pink-100 bg-pink-50/50 px-4 py-3.5 text-sm text-violet-900 outline-none transition placeholder:text-violet-400/70 hover:border-pink-200 focus:border-fuchsia-400 focus:bg-white focus:ring-4 focus:ring-fuchsia-500/10"
                />
              </div>

              <div className="flex items-center justify-between gap-3 text-sm">
                <label className="flex cursor-pointer items-center gap-2 text-violet-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-pink-300 accent-fuchsia-500"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="font-semibold text-fuchsia-600 transition hover:text-violet-800"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-500 px-4 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(217,70,239,0.25)] transition hover:-translate-y-0.5 hover:from-fuchsia-700 hover:to-pink-600 hover:shadow-[0_12px_25px_rgba(217,70,239,0.32)] focus:outline-none focus:ring-4 focus:ring-fuchsia-500/20"
              >
                Login to your account
                <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-violet-700/75">
              New to Ava Shop?{' '}
              <button
                type="button"
                onClick={() => handlePageType('register')}
                className="font-bold text-fuchsia-600 transition hover:text-violet-800"
              >
                Create an account
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}