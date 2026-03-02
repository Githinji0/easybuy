/* eslint-disable @typescript-eslint/no-unused-vars */
import Carousel from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });
  console.log(products);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <section className="flex w-full flex-col items-center gap-12 px-4 py-16 lg:flex-row">
        <div className=" lg:grid-cols-2 grid items-center gap-8 w-full p-10">
          <div className=" lg:col-span-1">
            <div className=" lg:w-3/4 space-y-6">
               <h2 className="lg:text-7xl font-semibold tracking-wide ">Welcome to the home of quality sneakers</h2>
            <p className=" lg:text-xl mb-10 text-text-secondary">
              Discover our premium collection of stylish and comfortable
              footwear.
            </p>
            </div>
           
            <Button asChild variant="default">
              <Link href={"/products"}>Shop Now</Link>
            </Button>
          </div>
          <Image
            src={products.data[0].images[0]}
            alt="Sneakers"
            width={740}
            height={740}></Image>
        </div>
      </section>
      <section>
        <Carousel products={[]} />
      </section>
    </div>
  );
}
