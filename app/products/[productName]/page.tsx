// "use client"
import InidvidualProduct from "@/components/IndividualProduct/IndividualProduct";
import { axiosClient } from "@/config";
import { useEffect, useState } from "react"

export interface IProduct {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: [string];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
    qty?: number;
}


async function getProducts(productName: string){
    try {
        const res = await axiosClient(`/category/${productName}`);
        console.log(productName+ " data rendered");
        return res.data.products;
    } catch (err) {
        console.log(err);
        return []
    }
}


export default async function Product({ params: { productName } }: any){
    // <--- Using client side rendering --->

    // const [products, setProducts] = useState<IProduct[]>([]);

    // useEffect(() => {
    //     fetchProducts();
    // }, [])

    // const fetchProducts = async () => {
    //     try {
    //         const res = await axiosClient(`/category/${productName}?limit=0`);
    //         console.log(res.data.products);
    //         setProducts(res.data.products);

    //     } catch (err) {
    //         console.log(err);
    //     }
    // }


    // <--- Using Serverside rendering --->

    const products = await getProducts(productName);

    
    return (
        <div>
            <h1 className="text-3xl text-center mt-2">{ productName[0].toUpperCase() + productName.slice(1) }</h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-5 p-5">
                { products.map((prod: IProduct) => {
                    return <InidvidualProduct key={prod.id} { ...prod } />
                })}
            </div>
        </div>
    )
}