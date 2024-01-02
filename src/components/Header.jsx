import { Link } from "react-router-dom";
import sridhar from "../assets/sridhar.jpeg";
import { useSelector } from "react-redux";

function Header() {

    const { theme } = useSelector((store) => store.theme)

    return (
        <header className={`${theme === 'black' ? 'border-[#d8d8d830]' : 'border-[#00000033]'} flex justify-between items-center border-b-2 pb-6 mb-6`}>
            <div className="flex justify-center items-center">
                <img src={sridhar} alt="" className="h-12 rounded-full me-4" />
                <div>
                    <h3 className="text-sm">Sridhar A</h3>
                    <h4 className="text-xs text-gray-400">Founder. Product Mentor. Investor.</h4>
                </div>
            </div>
            <div></div>
            <div>
                <Link to="mailto:hi@sridhar.fyi" className={`${theme === 'black' ? 'border-[#d8d8d830]  bg-[#292929]' : 'bg-[#f6f6f6] border-[#00000033]'} border px-3 py-1 rounded-xl text-xs`}>
                    Contact &#8599;
                </Link>
            </div>
        </header>
    )
}

export default Header