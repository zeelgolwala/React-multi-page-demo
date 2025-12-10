import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Travelpackages from "./pages/Travelpackages";
import Aboutus from "./pages/Aboutus";
import Gallery from "./pages/Gallery";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destinations" element={<Destinations/>}/>
          <Route path="travelpackages" element={<Travelpackages/>}/>
          <Route path="aboutus" element={<Aboutus/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="contact" element={<Contactus/>}/>
        </Routes>
        
       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
