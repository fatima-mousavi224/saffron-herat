import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-grey-100 h-113.75">
      <div className="flex gap-15 py-16 px-26.5">
        <div className="text-right">
          <p className="font-bold text-[42px] text-text-color-1 pb-6">در باره ما</p>
          <p className="text-base font-normal text-text-2 pb-4">
            ما تیمی از افراد باتجربه و دقیق هستیم که با عشق به کیفیت و جزئیات،
            درمسیر تولید محصولی اصیل و ارزشمند فعالیت می‌کنیم
          </p>
          <p className="text-text-2 text-base font-medium pb-4">
            تمام مراحل کار، از انتخاب اولیه تا آماده‌سازی نهایی، با وسواس و
            استانداردهای بالا انجام می‌شود تا نتیجه‌ای خالص و قابل اعتماد به دست
            برسد.
          </p>
          <p className="text-text-2">
            برای ما، این کار فقط یک تولید ساده نیست؛ بلکه ترکیبی از تجربه، دقت و
            احترام به طبیعت و کیفیت است. هدف ما ارائه محصولی است که در هر بار
            استفاده، حس اصالت و تفاوت را منتقل کند
          </p>
        </div>
        <div className="w-2xl h-auto">
          <Image
            src="/image/about-image.png"
            alt="about page image"
            width={5000}
            height={5000}
            className="object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
