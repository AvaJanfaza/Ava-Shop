import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import Loading from '../../Components/Loading';

export default function Products() {
  const [products , setProducts] = useState(null);
  const [select , setSelect] = useState("all");

  useEffect(() => {
    (
      async () => {
        try {
          const res = await fetch("https://dummyjson.com/products?limit=0");
          const data = await res.json();
          const blocked = ["groceries","furniture" , "motorcycle" , "sports-accessories", "home-decoration",
             "smartphones" , "laptops" , "vehicle" , "tablets" , "mobile-accessories","kitchen-accessories"];
          setProducts(data.products.filter(pr => !blocked.includes(pr.category)));
        } catch (error) {
          console.log(error);
        }
      }
    )();
  } , []);

  if (!products) return <Loading/>
  const filtered = select === "all" ? products : products.filter(pr => pr.category === select);
  const items = filtered.map(pr => <ProductCard key={pr?.id} id={pr?.id} title = {pr?.title} description={pr?.description} category={pr?.category} price = {pr?.price} brand={pr?.brand} discountPercentage={pr?.discountPercentage} rating = {pr?.rating} image={pr?.thumbnail}/>)

  return (
    <div className="min-h-screen px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Products
      </h1>

      <p className="mx-auto mb-8 max-w-xl text-center text-base leading-relaxed text-gray-500">
        Browse our latest products and find something you love.
      </p>

      <select
        name=""
        id=""
        value={select}
        onChange={(e) => setSelect(e.target.value)}
        className="mb-8 block w-full max-w-xs cursor-pointer rounded-xl border border-violet-200 bg-gradient-to-r from-pink-50 to-violet-50 px-4 py-3 text-sm font-semibold text-violet-800 shadow-md transition duration-200 hover:border-fuchsia-300 hover:shadow-lg focus:border-fuchsia-400 focus:outline-none focus:ring-4 focus:ring-fuchsia-100"
      >
        <option value="all">All</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="mens-shirts">Mens-Shirts</option>
        <option value="mens-shoes">Mens-Shoes</option>
        <option value="mens-watches">Mens-Watches</option>
        <option value="skin-care">Skin-Care</option>
        <option value="sunglasses">Sunglasses</option>
        <option value="tops">Tops</option>
        <option value="womens-bags">Womens-Bags</option>
        <option value="womens-dresses">Womens-Dresses</option>
        <option value="womens-jewellery">Womens-Jewellery</option>
        <option value="womens-shoes">Womens-Shoes</option>
        <option value="womens-watches">Womens-Watches</option>
      </select>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {items}
      </div>
    </div>
  )
}