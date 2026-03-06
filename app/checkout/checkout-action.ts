"use server";

import { stripe } from "@/lib/stripe";
import { CartItem } from "@/store/cart-store";
import { redirect } from "next/navigation";

export const checkoutAction = async (formData: FormData): Promise<void> => {
  let session;
  try {
    const itemsJson = formData.get("items") as string;
    const items = JSON.parse(itemsJson);
    const lineItems = items.map((item: CartItem) => ({
      price_data: {
        currency: "KES",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }));

    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
    });
  } catch (error) {
    console.error(error);
  }
  redirect(session.url!);
};
