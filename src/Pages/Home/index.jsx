import React from 'react'
import { Link } from 'react-router'
import InfoPanels from './InfoPanels'

export default function Home() {
  return (
    <main className="m-0 min-h-screen">
      <div className="h-80 w-full overflow-hidden rounded-2xl sm:h-64 lg:h-96">
        <Link to={"/products"}>
        <img
          className="block h-full w-full object-cover"
          src="../assets/banner.gif"
          alt="Home page banner"
        />
        </Link>
      </div>

      <div>
        <InfoPanels/>
      </div>

    </main>
  )
}