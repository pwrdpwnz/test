import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Development from "./components/main/development/Development";
import Industries from "./components/main/industries/Industries";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Services from "./components/main/services/Services";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Services/>} />
                    <Route path="/development" element={<Development/>}  />
                    <Route path="/indusries" element={<Industries/>} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
