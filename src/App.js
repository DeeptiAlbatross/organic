import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutKnow from "./components/aboutKnow";
// import Product from "./components/product";
import Contact from "./components/contact";
import Features from "./components/features";
import NewArrival from "./components/newArrival";
import AddToCart from "./components/addToCart";
import Dashboard from "./components/dashboard";
import ItemDetail from "./components/itemDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutKnow/>} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/features" element={<Features />} /> */}
        {/* <Route path="/newarrival" element={<NewArrival />} /> */}
        <Route path="/item-details/:id" element={<ItemDetail/>} />
        <Route path="/add-to-cart" element={<AddToCart/>} />


        <Route path="/" element={<Dashboard />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
