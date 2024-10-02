function Promo() {
  return (
    <div className=" grid grid-rows-2 grid-cols-[1fr_2fr_1fr] gap-5">
      <div className="bg-black h-full  row-span-2"></div>

      {/* Xbox Promo Image */}
      <div className="  row-span-2">
        <img
          src="../../ImagesHome/promo.png"
          alt="xbox-promo"
          className="h-full"
        />
      </div>

      {/* Google pixel Promo Image*/}
      <div>
        <img
          src="../../ImagesHome/google-pixel.png"
          alt="google-pixel-promo"
          className="h-full"
        />
      </div>
      {/* Earpod Promo Image */}
      <div>
        <img
          src="../../ImagesHome/earpod.png"
          alt="earpod-promo"
          className="h-full"
        />
      </div>
    </div>
  );
}

export default Promo;
