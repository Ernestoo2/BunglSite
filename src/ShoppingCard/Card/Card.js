import React, { useState } from 'react';
import "./card.css";
import xbutton from "../Cardassets/regular-xcircle.svg"
import image from "../Cardassets/image.png";
import image1 from "../Cardassets/image-1.png";
import Minus from "../Cardassets/duotone-minus.svg";
import Plus from "../Cardassets/duotone-plus.svg"
import line25 from "../Cardassets/line-25.svg";
import Arrowleft from "../Cardassets/regular-arrowleft.svg"
const ShoppingCard = () => {
    const [quantity1, setQuantity1] = useState(1);
    const [quantity2, setQuantity2] = useState(3);

    const handleIncrement1 = () => {
        setQuantity1(quantity1 + 1);
    }
    const handleDecrement1 = () => {
        if (quantity1 > 1) {
            setQuantity1(quantity1 - 1);
        }
    }
    const handleIncrement2 = () => {
        setQuantity2(quantity2 + 1);
    }
    const handleDecrement2 = () => {
        if (quantity2 > 1) {
            setQuantity2(quantity2 - 1);
        }
    }
    return (
        <div className="mx-[100px] my-[100px] w-[1200px] bg-gray-00 rounded border border-solid border-[#0e8ce0]">
            <div className="px-[20px] py-5">
                <div className="mt-[10px] font-body-large-500">Shopping Card</div>
            </div>
            <table className="w-full">
                <thead className="bg-gray-50 border border-solid border-[#e4e7e9]">
                    <tr>
                        <th className="pl-[20px] pr-[100px] py-2.5 text-gray-700 sm:pl-[100px] sm:pr-[300px]">PRODUCTS</th>
                        <th className="pr-[20px] py-2.5 text-black sm:pr-[90px]">PRICE</th>
                        <th className="pr-[20px] py-2.5 text-gray-700 sm:pr-[50px]">QUANTITY</th>
                        <th className="pr-[20px] py-2.5 sm:pr-[50px]">SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-slate-100">
                        <td className="flex items-center gap-3 px-4 py-2.5 sm:px-6">
                            <img className="w-[30px] h-[30px] object-cover" src={xbutton} alt="Remove" />
                            <img className="w-[72px] h-[72px] object-cover" alt="Product" src={image} />
                            <span>4K UHD LED Smart TV with Chromecast Built-in</span>
                        </td>
                        <td className="px-4 py-2.5 sm:px-6">$90 $70</td>
                        <td className="px-4 py-2.5 flex justify-center items-center gap-3 sm:px-6">
                            <img className="w-6 h-6 cursor-pointer" src={Minus} alt="Minus" onClick={handleDecrement1} />
                            <span>{quantity1}</span>
                            <img className="w-6 h-6 cursor-pointer" src={Plus} alt="Plus" onClick={handleIncrement1} />
                        </td>
                        <td className="px-4 py-2.5 sm:px-6">$70</td>
                    </tr>
                    <tr className="bg-slate-100">
                        <td className="flex items-center gap-3 px-4 py-2.5 sm:px-6">
                            <img className="w-[30px] h-[30px] object-cover" src={xbutton} alt="Remove" />
                            <img className="w-[72px] h-[72px] object-cover" alt="Product" src={image1} />
                            <span>Wired Over-Ear Gaming Headphones with USB</span>
                        </td>
                        <td className="px-4 py-2.5 sm:px-6">$250</td>
                        <td className="px-4 py-2.5 flex justify-center items-center gap-3 sm:px-6">
                            <img className="w-6 h-6 cursor-pointer" src={Minus} alt="Minus" onClick={handleDecrement2} />
                            <span>{quantity2}</span>
                            <img className="w-6 h-6 cursor-pointer" src={Plus} alt="Plus" onClick={handleIncrement2} />
                        </td>
                        <td className="px-4 py-2.5 sm:px-6">$250</td>
                    </tr>
                </tbody>
            </table>
            <img src={line25} className='relative w=[872px] h-px object-cover ' />
            <div className='flex w-[872px] justify-between p-6 items-center'>
                <div className='inline-flex justify-center gap-2 px-6 py-0 rounded-sm border-2 border-solid border-[#00a218] items-center '>
                    <img className='w-5 h-5' src={Arrowleft} />
                    <div className=' font-heading-07 font-[number:var(--heading-07-font-weight)] text-[#00a218] text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] whitespace-nowrap [font-style:var(--heading-07-font-style)]'> RETURN TO SHOP</div>
                </div>
                <button className='all-[unset] box-border inline-flex justify-center gap-2 px-8 py-0 rounded-sm border-2 border-solid border-[#00a218] items-center relative flex-[0_0_auto] '>
                <div className="  font-heading-07 font-[number:var(--heading-07-font-weight)] text-[#00a218] text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] whitespace-nowrap [font-style:var(--heading-07-font-style)]">
                UPDATE CART
                </div>
                </button>
            </div>

        </div>

    );
};

export default ShoppingCard;