import { Link } from "react-router-dom";
import { experience } from "../../data/experience";
import { project } from "../../data/project";
import SmallCard from "./SmallCard";

function Card(props) {
   // console.log(props.type)
   return (
      <>
         {props.type === "EXPERIENCE" && (
            <aside className="w-[33.333%] h-min pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl overflow-hidden">
               <Link className="w-full px-3 text-xs">EXPERIENCE</Link>
               <div className="mx-2 mt-1 border-b-2 border-[#d8d8d830]"></div>
               <div className="h-[31.25rem] overflow-y-auto px-3">
                  {experience &&
                     experience.map((elem, i) => {
                        return (
                           <div
                              className="py-3 border-b-2 border-[#d8d8d810]"
                              key={i}
                           >
                              <h3 className="text-xs">{elem.title}</h3>
                              <p className="text-xs mt-1 text-[#d8d8d880]">
                                 {elem.description}
                              </p>
                              <div className="text-xs mt-4 text-[#d8d8d880]">
                                 {elem.location}
                              </div>
                           </div>
                        );
                     })}
               </div>
            </aside>
         )}
         {props.type === "TIMEMODE" && (
            <aside className="w-[33.333%] flex gap-5 h-min">
               <SmallCard type={"TIME"} />
               <SmallCard type={"MODE"} />
            </aside>
         )}
         {props.type === "PROJECT" && (
            <aside className="w-[33.333%] h-min pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl overflow-hidden">
               <Link className="w-full px-3 text-xs">PROJECT</Link>
               <div className="mx-2 border-b-2 mt-1 border-[#d8d8d830]"></div>
               <div className="h-[20.625rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 ">
                  {project &&
                     project.map((elem, i) => {
                        return (
                           <div
                              className="px-3 py-2 flex gap-5 justify-between items-center bg-[#1b1b1b] rounded-lg"
                              key={i}
                           >
                              <img
                                 src={elem.img}
                                 alt=""
                                 className="h-10 rounded-full ms-2"
                              />
                              <div>
                                 <h3 className="text-xs">{elem.title}</h3>
                                 <p className="text-xs mt-1 text-[#d8d8d880]">
                                    {elem.description}
                                 </p>
                              </div>
                           </div>
                        );
                     })}
               </div>
            </aside>
         )}

         {props.type === "KINDWORDS" && (
            <aside className="w-[33.333%] h-min pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl overflow-hidden">
               <Link className="w-full px-3 text-xs">KIND WORDS</Link>
               <div className="mx-2 border-b-2 mt-1 border-[#d8d8d830]"></div>
               <div className="h-[20.625rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 text-xs"></div>
            </aside>
         )}
      </>
   );
}

export default Card;
