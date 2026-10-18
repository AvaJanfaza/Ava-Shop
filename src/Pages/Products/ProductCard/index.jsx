import { FaHeart, FaStar } from 'react-icons/fa'

export default function ProductCard({
  title,
  description,
  category,
  price,
  brand,
  discountPercentage,
  rating,
  image,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-[0_8px_24px_rgba(139,92,246,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(217,70,239,0.16)]">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-violet-50 p-6">
        {discountPercentage > 0 && (
          <span className="absolute left-4 top-4 rounded-full bg-fuchsia-500 px-3 py-1 text-xs font-bold text-white shadow-md">
            -{Math.round(discountPercentage)}%
          </span>
        )}

        <button
          type="button"
          aria-label="Add to favorites"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-400 shadow-md transition hover:scale-110 hover:text-fuchsia-500"
        >
          <FaHeart className="text-lg" />
        </button>

        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="truncate rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold capitalize text-fuchsia-700">
            {category}
          </span>

          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-amber-500">
            <FaStar />
            {rating}
          </span>
        </div>

        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-violet-400">
          {brand}
        </p>

        <h2 className="mb-2 line-clamp-1 text-lg font-bold text-violet-900">
          {title}
        </h2>

        <p className="mb-4 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {description}
        </p>

        <div className="flex items-center gap-2 border-t border-pink-100 pt-4">
          <span className="text-xl font-extrabold text-fuchsia-600">
            ${price?.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}