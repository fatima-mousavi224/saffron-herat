import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-grey-100" id="about">
      <div className="flex flex-col lg:flex-row lg:gap-15 gap-4 lg:py-16 py-8 lg:px-26.5 px-8">
        <div className="text-right">
          <p className="font-bold text-[42px] text-text-color-1 pb-6">در باره ما</p>
          <p className="text-[15px]/7 font-normal text-text-2 md:pb-3 pb-2">
            ما تیمی از افراد باتجربه و دقیق هستیم که با عشق به کیفیت و جزئیات،
            درمسیر تولید محصولی اصیل و ارزشمند فعالیت می‌کنیم
          </p>
          <p className="text-text-2 text-[15px]/7 font-medium md:pb-3 pb-2">
            تمام مراحل کار، از انتخاب اولیه تا آماده‌سازی نهایی، با وسواس و
            استانداردهای بالا انجام می‌شود تا نتیجه‌ای خالص و قابل اعتماد به دست
            برسد.
          </p>
          <p className="text-text-2 text-[15px]/7 font-normal">
            برای ما، این کار فقط یک تولید ساده نیست؛ بلکه ترکیبی از تجربه، دقت و
            احترام به طبیعت و کیفیت است. هدف ما ارائه محصولی است که در هر بار
            استفاده، حس اصالت و تفاوت را منتقل کند
          </p>
        </div>
        <div className="lg:w-xl h-auto">
          <Image
            src="/image/about-image.png"
            alt="about page image"
            width={5000}
            height={5000}
            className="object-contain w-full hidden lg:block"
          />
          <Image
            src="/image/about-image.png"
            alt="about page image"
            width={100}
            height={100}
            className="object-contain w-full block lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
