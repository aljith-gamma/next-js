"use client"
import { IProduct } from "@/app/products/[productName]/page";
import Image from "next/image";



export default function InidvidualProduct(props: IProduct ) {
    const { thumbnail, title, price, description, id } = props;
    
    const addToCart = () => {
        const cart = localStorage.getItem('cart');
        let data = cart ? JSON.parse(cart) : [];
        let flag = true;
        data = data.map((item: Required<IProduct>) => {
            if(item.id === id){
                item.qty = item.qty + 1;
                flag = false;
            }
            return item;
        })

        if(flag) {
            data.push({
                ...props,
                qty: 1
            })
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }

    return (
        <div className="p-4 bg-orange-200 rounded-lg shadow:xl hover:shadow-dark ease-linear duration-200 cursor-pointer ">
            <div className="w-full h-60">
                <Image src={thumbnail} alt={title} 
                    width={0} height={0} className="w-full h-full" sizes='100vw'
                />
            </div>
            <p className="mt-2 text-gray-600 text-lg"><span className="text-black">Title : </span>{ title }</p>
            <p className="mt-1 text-gray-600 text-sm h-14"><span className="text-black">Description : </span>{ description.slice(0, 100) + "..." }</p>
            <p className="text-right mt-2">{ price }$</p>
            <button className="bg-green-600 px-4 py-2 text-white rounded-md hover:bg-green-700"
                onClick={ addToCart }
            >Add to Cart</button>
        </div>
    )
}