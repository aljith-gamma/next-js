import { IProduct } from "@/app/products/[productName]/page";
import Image from "next/image";

interface ICartItem extends Required<IProduct>{
    quantityHandler: (id: number, val: number) => void;
}

export default function CartItem (props: ICartItem) {
    const { thumbnail, title, description, brand, price, qty, id, quantityHandler} = props;
    return (
        <div className="shadow-dark bg-yellow-100 grid grid-cols-4 items-center">
            <div className="w-52 h-36 p-4 cols-span-1">
                <Image src={thumbnail} alt={title} width={0} height={0} className="w-full h-full shadow-2xl" sizes='100vw' />
            </div>

            <div className="col-span-2 py-4">
                <p className="text-base"><span className="text-gray-600 text-base">Title: </span> { title }</p>
                <p className="text-base">
                    <span className="text-gray-600 text-base">Description: </span> 
                    { description.slice(0, 40) + "..."  }
                </p>
                <p className="text-base"><span className="text-gray-600 text-base">Brand: </span> { brand }</p>
                <p className="text-xl">
                    <span className="text-gray-600 text-base">Price: </span> { price }$
                </p>
                <p className="text-xl">
                    <span className="text-lg">Total: </span> { price * qty }$
                </p>
            </div>

            <div className="col-span-1  flex justify-center items-center flex-col">
                <p className="text-center text-xl text-blue-500 font-semibold">Qty</p>
                <div className="flex gap-5  justify-between">
                    <div className="flex items-center">
                        <button className="text-4xl bg-gray-300 px-4 transition-200 hover:shadow-xl rounded-md"
                            onClick={ () => quantityHandler(id, -1)}
                        >-</button>
                    </div>
                    <div className="flex items-center">
                        <p className="text-3xl">{ qty }</p>
                    </div>
                    <div className="flex items-center">
                        <button className="text-4xl bg-gray-300 px-4 transition-200 hover:shadow-xl rounded-md"
                            onClick={ () => quantityHandler(id, 1)}
                        >+</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 