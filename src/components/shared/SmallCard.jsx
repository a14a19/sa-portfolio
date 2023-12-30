import { Link } from "react-router-dom"
import Clock from "../clock/Clock";

function SmallCard(props) {

   return (
      <>
         {props.type === "TIME" && (
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
         )}
         {props.type === "MODE" && (
            <aside className="w-[50%] pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl">
               <div className="flex items-center justify-between px-3 py-1">
                  <Link className="w-full text-xs">MODE</Link>
                  <div className="bg-[#ffc21d] w-2 h-2 rounded-full shadow-[0_0_5px_1px_rgba(255,194,29,0.5)]"></div>
               </div>
               <div className="mx-2 mt-1 border-b-2 border-[#d8d8d830]"></div>
               <div className="h-[8.375rem] px-3 pt-2 text-xs">
                  Out of office. Enjoying the Indian winter.
               </div>
            </aside>
         )}

         {props.type === "YEARSPRO" && (
            <aside className="w-[50%] pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl flex flex-col gap-3">
               <div className="flex gap-3 items-end h-[45%] border border-gray-500 rounded-lg px-3 mx-1.5">
                  <div className="text-7xl">8</div>
                  <div className=" text-xs flex items-center justify-between py-2">
                     YEARS PRO
                  </div>
               </div>
               {/* <div className="mx-2 mt-1 border-b-2 border-[#d8d8d830]"></div> */}
               <div className="flex gap-3 items-end h-[45%] border border-gray-500 rounded-lg pb-1 px-3 mx-1.5">
                  <div className="flex justify-center text-3xl">7744</div>
                  <div className="whitespace-nowrap w-min">Cb Rank</div>
               </div>
            </aside>
         )}
         {props.type === "CTAS" && (
            <aside className="w-[50%] pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl">
               <div className="flex items-center justify-between px-3 py-1">
                  <Link className="w-full text-xs">CTAs</Link>
               </div>
               <div className="mx-2 mt-1 border-b-2 border-[#d8d8d830]"></div>
               <div className="flex justify-center h-[8.375rem] px-3 pt-2 text-xs">
                  <div className="flex flex-col w-full gap-2">
                     <a
                        className="flex p-2 border rounded-3xl"
                        href="mailto:hi@sridhar.fyi"
                     >
                        Contact Me
                        <p className="ml-auto">&#8599;</p>
                     </a>
                     <a
                        className="flex p-2 border rounded-3xl"
                        href="https://www.linkedin.com/company/sridhar-arunagiri/about/"
                     >
                        Connect
                        <p className="ml-auto">&#8599;</p>
                     </a>
                     <a
                        className="flex p-2 border rounded-3xl"
                        href="https://topmate.io/sridhar_a"
                     >
                        Topmate.io
                        <p className="ml-auto">&#8599;</p>
                     </a>
                  </div>
               </div>
            </aside>
         )}
      </>
   );
}

export default SmallCard;
