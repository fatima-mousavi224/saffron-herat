import Image from "next/image";
import { Star, ArrowLeft } from "lucide-react";
import { PRODUCTS } from "@/constants/navigation";

const Categories = () => {
  return (
    <section className="md:py-20 py-10" dir="rtl" id="products">
      <div className="flex justify-between items-center md:mb-8 mb-4">
        <div className="flex items-center gap-3">
          <Image
            src="/image/second-logo.svg"
            width={40}
            height={40}
            alt="second logo"
          />
          <h2 className="md:text-2xl text-lg font-bold text-text-1">محصولات</h2>
        </div>

        <button className="flex items-center gap-2 text-text-2 border border-grey-50 px-4 py-2 rounded-xl hover:bg-grey-100 transition-all text-sm">
          مشاهده همه محصولات
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:gap-3 gap-5">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="bg-grey-100 rounded-lg p-3 border border-grey-50 flex flex-col relative hover:shadow-md"
          >
            <span className="absolute z-40 top-3 left-4 text-primary-red text-[11px] font-medium">
              تخفیف {product.discount}
            </span>

            <div className="w-full md:h-42 h-50 relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="w-full mt-2">
              <h3 className="text-xs font-bold text-text-1 mb-1">
                {product.title}
              </h3>

              <div className="flex items-center gap-1 mb-1">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-[9px] text-text-2">
                  ({product.reviews})
                </span>
              </div>

              <p className="text-[9px] text-text-2 mb-1">{product.weight}</p>

              <p className="font-medium text-xs text-text-1">
                {product.price} افغانی
              </p>

              <button className="mt-1 w-full py-1.5 text-primary-red rounded-md bg-white text-xs">
                ثبت سفارش
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
