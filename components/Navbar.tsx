/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { ShoppingCart, XCircle,MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
export const Navbar = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  useEffect(()=>{
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setToggleMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-surface text-text-primary flex h-20 justify-between w-full lg:visible items-center px-4 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className=" text-accent tracking-wide font-bold hover:text-text-primary text-2xl">
          <Link href="/">EazyBuy</Link>
        </div>
        <div className=" text-lg font-semibold flex space-x-4 w-full justify-end text-text-primary">
          <Link
            href="/"
            className=" hover:text-accent
                    
                    
                    px-3">
            Home
          </Link>
          <Link href="/products" className=" hover:text-accent px-3">
            Products
          </Link>
          <Link href="/contacts" className=" hover:text-accent px-3">
            Contact
          </Link>
          <Link href="/checkout" className=" hover:text-accent px-3">
            Checkout
          </Link>
        </div>
      </div>
      <div className=" flex items-center space-x-4">
        <Link href={"/checkout"} className="relative">
          <ShoppingCart className="text-accent" size={40} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
        <Button  color="black" variant="ghost" className="md:hidden text-accent" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
          {
            toggleMobileMenu ? (
              <XCircle
                className="h-6 w-6"
              />
            ) : (
              <MenuIcon color="black"
                className="h-6 w-6"
              />
            )
          }
        </Button>
      </div>
      {
        toggleMobileMenu && (
          <nav className="absolute top-20 left-0 w-full bg-surface flex flex-col items-center space-y-4 py-4 lg:hidden">
            <Link href="/" className="  px-3" onClick={() => setToggleMobileMenu(false)}>
              Home
            </Link>
            <Link href="/products" className="  px-3" onClick={() => setToggleMobileMenu(false)}>
              Products
            </Link>
            <Link href="/contacts" className="  px-3" onClick={() => setToggleMobileMenu(false)}>
              Contact
            </Link>
          </nav>
        )
          
      }
    </nav>
  );
};
