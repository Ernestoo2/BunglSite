import React, { Component } from 'react';
import line26 from "../Cardassets/Line 26.svg"
import ArrowRight from "../Cardassets/Regular_ArrowRight.svg"

class CardTotal extends Component {
    render() {
        return (
            <div className='inline-flex flex-col items-center justify-center mx-[100px] my-[100px] bg-gray-00 rounded border border-solid border-[#e4e7e9]'>
                <div className='inline-flex items-start gap-2.5 px-6 py-5 flex-[0_0_auto] ' >
                    <div className='relative w-[376px] font-body-large-500 font-[number:var(--body-large-500-font-weight)] text-gray-900 text-[length:var(--body-large-500-font-size)] tracking-[var(--body-large-500-letter-spacing)] leading-[var(--body-large-500-line-height)] [font-style:var(--body-large-500-font-style)' >
                        Card Totals
                    </div>
                </div>
                <div className='inline-flex flex-col items-start gap-4 pt-0 relative flex-[0_0_auto] ' >
                    <div className="relative inline-flex flex-col gap-3 px-0 pt-0 pb-1 " >
                        <div className="flex w-[376px] items-center justify-between ">
                            <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]" >
                                Sub-total
                            </div>
                            <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                                $320
                            </div>
                        </div>
                        <div className="flex w-[379px] items-center justify-between relative flex-[0_0_auto] " >
                            <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                                Shipping
                            </div>
                            <div>Free</div>
                        </div>
                        <div className='flex w-[376px] items-center justify-between relative flex-[0_0_auto]'>
                            <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                                Discount
                            </div>
                            <div>$24</div>
                        </div>
                        <div className="flex w-[376px] items-center justify-between relative flex-[0_0_auto]">
                            <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                                Tax
                            </div>
                            <div>
                                $61.99
                            </div>
                        </div>
                    </div>
                </div>
                <img className='relative w-[376px] h-[px] object-cover' src={line26} />
                <div className='flex w-[376px] items-center justify-between relative flex-[0_0_auto]' >
                    <div>Total</div>
                    <div>$357.99 USD</div>
                </div>
                <button className='all-[unset] box-border flex w-[376px] items-center justify-center gap-3  px-[32px] py-[0px]  relative flex-[0_0_auto] bg-[#00a218] rounded-[3px] '>
                    <div className="relative w-fit font-heading-06 font-[number:var(--heading-06-font-weight)] text-gray-00 text-[length:var(--heading-06-font-size)] tracking-[var(--heading-06-letter-spacing)] leading-[var(--heading-06-line-height)] whitespace-nowrap [font-style:var(--heading-06-font-style)]">
                        PROCEED TO CHECKOUT
                    </div>
                    <img className='relative w-6 h-6' src={ArrowRight} />
                </button>
            </div>
        );
    }
}

export default CardTotal;
