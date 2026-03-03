import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: Stripe.Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const price = product.default_price as Stripe.Price;
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="border-0 shadow-lg hover:border-2 transition ease-in-out">
        {product.images && product.images.length > 0 && (
          <div className="h-80 relative w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 rounded-md mb-4 transition-opacity duration-500 ease-in-out object-contain "
              objectFit="cover"
              
              
            />
          </div>
        )}
        <CardHeader className="w-full items-start flex flex-col  justify-center">
          <CardTitle className="w-full text-lg font-bold tracking-wide lg:text-2xl">{product.name}</CardTitle>
          <p className="text-sm text-gray-500">{product.description}</p>
          <CardContent className="w-full flex items-start justify-between text-start">
            {
                price && price.unit_amount && (
                    <p className="text-lg text-start  text-accent">
                        KES {(price.unit_amount / 100).toFixed(2)}
                    </p>
                )
            }
          </CardContent>
          <Button>
            View Details
          </Button>
        </CardHeader>
      </Card>
    </Link>
  );
}
