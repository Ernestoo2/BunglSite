import { useState } from "react";
import { NavigationScreen } from "../08_Product_Detail/NavigationWrapper/NavigationWrapper";
import Hamburger from "../ui/Hamburger";
import Navbar from "./Navbar";
import Promo from "./Promo";

function SecondPage() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <Hamburger isOpen={isOpen} handleOpen={handleOpen} />
      <div className="grid  grid-rows-[201px_520px_1040px] pry-padding min-h-screen gap-y-10">
        <Navbar handleOpen={handleOpen} />
        <Promo />

        <div className="bg-green-500">hello world</div>
      </div>
    </>
  );
}

export default SecondPage;
