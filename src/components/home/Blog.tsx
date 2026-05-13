import { ARTICLES } from "@/constants/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-10 md:px-8 sm:px-6 px-4 py-13">
      <div className="flex  justify-between items-center mb-8">
        <button className="flex items-center gap-2 text-text-2 border border-grey-50 px-4 py-2 rounded-xl hover:bg-grey-100 transition-all text-sm">
          <ArrowLeft className="w-4 h-4" />
          مشاهده همه محصولات
        </button>

        <div className="flex items-center gap-3">
          <h2 className="md:text-2xl text-lg font-bold text-text-1">مقالات</h2>
          <Image
            src="/image/second-logo.svg"
            width={40}
            height={40}
            alt="second logo"
          />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg p-3 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative w-full aspect-16/10 overflow-hidden rounded-lg mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col grow text-right px-2">
                <h3 className="text-sm font-bold text-text-1 mb-2 line-clamp-1 group-hover:text-primary-red transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs/2 font-normal text-text-2 leading-6 mb-3 line-clamp-3">
                  {post.description}
                </p>

                <div className="mt-auto border-grey-50 flex items-center justify-between">
                    <ArrowLeft className="w-4 h-4 text-primary-red" />
                  <div className="flex items-center gap-2 text-grey-400">
                    <span className="text-[11px] text-text-2 font-medium">{post.date}</span>
                    <Calendar className="w-3 h-3" />
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Blog;
