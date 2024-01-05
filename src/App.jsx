import { useEffect } from "react";
import ThemeChangeButton from "./components/ThemeChangeButton"
import Main from "./pages/Main"
import { useSelector, useDispatch } from "react-redux";
import { changeTheme, initialTheme } from "./features/themes/themeSlice";

function App() {

  const { theme } = useSelector((store) => store.theme)
  const dispatch = useDispatch();
  const local = localStorage.getItem("theme");

  useEffect(() => {
    console.log(local);
    if (local) {
      dispatch(initialTheme({ theme: local }))
    } else {
      dispatch(initialTheme({ theme: "black" }))
    }
  }, [])

  return (
    <div className={`${theme === 'black' ? 'bg-[#161616] text-[#ffffffde] ease-in-out duration-300' : 'bg-[#f4f4f4] text-black ease-in-out duration-300'}`}>
      <ThemeChangeButton />
      <Main />
    </div>
  )
}

export default App
