import Image from "next/image";
import Stripe from "stripe";
import { Button } from "./ui/button";
interface ProductDetailProps {
  product: Stripe.Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const price = product.default_price as Stripe.Price;
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {product.images && product.images.length > 0 && (
        <Image
          src={product.images[0]}
          alt={product.name}
          width={500}
          height={320}
          className="rounded-lg overflow-hidden mb-6"
        />
      )}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        {price && price.unit_amount && (
          <p className="text-2xl font-semibold text-accent">
            KES {(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full">
              -
            </Button>
            <span className="px-4">0</span>
            <Button variant="outline" className="rounded-full">
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
