"use client"
import { useEffect, useState } from "react"
import { IProduct } from "../products/[productName]/page";
import CartItem from "@/components/CartItem/CartItem";


export default function Cart (){
    const [data, setData] = useState<Required<IProduct>[]>([]);

    useEffect(() => {
        const cart = localStorage.getItem('cart');
        const cartData = cart ? JSON.parse(cart) : [];
        setData(cartData);
    }, []);

    const quantityHandler = (id: number, value: number) => {
        const cartData = data.filter((item) => {
            return item.id === id ? item.qty = item.qty + value : item.qty;
        });
        localStorage.setItem('cart', JSON.stringify(cartData));
        setData(cartData);
    }

    const total = data.reduce((acc, item) => {
        return acc + (item.qty * item.price);
    }, 0)

    return (
        <div className="py-3 mx-6">
            <p className="text-center text-3xl">Cart Items</p>

            <div className="grid grid-cols-5">
                <div className="py-4 px-10 flex flex-col gap-4 col-span-4">
                    {
                        data.length ? (
                            data.map((item: Required<IProduct>) => {
                                return <CartItem key={item.id} { ...item } quantityHandler={quantityHandler} />
                            })
                        ): (
                            <p>No items</p>
                        )
                    }
                </div>

                <div className="col-span-1">
                    <div className="my-3 bg-green-200 rounded-lg shadow-dark px-6 py-8 h-[200px] flex flex-col justify-center gap-3">
                        <p className="text-xl ">Total items: {data.length}</p>
                        <p className="text-xl ">TOTAL: <span className="text-2xl font-medium text-red-600">{ total }$</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}