import { Link } from "react-router-dom"
import Clock from "../clock/Clock";

function SmallCard(props) {

    return (
        <>
            {
                props.type === "TIME"
                &&
                <aside className="w-[50%] pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl">
                    <div className="flex justify-between items-center py-1 px-3">
                        <Link className="text-xs w-full">TIME</Link>
                        <p className="text-xs text-gray-500">India</p>
                    </div>
                    <div className="mx-2 mt-1 border-b-2 border-[#d8d8d830]"></div>
                    <div className="h-[8.375rem] px-3 relative">
                        <Clock />
                    </div>
                </aside>
            }
            {
                props.type === "MODE"
                &&
                <aside className="w-[50%] pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl">
                    <div className="flex justify-between items-center py-1 px-3">
                        <Link className="text-xs w-full">MODE</Link>
                        <div className="bg-[#ffc21d] w-2 h-2 rounded-full shadow-[0_0_5px_1px_rgba(255,194,29,0.5)]"></div>
                    </div>
                    <div className="mx-2 mt-1 border-b-2 border-[#d8d8d830]"></div>
                    <div className="h-[8.375rem] px-3 pt-2 text-xs">
                        Out of office. Enjoying the Canadian winter.
                    </div>
                </aside>
            }
        </>
    )
}

export default SmallCard