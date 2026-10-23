import React, {useEffect, useState } from 'react'

import Loading from '../../Components/Loading';
import { useParams } from 'react-router';
import NotFound from '../NotFound';

export default function ProductDetails() {
  const [product , setProduct] = useState(null); 
  const[notFound , setNotFound] = useState(false);
  const {id} = useParams();
  
  
  useEffect(() => {
    (
      async () => {
        try {
          const res = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await res.json();
          setProduct(data);
        } catch (error) {
          console.log(error);
          setNotFound(true);
        }
      }
    )();
  } , [id]);
  if (notFound) return <NotFound/>
  if (!product) return <Loading/>
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
      <div className="flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 p-8 sm:p-12">
        <img
          src={product.images?.[0] || product.thumbnail}
          alt={product.title}
          className="max-h-96 w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6 sm:p-10">
        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold capitalize text-pink-700">
          {product.category}
        </span>

        <p className="mt-5 text-sm text-gray-400">{product.brand}</p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
          {product.title}
        </h1>

        <p className="mt-4 leading-7 text-gray-600">{product.description}</p>

        <div className="mt-5 flex items-center gap-2">
          <span className="text-amber-400">
            {'★'.repeat(Math.round(product.rating))}
            <span className="text-gray-200">
              {'★'.repeat(5 - Math.round(product.rating))}
            </span>
          </span>
          <span className="text-sm text-gray-500">{product.rating}</span>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <span className="text-4xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            {product.discountPercentage}% off
          </span>
        </div>

        <div className="mt-8 rounded-2xl bg-gray-50 p-5">
          <p className="text-sm text-gray-500">Availability</p>
          <p className="mt-1 font-semibold text-gray-900">
            {product.availabilityStatus}
          </p>

          <p className="mt-4 text-sm text-gray-500">Shipping</p>
          <p className="mt-1 font-semibold text-gray-900">
            {product.shippingInformation}
          </p>

          <p className="mt-4 text-sm text-gray-500">Warranty</p>
          <p className="mt-1 font-semibold text-gray-900">
            {product.warrantyInformation}
          </p>
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-xl bg-pink-600 px-6 py-4 font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-pink-700 active:scale-[0.98]"
        >
          Add to cart
        </button>
      </div>
    </div>
  </main>
  )
}
