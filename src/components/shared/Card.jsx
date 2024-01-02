import { Link } from "react-router-dom";
import { experience } from "../../data/experience";
import { investment, project } from "../../data/project";
import { education } from "../../data/education";
import Clock from "../clock/Clock";
import { useDispatch, useSelector } from "react-redux";
import { isShow } from "../../features/popups/popup";

function Card(props) {

    const dispatch = useDispatch()
    const { theme } = useSelector((store) => store.theme)

    return (
        <>
            {props.type === "EXPERIENCE" && (
                <aside className={`${theme === 'black' ? 'bg-[#1e1e1e] border-[#d8d8d830]' : 'bg-white text-black border-[#00000033]'} sm-screen:row-span-5 row-span-3 col-span-2 h-min pt-1 border rounded-xl overflow-hidden`}>
                    <Link className="w-full px-3 text-xs">EXPERIENCE</Link>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="md:h-[32.3rem] h-[45rem] overflow-y-auto px-3">
                        {experience &&
                            experience.map((elem, i) => {
                                return (
                                    <div
                                        className={`${theme === 'black' ? 'border-[#d8d8d810]' : 'border-[#00000033]'} py-3 border-b-2`}
                                        key={i}
                                    >
                                        <h3 className="text-xs">{elem.title}</h3>
                                        <p className={`${theme === 'black' ? 'text-[#d8d8d880]' : 'text-[#00000090]'} text-xs mt-1`}>
                                            {elem.description}
                                        </p>
                                        <div className={`${theme === 'black' ? 'text-[#d8d8d880]' : 'text-[#00000090]'} text-xs mt-4`}>
                                            {elem.location}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </aside>
            )}

            {props.type === "TIMESM" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} sm-screen:row-span-1 col-span-1 block md:hidden pt-1 border rounded-xl`}>
                    <div className="flex justify-between items-center py-1 px-3">
                        <Link className="text-xs w-full">TIME</Link>
                        <p className="text-xs text-gray-500">India</p>
                    </div>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="h-[8.375rem] px-3 relative">
                        <Clock />
                    </div>
                </aside>
            )}
            {props.type === "MODESM" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} sm-screen:row-span-1 col-span-1 block md:hidden pt-1 border rounded-xl`}>
                    <div className="flex items-center justify-between px-3 py-1">
                        <Link className="w-full text-xs">MODE</Link>
                        <div className="bg-[#58f81b] w-2 h-2 rounded-full shadow-[0_0_5px_1px_rgba(90,255,29,0.5)]"></div>
                    </div>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="h-[8.375rem] px-3 pt-2 text-xs">
                        Back to work, achieving greatness!
                    </div>
                </aside>
            )}
            {props.type === "TIMEMD" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} row-span-1 col-span-1 md:block hidden pt-1 border rounded-xl`}>
                    <div className="flex justify-between items-center py-1 px-3">
                        <Link className="text-xs w-full">TIME</Link>
                        <p className="text-xs text-gray-500">India</p>
                    </div>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="h-[8.375rem] px-3 relative">
                        <Clock />
                    </div>
                </aside>
            )}
            {props.type === "MODEMD" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} row-span-1 col-span-1 md:block hidden pt-1 border rounded-xl`}>
                    <div className="flex items-center justify-between px-3 py-1">
                        <Link className="w-full text-xs">MODE</Link>
                        <div className="bg-[#58f81b] w-2 h-2 rounded-full shadow-[0_0_5px_1px_rgba(90,255,29,0.5)]"></div>
                    </div>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="h-[8.375rem] px-3 pt-2 text-xs">
                        Back to work, achieving greatness!
                    </div>
                </aside>
            )}
            {props.type === "WHATIDO" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} row-span-2 col-span-2 w-full h-min pt-1 border rounded-xl overflow-hidden`}>
                    <div className="flex items-center justify-between px-3 py-1">
                        <h4 className="w-full text-xs">WHAT I DO</h4>
                        <Link className="text-xs uppercase text-gray-500 whitespace-nowrap">Portfolio &#8599;</Link>
                    </div>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="h-[20.3rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 relative">
                        <button className="px-3 py-2 bg-[#fac99c] w-min whitespace-nowrap text-xs font-semibold text-black rounded-lg pm-animate absolute top-10 left-8 uppercase">Product Manager</button>
                        <button className="px-3 uppercase py-2 bg-[#c8adfa] w-min whitespace-nowrap text-xs font-semibold text-black rounded-lg strategy-animate absolute top-16 right-5">Strategy</button>
                        <button className="px-3 py-2 uppercase bg-[#f8a9a8] w-min whitespace-nowrap text-xs font-semibold text-black rounded-lg ux-animate absolute top-36 left-10">UX Researcher</button>
                        <button className="px-3 py-2 bg-[#eee] uppercase w-min whitespace-nowrap text-xs font-semibold text-black rounded-lg pm-animate absolute top-44 right-5">Development</button>
                        <button className="px-3 py-2 bg-[#9ccbf5] w-min uppercase whitespace-nowrap text-xs font-semibold text-black rounded-lg investor-animate absolute top-60 right-5">Investor</button>
                        <button className="px-3 py-2 bg-[#b0e3b6] w-min uppercase whitespace-nowrap text-xs font-semibold text-black rounded-lg mentor-animate absolute top-52 left-10">Mentor</button>
                        <button className="px-3 py-2 bg-[#fef1aa] w-min uppercase whitespace-nowrap text-xs font-semibold text-black rounded-lg startup-animate absolute top-64 left-24">Startup Founder</button>
                    </div>
                </aside>
            )}
            {props.type === "STARTUPS" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} sm-screen:row-span-1 row-span-2 col-span-2 h-min pt-1 border rounded-xl overflow-hidden`}>
                    <Link className="w-full px-3 text-xs">STARTUPS</Link>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="h-[20.3rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 ">
                        {project &&
                            project.map((elem, i) => {
                                return (
                                    <Link
                                        className={`${theme === 'black' ? 'bg-[#1b1b1b]' : 'bg-[#f6f6f6] text-black border-[#00000033]'} px-3 py-2 group relative flex gap-5 justify-between items-center rounded-lg`}
                                        key={i}
                                        to={elem.link}
                                        target="_blank"
                                    >
                                        <button className="absolute top-0 right-0.5 group-hover:block hidden">&#8599;</button>
                                        <img
                                            src={elem.img}
                                            alt=""
                                            className="h-10 rounded-full ms-2"
                                        />
                                        <div>
                                            <h3 className="text-xs">{elem.title}</h3>
                                            <p className={`${theme === 'black' ? 'text-[#d8d8d880]' : 'text-[#00000088]'} text-xs mt-1`}>
                                                {elem.description}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                </aside>
            )}
            {props.type === "INVESTMENTS" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} row-span-2 col-span-2 h-min pt-1 border rounded-xl overflow-hidden`}>
                    <Link className="w-full px-3 text-xs">INVESTMENTS</Link>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="h-[20.3rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 ">
                        {investment &&
                            investment.map((elem, i) => {
                                return (
                                    <Link
                                        className={`${theme === 'black' ? 'bg-[#1b1b1b]' : 'bg-[#f6f6f6] text-black border-[#00000033]'} px-3 py-2 group relative flex gap-5 justify-between items-center rounded-lg`}
                                        key={i}
                                        to={elem.link}
                                        target="_blank"
                                    >
                                        <button className="absolute top-0 right-0.5 group-hover:block hidden">&#8599;</button>
                                        <img
                                            src={elem.img}
                                            alt=""
                                            className="h-10 rounded-full ms-2"
                                        />
                                        <div>
                                            <h3 className="text-xs">{elem.title}</h3>
                                            <p className={`${theme === 'black' ? 'text-[#d8d8d880]' : 'text-[#00000088]'} text-xs mt-1`}>
                                                {elem.description}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                </aside>
            )}
            {props.type === "YEARPRO" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} row-span-1 col-span-1 pt-1 border rounded-xl flex flex-col gap-3`}>
                    <div className={`${theme === 'black' ? 'border-[#d8d8d830]' : ' border-[#00000033]'} flex gap-3 items-end h-[45%] border rounded-lg px-3 mx-1.5`}>
                        <div className="text-7xl">8</div>
                        <div className=" text-xs flex items-center justify-between py-2">
                            YEARS PRO
                        </div>
                    </div>
                    {/* <div className="mx-2 mt-1 border-b-2 border-[#d8d8d830]"></div> */}
                    <div className={`${theme === 'black' ? 'border-[#d8d8d830]' : ' border-[#00000033]'} flex gap-3 items-end border h-[45%] rounded-lg pb-1 px-3 mx-1.5`}>
                        <div className="flex justify-center text-4xl">7749</div>
                        <div className="w-min">Cb Rank</div>
                    </div>
                </aside>
            )}
            {props.type === "CTAS" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} row-span-1 col-span-1 pt-1 border rounded-xl`}>
                    <div className="flex items-center justify-between px-3 py-1">
                        <Link className="w-full text-xs">CTAs</Link>
                    </div>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="flex justify-center h-[8.375rem] px-3 pt-2 text-xs">
                        <div className="flex flex-col w-full gap-2">
                            <Link
                                className={`${theme === 'black' ? 'border-[#d8d8d830]' : ' border-[#00000033]'} flex p-2 border rounded-3xl`}
                                to="mailto:hi@sridhar.fyi"
                            >
                                Contact Me
                                <p className="ml-auto">&#8599;</p>
                            </Link>
                            <Link
                                className={`${theme === 'black' ? 'border-[#d8d8d830]' : ' border-[#00000033]'} flex p-2 border rounded-3xl`}
                                to="https://www.crunchbase.com/person/sridhar-a"
                            >
                                Connect
                                <p className="ml-auto">&#8599;</p>
                            </Link>
                            <Link
                                className={`${theme === 'black' ? 'border-[#d8d8d830]' : ' border-[#00000033]'} flex p-2 border rounded-3xl`}
                                to="https://topmate.io/sridhar_a"
                            >
                                Topmate.io
                                <p className="ml-auto">&#8599;</p>
                            </Link>
                        </div>
                    </div>
                </aside>
            )}

            {props.type === "KINDWORDS" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} row-span-1 col-span-2 h-min pt-1 border rounded-xl overflow-hidden`}>
                    <Link className="w-full px-3 text-xs">ABOUT ME</Link>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="h-[8.375rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 text-xs">
                        <p>
                            Sridhar, founder and CEO, embarked on the entrepreneurial
                            journey in 2020 with Famwork in healthcare, later
                            diversifying into various fields, and currently crafting
                            innovative ventures in stealth mode.
                        </p>
                    </div>
                </aside>
            )}

            {props.type === "JOBS" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} row-span-1 col-span-2 h-min pt-1 border rounded-xl overflow-hidden`}>
                    <div className="flex items-center justify-between px-3 py-1">
                        <h4 className="w-full text-xs">JOBS</h4>
                        <button onClick={() => dispatch(isShow({ title: "Jobs" }))} className="text-xs uppercase text-gray-500 whitespace-nowrap">&#8599;</button>
                    </div>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="h-[8.375rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 text-xs relative">
                        <button className="px-3 py-2 bg-[#fac99c] w-min whitespace-nowrap text-xs font-semibold text-black rounded-lg pm-animate absolute top-10 left-8 uppercase">Software Engineer</button>
                        <button className="px-3 uppercase py-2 bg-[#c8adfa] w-min whitespace-nowrap text-xs font-semibold text-black rounded-lg strategy-animate absolute top-12 right-3">Product designer</button>
                        <button className="px-3 py-2 uppercase bg-[#f8a9a8] w-min whitespace-nowrap text-xs font-semibold text-black rounded-lg ux-animate absolute top-20 left-3">Investment Analyst</button>
                    </div>
                </aside>
            )}

            {props.type === "COHORT" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} row-span-1 col-span-2 h-min pt-1 border rounded-xl overflow-hidden`}>
                    <div className="flex items-center justify-between px-3 py-1">
                        <h4 className="w-full text-xs">COHORT</h4>
                        <button onClick={() => dispatch(isShow({ title: "Cohort" }))} className="text-xs uppercase text-gray-500 whitespace-nowrap">&#8599;</button>
                    </div>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="h-[8.375rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 text-xs">
                        <p>
                            Coming soon...
                        </p>
                    </div>
                </aside>
            )}
            {props.type === "EDUCATION" && (
                <aside className={`${theme === 'black' ? 'border-[#d8d8d830] bg-[#1e1e1e]' : 'bg-white text-black border-[#00000033]'} row-span-1 col-span-2 h-min pt-1 border rounded-xl overflow-hidden`}>
                    <Link className="w-full px-3 text-xs">EDUCATION</Link>
                    <div className={`${theme === 'black' ? "border-[#d8d8d830]" : "border-[#00000033]"} mx-2 mt-1 border-b-2`}></div>
                    <div className="h-[8.375rem] overflow-y-auto px-3 pt-3 flex flex-col gap-3 ">
                        {education &&
                            education.map((elem, i) => {
                                return (
                                    <div
                                        className={`${theme === 'black' ? 'bg-[#1b1b1b]' : 'bg-[#f6f6f6] text-black'} px-3 py-2 flex gap-5 justify-between items-center rounded-lg`}
                                        key={i}
                                    >
                                        <div>
                                            <h3 className="text-xs">
                                                {elem.degree} // {elem.type}
                                            </h3>
                                            <p className={`${theme === 'black' ? 'text-[#d8d8d880]' : 'text-[#00000080]'} text-xs mt-1`}>
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
