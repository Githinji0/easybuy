/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Stripe from "stripe"
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface CarouselProps {
    products: Stripe.Product[];
}

export default function Carousel({ products }: CarouselProps) {
    const [current , setCurrent] = useState<number>(0);
    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % products.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [products]);

    const currentProduct = products[current];
    const price = currentProduct.default_price as Stripe.Price;
    return (
        <Card className="w-full h-64 relative">
            {
                currentProduct.images && currentProduct.images.length > 0 && (
                    <Image src={currentProduct.images[0]} alt={currentProduct.name} className="w-full h-64 object-cover rounded-md mb-4" layout="fill" objectFit="cover"/>
                )
            }
            <CardContent className="absolute">
                <CardTitle className="text-lg font-bold">{currentProduct.name}</CardTitle>
                {
                    price&& price.unit_amount && (
                        <p className="text-2xl text-accent z-50">KES {(price.unit_amount / 100).toFixed(2)}</p>
                    )
                }
            </CardContent>
        </Card>
    );
}