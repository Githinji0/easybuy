import { stripe } from "@/lib/stripe";
import ProductDetail from "@/components/ProducctDetails";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    throw new Error("Missing product ID");
  }

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const safeProduct = JSON.parse(JSON.stringify(product));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
      <ProductDetail product={safeProduct} />
    </div>
  );
}
