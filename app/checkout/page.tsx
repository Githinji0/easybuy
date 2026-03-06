"use client";


import { useCartStore } from "@/store/cart-store";

export default function CheckoutPage() {
    const { items } = useCartStore();
    const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);


    if (items.length === 0) {
        return (
            <div className="container mx-auto p-4">
                <p>Your cart is empty.</p>
            </div>
        );
    }
    return (

        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        </div>
    );
}