
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative w-full h-125 flex items-center overflow-hidden mt-4"
      dir="rtl"
      id="home"
    >
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div
          className="w-full h-full bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/heroBackgroun.png')",
            backgroundSize: "100% 100%",
          }}
        />
      </div>
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-no-repeat bg-center hidden lg:block"
          style={{
            backgroundImage: "url('/heroBackgroun.png')",
            backgroundSize: "100% 100%",
          }}
        />
        <div
          className="w-full h-full bg-no-repeat bg-center block lg:hidden"
          style={{
            backgroundImage: "url('/smallBackground.png')",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row justify-between w-full lg:items-center">
          <div className=" flex flex-col lg:pr-9 lg:w-1/2">
            <h1 className="md:text-4xl text-6xl text-primary-red md:text-[80px] font-extrabold mb-6 leading-tight">
              زعفران
            </h1>
            <p className="text-sm md:text-[19px] font-medium text-text-1 mb-2">
              طلایی که از دل طبیعت با دقت و ظرافت بی‌نظیر انتخاب شده است
            </p>
            <p className="text-text-2 text-sm lg:text-base/7 font-normal">
              هر رشته با وسواس و استانداردهای بالا دستچین می‌شود تا تجربه‌ای از
              خلوص، عطر ماندگار و کیفیتی بی‌رقیب را در هر لحظه برای شما به
              ارمغان بیاورد
            </p>
            <button className="text-base mt-8 text-center py-2 font-medium bg-[#931314] w-40 text-white rounded-lg hover:bg-[#7a1011] shadow-xl ">
              مشاوره و خرید
            </button>
          </div>

          <div className=" flex items-center absolute lg:-left-25 -left-20 -bottom-30 ">
            <Image
              src="/econd.png"
              alt="زعفران هرات"
              width={700}
              height={700}
              className="object-contain hidden lg:block"
            />
            <Image
              src="/econd.png"
              alt="زعفران هرات"
              width={300}
              height={300}
              className="object-contain block lg:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
