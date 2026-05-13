import Image from "next/image";
import React from "react";

const GiftBanner = () => {
  return (
    <div className="pb-12 md:pb-0 flex flex-col md:flex-row justify-between gap-2 md:gap-18 items-center">

      <div className="md:w-2/4 w-full h-auto">
        <Image src='/giftphoto.png' alt="gift photo" width={1000} height={1000} className="object-contain w-full"/>
      </div>

      <div className="md:w-1/2 w-full text-right">
        <p className="md:text-[32px] text-base font-bold text-primary-red">هدیه ای به رنگ عشق و اصالت</p>
        <p className="text-text-2 font-normal md:text-lg/8 text-sm/7 md:pt-8 pt-4">
          زعفران ما فقط ادویه ای گران بها نیست، بلکه تکه ای از فرهنگ، تاریخ و
          احساس افغانستان است. در پک های تحفه ای زعفران، هر جزئی با دقت طراحی
          شده تا گرما، رنگ عطر ناب هرات را به عزیزانتان هدیه دهد.این بسته ها
          مناسب آنهایی هست <span className="text-text-1 font-medium">که به دنبال هدیه ای خاص و متفاوت اندک هدیه ای که حرف
          نمیزند، اما حس میشود.</span>
        </p>

         <button className="md:text-base text-sm mt-10 text-center py-3 font-normal bg-[#931314] md:w-70 w-50 text-white rounded-lg hover:bg-[#7a1011] shadow-xl ">
             مشاهده محصولات تحفه ای
            </button>
      </div>
      
    </div>
  );
};

export default GiftBanner;
