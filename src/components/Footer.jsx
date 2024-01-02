import { useSelector } from "react-redux";

function Footer() {

    const { theme } = useSelector((store) => store.theme)

    return (
        <footer className={`${theme === 'black' ? 'border-[#d8d8d830]' : 'border-[#00000033]'} flex justify-between items-center pt-6 pb-4 mt-6 border-t-2`}>
            <div className="text-xs text-gray-500">&#169; 2023</div>
            <div className="flex justify-center items-center">
                <div className="text-xs text-gray-500">
                    Created by
                </div>
                <div className="text-xs ms-2 font-bold">
                    8ASE
                </div>
            </div>
        </footer>
    )
}

export default Footer