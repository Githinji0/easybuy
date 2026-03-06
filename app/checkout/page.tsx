"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";

export default function CheckoutPage() {
  const { items } = useCartStore();
  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <p>Your cart is empty.</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-accent">Checkout</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>{
            items.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>KES {((item.price * item.quantity) / 100).toFixed(2)}</span>
              </li>
            ))
          }</ul>
        </CardContent>
      </Card>
    </div>
  );
}
