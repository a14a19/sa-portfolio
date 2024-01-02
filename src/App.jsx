import { useEffect } from "react";
import ThemeChangeButton from "./components/ThemeChangeButton"
import Main from "./pages/Main"
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "./features/themes/themeSlice";

function App() {

  const { theme } = useSelector((store) => store.theme)
  const dispatch = useDispatch();
  const local = localStorage.getItem("theme");

  useEffect(() => {
    console.log(local);
    dispatch(changeTheme({ theme: local }))
  }, [])

  return (
    <div className={`${theme === 'black' ? 'bg-[#161616] text-[#ffffffde]' : 'bg-[#f4f4f4] text-black'}`}>
      <ThemeChangeButton />
      <Main />
    </div>
  )
}

export default App
