import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/constants/navigation";

const Categories = () => {
  return (
    <section className="md:py-31.25 py-20 container" id="categories">
      
      <div className="flex items-center justify-center md:gap-4 gap-2 md:mb-12 mb-6">
        <div className="h-[2.7px] flex-1 bg-linear-to-l from-primary-red via-primary-white to-primary-white"></div>
        <h2 className="text-base md:text-[24px] text-text-2 font-normal whitespace-nowrap pb-1.5">
          <span className="text-text-1 font-bold ml-1 text-base md:text-[24px]">
            دسته‌بندی
          </span>{" "}
          محصولات
        </h2>
        <div className="h-[2.7px] flex-1 bg-linear-to-r from-primary-red via-primary-white to-primary-white"></div>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-8">
  {PRODUCT_CATEGORIES.map((item) => (
    <Link
      key={item.id}
      href={item.href}
      className="flex flex-col items-center text-center"
    >
      
      <div className="relative w-full md:h-45 h-28">
      
        <div
          className="absolute inset-0 bg-center bg-cover opacity-100 rounded-lg"
          style={{ backgroundImage: "url('/backgrounCard.png')" }}
        />

       
        <div className="relative -top-1 md:-top-2 z-50 w-full h-full flex justify-center items-center md:right-10">
          <Image
            src={item.image}
            alt={item.title}
            width={220}
            height={200}
            className="object-contain scale-120 hidden md:block"
          />
          <Image
            src={item.image}
            alt={item.title}
            width={140}
            height={20}
            className="object-contain scale-120 block md:hidden"
          />
        </div>
      </div>

    
      <h3 className="mt-3 text-sm md:text-base font-semibold text-text-2">
        {item.title}
      </h3>
    </Link>
  ))}
</div>
    </section>
  );
};

export default Categories;
