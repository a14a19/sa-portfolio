import { useEffect, useState } from 'react';
import "./Clock.css";
import { useSelector } from "react-redux";

function Clock() {

    const [value, setValue] = useState(new Date());
    const { theme } = useSelector((store) => store.theme)

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="clock overflow-hidden">
            <div
                className="hour_hand"
                style={{
                    transform: `rotateZ(${value.getHours() * 30}deg)`
                }}
            />
            <div
                className="min_hand"
                style={{
                    transform: `rotateZ(${value.getMinutes() * 6}deg)`
                }}
            />
            <div
                className="sec_hand"
                style={{
                    transform: `rotateZ(${value.getSeconds() * 6}deg)`
                }}
            />
            <span className={`${theme === 'black' ? 'bg-[#d8d8d830] border-[#d8d8d830]' : 'bg-gray-300 text-black border-[#00000033]'} twelve text-xs w-1 aspect-square rounded-full`}></span> {/*12*/}

        </div>
    )
}

export default Clock

{/* <span className="one text-xs w-1 h-4 bg-[#d8d8d830]"></span>  */ }
{/*1*/ }
{/* <span className="two text-xs w-1 h-4 bg-[#d8d8d830]"></span>  */ }
{/*2*/ }
{/* <span className="three text-xs w-1 h-4 bg-[#d8d8d830]"></span>  */ }
{/*3*/ }
{/* <span className="four text-xs w-1 h-4 bg-[#d8d8d830]"></span>  */ }
{/*4*/ }
{/* <span className="five text-xs w-1 h-4 bg-[#d8d8d830]"></span>  */ }
{/*5*/ }
{/* <span className="six text-xs w-1 h-4 bg-[#d8d8d830]"></span>  */ }
{/*6*/ }
{/* <span className="seven text-xs w-1 h-4 bg-[#d8d8d830]"></span>  */ }
{/*7*/ }
{/* <span className="eight text-xs w-1 h-4 bg-[#d8d8d830]"></span>  */ }
{/*8*/ }
{/* <span className="nine text-xs w-1 h-4 bg-[#d8d8d830]"></span>  */ }
{/*9*/ }
{/* <span className="ten text-xs w-1 h-4 bg-[#d8d8d830]"></span>  */ }
{/*10*/ }
{/* <span className="eleven text-xs w-1 h-4 bg-[#d8d8d830]"></span>  */ }
{/*11*/ }