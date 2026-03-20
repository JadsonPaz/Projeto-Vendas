import Navbar from "./components/navbar/navbar.jsx"
import Footer from "./components/footer/footer.jsx"
import { Outlet } from "react-router-dom"

export default function App() {
    return(
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
