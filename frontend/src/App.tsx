import { Route, Routes } from "react-router";
import "./App.css";
import Shop from "./pages/shop/shop";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
    return (
        <>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Shop />} />
                </Routes>
            </main>
            {/* <Footer /> */}
        </>
    );
}

export default App;
