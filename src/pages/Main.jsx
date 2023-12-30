import CardContainer from "../components/CardContainer"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Popup from "../components/shared/Popup"

function Main() {
    return (
        <main className="pt-8 max-w-[1140px] w-full mx-auto px-3">
            <Popup />
            <Header />
            <CardContainer />
            <Footer />
        </main>
    )
}

export default Main