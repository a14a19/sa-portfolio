import { Link } from "react-router-dom";
import sridhar from "../assets/sridhar.jpeg";

function Header() {
    return (
        <header className="flex justify-between items-center border-b-2 border-[#d8d8d830] pb-6 mb-6">
            <div className="flex justify-center items-center">
                <img src={sridhar} alt="" className="h-12 rounded-full me-4" />
                <div>
                    <h3 className="text-sm">Sridhar A</h3>
                    <h4 className="text-xs text-gray-400">Founder. Product Mentor. Investor.</h4>
                </div>
            </div>
            <div></div>
            <div>
                <Link to="mailto:hi@sridhar.fyi" className="border border-[#d8d8d830] px-3 py-1 rounded-xl text-xs bg-[#292929]">
                    Contact &#8599;
                </Link>
            </div>
        </header>
    )
}

export default Header