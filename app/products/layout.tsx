import Sidebar from "@/components/Sidebar/Sidebar";
import { IChildren } from "../layout";


export default function ProductLayout({ children }: IChildren){
    return (
        <>
        <div className="grid grid-cols-5">
            <div className="col-span-1">
                <Sidebar />
            </div>
            <div className="col-span-4">
                { children }
            </div>
        </div>
        </>
    )
}