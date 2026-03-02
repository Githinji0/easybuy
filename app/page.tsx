/* eslint-disable @typescript-eslint/no-unused-vars */
import { stripe } from "@/lib/stripe";


export default async function Home() {

  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  })
  console.log(products)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
    </div>
  );
}
