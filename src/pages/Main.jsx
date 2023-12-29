import CardContainer from "../components/CardContainer"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Main() {
    return (
        <main className="pt-8 w-[1140px] mx-auto">
            <Header />
            <CardContainer />
            <Footer />
        </main>
    )
}

export default Main