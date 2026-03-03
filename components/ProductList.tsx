"use client"


import Stripe from "stripe";
import ProductCard from "./ProductCard";
import { useState } from "react";

interface ProductListProps {
  products: Stripe.Product[];
}

export default function ProductList(props: ProductListProps) {

    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredProducts = props.products.filter(product =>
   {
     const term = searchTerm.toLowerCase();
     const nameMatch = product.name.toLowerCase().includes(term);
     const descriptionMatch = product.description ? product.description.toLowerCase().includes(term) : false;
     return nameMatch || descriptionMatch;
   }
    );
  return (
    <div className="container mx-auto p-4 justify-center flex flex-col  w-full">
      <div className=" w-full flex flex-col items-center justify-center text-center mb-8">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full md:w-1/2 lg:w-1/3 p-2  rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
