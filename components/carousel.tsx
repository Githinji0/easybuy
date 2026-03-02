/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Stripe from "stripe"
import { Card } from "./ui/card";
import { useEffect, useState } from "react";

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
    return (
        <Card></Card>
    );
}