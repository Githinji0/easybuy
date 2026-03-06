"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import  Link  from "next/link"
import { useCartStore } from "@/store/cart-store"
import { useEffect } from "react";
export  default function SuccessPage() {
    const {clearCart} = useCartStore();
    useEffect(()=>{clearCart()})
    return(
        <div className="container mx-auto p-4 text-center">
            <Check className="mx-auto mb-4 text-green-600" size={64} />
            <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
            <p className="text-lg text-gray-700">Thank you for your purchase. Your order has been received and is being processed.</p>
            <Button>
                
                <Link href="/">Continue Shopping</Link>
            </Button>
        </div>
    )
}