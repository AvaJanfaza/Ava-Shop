import React, { useState } from 'react'

export default function InfoPanels() {
  const panels = [
    {
      title: 'Easy Pay',
      desc: 'You can pay securely online with PayPal or your bank card, or choose cash on delivery and pay when your order arrives. Every payment is encrypted and protected, so you can shop with peace of mind.',
      img: '/assets/payInfo.jpeg',
    },
    {
      title: 'Fast Delivery',
      desc: 'Most orders are packed within 24 hours and reach your door in 2 to 3 business days. You will receive a tracking code by message, so you always know where your package is.',
      img: '/assets/deliveryInfo.jpeg',
    },
    {
      title: 'Top Brands',
      desc: 'We work directly with trusted beauty and fashion brands, so every product you receive is one hundred percent original. New arrivals are added every week, so there is always something fresh to discover.',
      img: '/assets/brandsInfo.jpeg',
    },
    {
      title: 'Follow Us',
      desc: 'Join our community on Instagram, TikTok and YouTube for style tips, special giveaways and early access to sales. Tag us in your photos and you might be featured on our page.',
      img: '/assets/socialMediaInfo.jpeg',
    },
  ]

  const emojis = ['💳', '🚚', '✨', '💗']
  const [active, setActive] = useState(0)

  return (
    <div className="flex h-[26rem] w-full gap-3.5 sm:h-80">
      {panels.map((panel, index) => (
        <div
          key={index}
          onClick={() => setActive(index)}
          className={`group relative min-w-0 cursor-pointer overflow-hidden rounded-3xl border border-pink-100 shadow-lg transition-all duration-500 ease-in-out ${
            active === index
              ? 'flex-[3] shadow-xl shadow-pink-200/50'
              : 'flex-1 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/40'
          }`}
        >
          <img
            src={panel.img}
            alt={panel.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-950/85 via-pink-950/20 to-pink-200/10" />

          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
            <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/90 text-lg shadow-md">
              {emojis[index]}
            </div>

            <h2 className="text-lg font-bold tracking-wide text-white drop-shadow-md sm:text-2xl">
              {panel.title}
            </h2>

            <p
              className={`max-w-2xl overflow-hidden text-sm leading-6 text-white/90 transition-[max-height,opacity,transform] duration-500 ease-in-out sm:text-base ${
                active === index
                  ? 'mt-2 max-h-40 translate-y-0 opacity-100 delay-100'
                  : 'mt-0 max-h-0 translate-y-2 opacity-0'
              }`}
            >
              {panel.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}