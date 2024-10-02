import hamburger from "../08_Product_Detail/assets/Hamburger.svg";
import bunqle from "../08_Product_Detail/assets/bunq-white-1.png";

function Navbar({ handleOpen }) {
  return (
    <div className="flex justify-around items-center">
      <div onClick={handleOpen}>
        <img src={hamburger} alt="hamburger" />
      </div>
      <div>
        <img src={bunqle} alt="bunqle" />
      </div>
      <div>
        <input
          type="text "
          placeholder="Search for anything"
          className="p-5 focus:outline-none w-96 placeholder:text-primary-green border-2 border-primary-green rounded-lg"
        />
      </div>
      <div className="flex space-x-5">
        <span>
          <img src="../../ImagesHome/ShoppingCart.png" alt="shopping-cart" />
        </span>
        <span>
          <img src="../../ImagesHome/Heart-green.png" alt="heart-green" />
        </span>
        <span>
          <img src="../../ImagesHome/User.png" alt="user" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
