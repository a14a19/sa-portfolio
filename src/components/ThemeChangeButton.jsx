import { useSelector, useDispatch } from "react-redux";
import { changeTheme, toggleThemeBtn } from "../features/themes/themeSlice";
import sridhar from "../assets/sridhar.jpeg";

function ThemeChangeButton() {

    const { showThemeBtn } = useSelector((store) => store.theme)
    const dispatch = useDispatch()

    return (
        <aside className="relative z-30">
            <div className="w-full fixed top-0 left-0 right-0 flex items-center flex-col transition-all ease-in-out duration-300">
                <div className="border-x-2 border-b-2 border-[#d8d8d830] mx-auto px-2 pt-1 pb-1.5 text-xs rounded-b-2xl bg-[#292929] transition-all ease-in-out duration-300">
                    <button className="text-xs text-[#f4f4f4]" onClick={() => dispatch(toggleThemeBtn())}>
                        Switch Theme
                    </button>
                    {
                        showThemeBtn && (
                            <div className="flex gap-4 items-center justify-center mt-2 ease-in-out duration-300">
                                <img src={sridhar} alt="" onClick={() => dispatch(changeTheme({ theme: "black" }))} className="h-6 rounded-full brightness-[0.5] cursor-pointer" title="Dark Theme" />
                                <img src={sridhar} alt="" onClick={() => dispatch(changeTheme({ theme: "white" }))} className="h-6 rounded-full contrast-[0.5] cursor-pointer" title="White Theme" />
                            </div>
                        )
                    }
                </div>
            </div>
        </aside>
    )
}

export default ThemeChangeButton