

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Phone, Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/utils";

// وارد کردن اجزای shadcn
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-50">
      {/* --- ۱. Top Bar --- */}
      <div className="bg-bg-grey text-primary-white py-2 px-4 md:px-12 flex justify-between items-center text-[10px] md:text-xs">
        <span>ارسال رایگان برای سفارش‌های بالای ۲۰۰۰ افغانی</span>
        <span className="hidden md:inline">زعفران اصل هرات | تضمین کیفیت و اصالت</span>
      </div>

      {/* --- ۲. Middle Bar --- */}
      <div className="container mx-auto lg:px-10 md:px-8 sm:px-6 px-4 py-3 md:py-5 flex items-center justify-between">
        
        {/* موبایل: دکمه منو و جستجو */}
        <div className="flex md:hidden items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-7 h-7 text-text-1" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white">
              <SheetTitle className="text-right mb-4"></SheetTitle>
              <nav className="flex flex-col gap-4 mt-14 text-right pr-6">
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium pb-2">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="w-5 h-5 text-text-1" />
          </Button>
        </div>

        {/* دسکتاپ: تماس و زبان */}
        <div className="hidden md:flex items-center gap-6 ">
          <div className="flex items-center gap-3" dir="ltr">
            <div className="bg-grey-100 p-2 rounded-sm">
              <Phone className="w-5 h-5 text-primary-red" />
            </div>
            <div className="text-left">
              <p className="text-md font-medium text-text-1">+93 78 4567 893</p>
              <p className="text-[12px] font-normal text-text-2 text-right">پاسخگویی ۹ تا ۴</p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-5 border-grey-50 text-text-2">
                فارسی <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-3">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>پشتو</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* دسکتاپ: باکس جستجو */}
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <Input 
            className="rounded-md pr-10 p-4 border-grey-50 focus-visible:ring-primary-red" 
            placeholder="جستجو در محصولات..." 
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-grey-50" />
        </div>

        {/* لوگو (مشترک) */}
        <Link href="/">
          <Image 
            src="/image/logo.svg" 
            alt="زعفران هرات" 
            width={150} 
            height={50} 
            className="w-28 md:w-24"
            priority 
          />
        </Link>
      </div>

      {/* جستجوی موبایل (فقط وقتی فعال شود ظاهر می‌شود) */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white p-4 shadow-md md:hidden flex gap-2 animate-in slide-in-from-top">
          <Input autoFocus placeholder="جستجو کنید..." className="flex-1" />
          <Button size="icon" variant="ghost" onClick={() => setIsSearchOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* --- ۳. Navigation Bar (دسکتاپ) --- */}
      <nav className="hidden md:block py-3 bg-white">
        <div className="container mx-auto px-4 flex justify-end">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-sm font-normal text-text-2 hover:text-primary-red transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2 text-text-2 font-normal text-sm  pr-6 ">
               <ChevronDown className="w-5 h-5" />
               دسته بندی محصولات
          <Image src="/image/second-logo.svg" alt="secont image" width={28} height={28} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}