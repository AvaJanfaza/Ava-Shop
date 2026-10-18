import React from 'react'
import { FaHeart, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Products', to: '/products' },
]

export default function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-gradient-to-r from-white via-pink-50 to-white shadow-[0_-8px_20px_rgba(219,39,119,0.14)]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/" className="font-logo text-2xl tracking-wide text-violet-800 [text-shadow:0_2px_8px_rgba(139,92,246,0.2)]">
            Ava <span className="text-fuchsia-500">Shop</span>
          </Link>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {links.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-sm font-medium text-violet-800 transition hover:text-fuchsia-600 hover:[text-shadow:0_2px_8px_rgba(217,70,239,0.25)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-pink-200 bg-white text-fuchsia-500 shadow-sm transition hover:-translate-y-1 hover:bg-fuchsia-500 hover:text-white hover:shadow-[0_5px_14px_rgba(217,70,239,0.3)]"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:hello@avashop.com"
              aria-label="Email Ava Shop"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-pink-200 bg-white text-fuchsia-500 shadow-sm transition hover:-translate-y-1 hover:bg-fuchsia-500 hover:text-white hover:shadow-[0_5px_14px_rgba(217,70,239,0.3)]"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-pink-100 pt-5 text-center text-xs text-violet-700">
          <p className="flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Ava Shop. Made with
            <FaHeart className="text-fuchsia-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}