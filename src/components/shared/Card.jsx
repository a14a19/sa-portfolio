import { Link } from "react-router-dom";
import { experience } from "../../data/experience";
import { project } from "../../data/project";
import { education } from "../../data/education";
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
                <aside className="w-[33.333%] flex flex-col gap-5 h-min">
                    <div className="flex gap-5">
                        <SmallCard type={"TIME"} />
                        <SmallCard type={"MODE"} />
                    </div>
                    <aside className="w-full h-min pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl overflow-hidden">
                        {/* <Link className="text-xs w-full px-3">WHAT I DO</Link> */}
                        <div className="flex items-center justify-between px-3 py-1">
                            <h4 className="w-full text-xs">WHAT I DO</h4>
                            <Link className="text-xs uppercase text-gray-500 whitespace-nowrap">Portfolio &#8599;</Link>
                        </div>
                        <div className="mx-2 border-b-2 mt-1 border-[#d8d8d830]" ></div>
                        <div className="h-[19.43rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 relative">
                            <button className="px-3 py-2 bg-[#fac99c] w-min whitespace-nowrap text-xs font-semibold text-black rounded-lg pm-animate absolute top-10 left-8 uppercase">Product Manager</button>
                            <button className="px-3 uppercase py-2 bg-[#c8adfa] w-min whitespace-nowrap text-xs font-semibold text-black rounded-lg strategy-animate absolute top-16 right-5">Strategy</button>
                            <button className="px-3 py-2 uppercase bg-[#f8a9a8] w-min whitespace-nowrap text-xs font-semibold text-black rounded-lg ux-animate absolute top-36 left-10">UX Researcher</button>
                            <button className="px-3 py-2 bg-[#eee] uppercase w-min whitespace-nowrap text-xs font-semibold text-black rounded-lg brand-animate absolute top-44 right-5">Branding</button>
                            <button className="px-3 py-2 bg-[#9ccbf5] w-min uppercase whitespace-nowrap text-xs font-semibold text-black rounded-lg brand-animate absolute top-60 right-24">Graphic design</button>
                        </div>
                    </aside>
                </aside>
            )}
            {props.type === "PROJECT" && (
                <aside className="w-[33.333%] h-min pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl overflow-hidden">
                    <Link className="w-full px-3 text-xs">START UPS</Link>
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
                    <div className="h-[20.625rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 text-xs">
                        <p>
                            Sridhar, founder and CEO, embarked on the entrepreneurial
                            journey in 2020 with Famwork in healthcare, later
                            diversifying into various fields, and currently crafting
                            innovative ventures in stealth mode.
                        </p>
                    </div>
                </aside>
            )}
            {props.type === "YEARSPROCTAS" && (
                <aside className="w-[33.333%] flex gap-5 h-min">
                    <SmallCard type={"YEARSPRO"} />
                    <SmallCard type={"CTAS"} />
                </aside>
            )}
            {props.type === "EDUCATION" && (
                <aside className="w-[33.333%] h-min pt-1 border border-[#d8d8d830] bg-[#1e1e1e] rounded-xl overflow-hidden">
                    <Link className="w-full px-3 text-xs">EDUCATION</Link>
                    <div className="mx-2 border-b-2 mt-1 border-[#d8d8d830]"></div>
                    <div className="h-[20.625rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 ">
                        {education &&
                            education.map((elem, i) => {
                                return (
                                    <div
                                        className="px-3 py-2 flex gap-5 justify-between items-center bg-[#1b1b1b] rounded-lg"
                                        key={i}
                                    >
                                        <div>
                                            <h3 className="text-xs">
                                                {elem.degree} // {elem.type}
                                            </h3>
                                            <p className="text-xs mt-1 text-[#d8d8d880]">
                                                {elem.university}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </aside>
            )}
        </>
    );
}

export default Card;
