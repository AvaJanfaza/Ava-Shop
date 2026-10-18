import { useContext } from 'react'
import { FaHeart, FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router'
import AuthContext from '../../Context/AuthContext'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Products', to: '/products' },
]

export default function Navbar() {
  const { token, handleToken } = useContext(AuthContext)

  return (
    <nav className="relative z-10 border-b border-pink-100 bg-gradient-to-r from-white via-pink-50 to-white shadow-[0_8px_20px_rgba(219,39,119,0.22)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-200 to-pink-100 text-lg text-fuchsia-700 shadow-[0_4px_12px_rgba(219,39,119,0.25)] transition duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
            <FaShoppingBag />
          </span>

          <span className="font-logo text-2xl tracking-wide text-violet-800 [text-shadow:0_2px_8px_rgba(139,92,246,0.22)] sm:text-3xl">
            Ava <span className="text-fuchsia-500 [text-shadow:0_2px_8px_rgba(217,70,239,0.35)]">Shop</span>
          </span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                className="rounded-full px-2.5 py-2 text-xs font-semibold text-violet-800 transition duration-200 hover:bg-white hover:text-fuchsia-600 hover:shadow-[0_3px_12px_rgba(217,70,239,0.2)] sm:px-4 sm:text-sm"
              >
                {label}
              </Link>
            </li>
          ))}

          <li className="ml-1 sm:ml-2">
            <Link
              to="/favorite"
              aria-label="Favorites"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-200 bg-white text-fuchsia-500 shadow-[0_3px_10px_rgba(219,39,119,0.18)] transition duration-200 hover:scale-110 hover:bg-fuchsia-500 hover:text-white hover:shadow-[0_5px_16px_rgba(217,70,239,0.4)]"
            >
              <FaHeart />
            </Link>
          </li>

          <li className="ml-1 sm:ml-2">
            {token ? (
              <button
                type="button"
                onClick={() => handleToken(null)}
                className="rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-3 py-2 text-xs font-semibold text-white shadow-[0_3px_10px_rgba(217,70,239,0.25)] transition duration-200 hover:scale-105 hover:from-fuchsia-600 hover:to-pink-600 hover:shadow-[0_5px_16px_rgba(217,70,239,0.4)] sm:px-4 sm:text-sm"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth"
                className="rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-3 py-2 text-xs font-semibold text-white shadow-[0_3px_10px_rgba(217,70,239,0.25)] transition duration-200 hover:scale-105 hover:from-fuchsia-600 hover:to-pink-600 hover:shadow-[0_5px_16px_rgba(217,70,239,0.4)] sm:px-4 sm:text-sm"
              >
                Login / Register
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}