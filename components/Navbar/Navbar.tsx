import Link from "next/link";


export function Navbar() {
    return (
        <nav className="bg-black text-white flex justify-between px-20 py-5 pr-40 shadow-2xl">
            <Link href="/" className="text-2xl font-semibold">Flipkart</Link>
            <div className="flex gap-10">
                <Link href="/products/smartphones" className="font-medium text-lg">Products</Link>
                <Link href="/cart"  className="font-medium text-lg">Cart</Link>
            </div>
        </nav>
    )
}