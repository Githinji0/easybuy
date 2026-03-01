import Link from "next/link"

export const Navbar = () => {
    return(
        <nav className="bg-surface shadow-2xl border-b-2 shadow-text-primary text-text-primary flex h-20 justify-between w-full">
            <div className="container mx-auto flex items-center justify-between">
                <div className=" text-accent tracking-wide font-bold hover:text-text-primary text-2xl">
                    <Link href="/">EazyBuy</Link>
                    
                    </div>
                <div className=" text-lg font-semibold flex space-x-4 w-full justify-end text-text-primary">
                    <Link href="/" className=" hover:text-accent
                    
                    
                    px-3">Home</Link>
                    <Link href="/products" className=" hover:text-accent px-3">Products</Link>
                    <Link href="/contacts" className=" hover:text-accent px-3">Contact</Link>
                    <Link href="/checkout" className=" hover:text-accent px-3">Checkout</Link>

                </div>
            </div>
            <div className=""></div>
        <button className="md:hidden p-4 text-text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        </nav>
    )
}