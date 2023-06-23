import Link from "next/link";


export default function Sidebar() {
    return (
        <div className="bg-blue-200 min-h-[90vh] px-10 py-10 flex flex-col gap-3 shadow-3xl">
            <div className="border-b-2 border-gray-400 p-2">
                <Link  href="/products/smartphones" className="text-xl cursor-pointer">Smartphones</Link>
            </div>
            <div className="border-b-2 border-gray-400 p-2">
                <Link href="/products/laptops" className="text-xl cursor-pointer">Laptops</Link>
            </div>
            <div className="border-b-2 border-gray-400 p-2">
                <Link href="/products/furniture" className="text-xl cursor-pointer">Furniture</Link>
            </div>
            <div className="border-b-2 border-gray-400 p-2">
                <Link href="/products/skincare" className="text-xl cursor-pointer">Skincare</Link>
            </div>
        </div>
    )
}