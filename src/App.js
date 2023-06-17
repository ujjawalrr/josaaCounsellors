import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Register from "./pages/register/Register";
import ContactUs from "./pages/contactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
