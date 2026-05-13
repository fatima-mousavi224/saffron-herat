// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="bg-[#F2F2F2] py-16 px-4 md:px-12" dir="rtl">
//       <div className="max-w-[1400px] mx-auto">
//         {/* استفاده از flex برای کنترل دقیق عرض هر ستون */}
//         <div className="flex flex-col lg:flex-row justify-between lg:gap-10 gap-4">
          
//           {/* ستون ۱: لوگو و متن (بزرگترین بخش - ۴۰٪ عرض) */}
//           <div className="w-full lg:w-[50%] flex flex-col items-start lg:ml-20">
//             <Image 
//               src="/image/fotterLogo.png" 
//               alt="زعفران هرات" 
//               width={160} 
//               height={60} 
//               className="object-contain"
//             />
//             <div className="text-[#555555] text-[15px] font-normal leading-8 text-justify">
//               <p className="">
//                 با افتخار، زعفران خالص و دست‌چین شده را از دل مزارع ممتاز به سفره‌های شما می‌رسانیم.
//               </p>
//               <p>
//                 اعتماد شما الهام‌بخش ما برای حفظ کیفیت، اصالت و عطر واقعی طلای سرخ است.
//               </p>
//             </div>
//             <div className="text-[#333333] text-[15px] font-bold">
//               تلفن پشتیبانی: <span dir="ltr" className="mr-1">+93-893 78 4567</span>
//             </div>
//           </div>

//           {/* ستون ۲: محصولات (۲۰٪ عرض) */}
//           <div className="w-full lg:w-[20%] flex flex-col md:gap-6 gap-2">
//             <h4 className="text-[18px] font-extrabold text-[#222222]">محصولات</h4>
//             <ul className="flex flex-col md:gap-4 gap-2 text-[#666666] text-[14px]">
//               <li><Link href="#">زعفران ممتاز</Link></li>
//               <li><Link href="#">درجه کلاسیک</Link></li>
//               <li><Link href="#">سری طلایی ویژه</Link></li>
//               <li><Link href="#">لذت روزمره</Link></li>
//             </ul>
//           </div>

//           {/* ستون ۳: خدمات مشتریان (۲۰٪ عرض) */}
//           <div className="w-full lg:w-[20%] flex flex-col md:gap-6 gap-2">
//             <h4 className="text-[18px] font-extrabold text-[#222222]">خدمات مشتریان</h4>
//             <ul className="flex flex-col md:gap-4 gap-2 text-[#666666] text-[14px]">
//               <li><Link href="#">شرایط و قوانین</Link></li>
//               <li><Link href="#">سوالات متداول</Link></li>
//             </ul>
//           </div>

//           {/* ستون ۴: میانبر (۲۰٪ عرض - سمت چپ ترین) */}
//           <div className="w-full lg:w-[20%] flex flex-col md:gap-6 gap-2">
//             <h4 className="text-[18px] font-extrabold text-[#222222]">میانبر</h4>
//             <ul className="flex flex-col md:gap-4 gap-2 text-[#666666] text-[14px]">
//               <li><Link href="#">صفحه اصلی</Link></li>
//               <li><Link href="#">درباره ما</Link></li>
//               <li><Link href="#">مقالات</Link></li>
//               <li><Link href="#">تماس با ما</Link></li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-10 md:py-16 px-6 md:px-12" dir="rtl" id='contact'>
      <div className="max-w-350 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 bg-grey-100 md:py-8 md:px-14 px-8 py-8">
          
          <div className="w-full lg:w-[45%] flex flex-col items-start text-right gap-4">
            <Image 
              src="/image/fotterLogo.png" 
              alt="زعفران هرات" 
              width={160} 
              height={60} 
              className="object-contain"
            />
            <div className="text-[#555555] text-[14px] md:text-[15px] leading-7 md:leading-7">
              <p>
                با افتخار، زعفران خالص و دست‌چین شده را از دل مزارع ممتاز به سفره‌های شما می‌رسانیم.
              </p>
              <p>
                اعتماد شما الهام‌بخش ما برای حفظ کیفیت، اصالت و عطر واقعی طلای سرخ است.
              </p>
            </div>
            <div className="text-[#333333] text-[15px] font-bold mt-2 lg:mt-0">
              تلفن پشتیبانی: <span dir="ltr" className="mr-1">+93-893 78 4567</span>
            </div>
          </div>

          <div className="w-full lg:w-[55%] grid grid-cols-3 lg:flex lg:flex-row justify-between gap-4 md:gap-8 mt-8 lg:mt-0">
            
            <div className="flex flex-col gap-4 text-right">
              <h4 className="text-[16px] md:text-[18px] font-extrabold text-[#222222]">محصولات</h4>
              <ul className="flex flex-col gap-2 text-[#666666] text-[13px] md:text-[14px]">
                <li><Link href="#" className="hover:text-red-700">زعفران ممتاز</Link></li>
                <li><Link href="#" className="hover:text-red-700">درجه کلاسیک</Link></li>
                <li><Link href="#" className="hover:text-red-700">سری طلایی ویژه</Link></li>
                <li><Link href="#" className="hover:text-red-700">لذت روزمره</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 text-right">
              <h4 className="text-[16px] md:text-[18px] font-extrabold text-[#222222]">خدمات مشتریان</h4>
              <ul className="flex flex-col gap-2 text-[#666666] text-[13px] md:text-[14px]">
                <li><Link href="#" className="hover:text-red-700">شرایط و قوانین</Link></li>
                <li><Link href="#" className="hover:text-red-700">سوالات متداول</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 text-right">
              <h4 className="text-[16px] md:text-[18px] font-extrabold text-[#222222]">میانبر</h4>
              <ul className="flex flex-col gap-2 text-[#666666] text-[13px] md:text-[14px]">
                <li><Link href="#" className="hover:text-red-700">صفحه اصلی</Link></li>
                <li><Link href="#" className="hover:text-red-700">درباره ما</Link></li>
                <li><Link href="#" className="hover:text-red-700">مقالات</Link></li>
                <li><Link href="#" className="hover:text-red-700">تماس با ما</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;