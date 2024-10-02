import "./App.css";
import ElementProductDetail from "./08_Product_Detail/ElementProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecondPage from "./secondPage/SecondPage";
import ElementShoppingCard from "./ShoppingCard/ShoppingCard";
import { MainHomepage } from "./Main_Homepage/MainHomepage";

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<MainHomepage />} />
          {/* <Route path="/" index element={<ElementShoppingCard />} /> */}
          <Route path="/product" element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;