/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductList from "@/components/ProductList";
import { stripe } from "@/lib/stripe";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center w-full">
      <div className=" w-full text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-accent">Products</h1>
        <p className="text-text-secondary">
          Explore our wide range of products.
        </p>
      </div>

      <ProductList products={products.data} />
    </div>
  );
}
