/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { ShoppingCart, XCircle, MenuIcon } from "lucide-react";
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

  useEffect(() => {
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
    <nav className="bg-surface text-text-primary h-20 w-full flex items-center">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-accent tracking-wide font-bold text-2xl hover:text-text-primary">
          EazyBuy
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex text-lg font-semibold gap-6">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/products" className="hover:text-accent">
            Products
          </Link>
          <Link href="/contacts" className="hover:text-accent">
            Contact
          </Link>
          <Link href="/checkout" className="hover:text-accent">
            Checkout
          </Link>
        </div>

        {/* Cart + Mobile Button */}
        <div className="flex items-center gap-4">
          <Link href="/checkout" className="relative">
            <ShoppingCart className="text-accent" size={32} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            {toggleMobileMenu ? (
              <XCircle className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggleMobileMenu && (
        <div className="absolute top-20 left-0 w-full bg-surface flex flex-col items-center gap-4 py-6 md:hidden shadow-lg z-50">
          <Link href="/" onClick={() => setToggleMobileMenu(false)}>
            Home
          </Link>
          <Link href="/products" onClick={() => setToggleMobileMenu(false)}>
            Products
          </Link>
          <Link href="/contacts" onClick={() => setToggleMobileMenu(false)}>
            Contact
          </Link>
          <Link href="/checkout" onClick={() => setToggleMobileMenu(false)}>
            Checkout
          </Link>
        </div>
      )}
    </nav>
  );
};
