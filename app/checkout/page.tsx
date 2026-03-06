"use client";

import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import { checkoutAction } from "./checkout-action";

export default function CheckoutPage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
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
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <div className="">
                  <span className="font-medium" >
                    {item.name} x {item.quantity}
                  </span>
                  <span>
                    KES {((item.price * item.quantity) / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => removeItem(item.id)}>
                    -
                  </Button>
                  <span className="px-4">{item.quantity}</span>
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => addItem({...item, quantity: 1})}>
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-bold text-lg">
              <span className="text-accent">Total:</span>
              <span>KES {((totalAmount) / 100).toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <form action={checkoutAction}>
        <Button className="mt-6 w-full mb-10" type="submit" variant={"default"}>
          Proceed to Payment
        </Button>
        <Button variant={"default"} className="mt-6 w-full mb-10" type="submit" onClick={()=>{
            clearCart();
        }}>
            Clear Cart
        </Button>
      </form>
    </div>
  );
}
