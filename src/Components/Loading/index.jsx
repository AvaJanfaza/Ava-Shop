import React from 'react'
import { DNA } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50"
      role="status"
      aria-live="polite"
    >
      <DNA
        visible
        height="80"
        width="80"
        ariaLabel="Loading"
        wrapperClass="dna-wrapper"
      />
      <p className="text-sm font-medium text-gray-500">Loading products...</p>
    </div>
  )
}