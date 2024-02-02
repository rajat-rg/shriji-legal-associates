import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import ServiceDetail from "./pages/ServiceDetail";
import UsefulLinks from "./pages/UsefulLinks";
import PhotoGallery from "./pages/PhotoGallery";
import ClientQuery from "./pages/ClientQuery";
import OurTeam from "./pages/OurTeam";
import TeamMember from "./components/TeamMember";
import Disclaimer from "./components/Disclaimer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Disclaimer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/services/:id' element={<ServiceDetail/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/usefulLinks' element={<UsefulLinks/>} />
        <Route path='/photoGallery' element={<PhotoGallery/>} />
        <Route path='/clientQuery' element={<ClientQuery/>} />
        <Route path='ourTeam' element={<OurTeam/>} >
          <Route path=':id' element={<TeamMember/>} />
          </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
