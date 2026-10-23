import React from 'react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-xl shadow-gray-200/60">
        <p className="mb-4 text-8xl font-extrabold tracking-tight text-pink-500">
          404
        </p>

        <h1 className="mb-3 text-2xl font-bold text-gray-900">
          Page not found
        </h1>

        <p className="mb-8 leading-relaxed text-gray-500">
          Sorry, we couldn’t find the page you’re looking for. It may have been
          moved or no longer exists.
        </p>

        <a
          href="/"
          className="inline-flex rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white shadow-md shadow-pink-200 transition hover:bg-pink-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-200"
        >
          Back to home
        </a>
      </div>
    </div>
  )
}