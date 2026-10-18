import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

export default function Products() {
  const [products , setProducts] = useState([]);
  useEffect(() => {
    (
      async () => {
        try {
          const res = await fetch("https://dummyjson.com/products");
          const data = await res.json();
          setProducts(data.products);
        } catch (error) {
          console.log(error);
        }
      }
    )();
  } , []);
  const items = products.map(pr => <ProductCard key={pr?.id} title = {pr?.title} description={pr?.description} category={pr?.category} price = {pr?.price} brand={pr?.brand} discountPercentage={pr?.discountPercentage} rating = {pr?.rating} image={pr?.thumbnail}/>)
  return (
    <div className="min-h-screen px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Products
      </h1>
      <p className="mx-auto mb-8 max-w-xl text-center text-base leading-relaxed text-gray-500">
  Browse our latest products and find something you love.
      </p>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {items}
      </div>
    </div>
  )
}