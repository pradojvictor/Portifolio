import { Routes as WrapperRoutes, Route, BrowserRouter }  from "react-router-dom"


import Home from "./pages/home";
import Allwork from "./pages/Allwork";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function Routes() {
    return (
        <BrowserRouter>
        <WrapperRoutes>
            <Route path="/" element={<Home/>}/>
            <Route path="/allwork" element={<Allwork/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </WrapperRoutes>
        </BrowserRouter>
    ) 


}