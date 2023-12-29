import { Link } from "react-router-dom";
import Clock from "react-clock";
import { useEffect, useState } from "react";

function SmallCard(props) {
   const [value, setValue] = useState(new Date());

   useEffect(() => {
      const interval = setInterval(() => setValue(new Date()), 1000);

      return () => {
         clearInterval(interval);
      };
   }, []);

   return (
      <>
         {props.type === "TIME" && (
            <aside className="w-[50%] pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl">
               <div className="flex items-center justify-between px-3 py-1">
                  <Link className="w-full text-xs">TIME</Link>
                  <p className="text-xs text-gray-500">India</p>
               </div>
               <div className="mx-2 mt-1 border-b-2 border-[#d8d8d830]"></div>
               <div className="h-[8.375rem] px-3">
                  <Clock
                     value={value}
                     color="white"
                     useMillisecondPrecision={true}
                     className="flex w-full h-full"
                  />
               </div>
            </aside>
         )}
         {props.type === "MODE" && (
            <aside className="w-[50%] pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl">
               <div className="flex items-center justify-between px-3 py-1">
                  <Link className="w-full text-xs">MODE</Link>
                  <div className="bg-[#ffc21d] w-2 h-2 rounded-full shadow-[0_0_5px_1px_rgba(255,194,29,0.5)]"></div>
               </div>
               <div className="mx-2 mt-1 border-b-2 border-[#d8d8d830]"></div>
               <div className="h-[8.375rem] px-3 pt-2 text-xs">
                  Out of office. Enjoying the Canadian winter.
               </div>
            </aside>
         )}

         {props.type === "YEARSPRO" && (
            <aside className="w-[50%] pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl">
               <div className="flex items-center justify-between px-3 py-1">
                  <Link className="w-full text-xs">YEARS PRO</Link>
               </div>
               <div className="mx-2 mt-1 border-b-2 border-[#d8d8d830]"></div>
            </aside>
         )}
         {props.type === "CTAS" && (
            <aside className="w-[50%] pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl">
               <div className="flex items-center justify-between px-3 py-1">
                  <Link className="w-full text-xs">CTAs</Link>
               </div>
               <div className="mx-2 mt-1 border-b-2 border-[#d8d8d830]"></div>
               <div className="h-[8.375rem] px-3 pt-2 text-xs"></div>
            </aside>
         )}
      </>
   );
}

export default SmallCard;
