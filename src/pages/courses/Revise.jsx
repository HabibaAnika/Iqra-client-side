import { useLanguage } from "../../providers/LanguageProvider";

function Revise() {
    const {language} = useLanguage();
  return (
    <div className="mt-40 mb-32">
      <div className="max-w-sm mx-auto bg-[#dfe4ea] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[676px] transform transition-transform duration-300 hover:scale-105">
        <a href="#">
          <img className="rounded-t-lg h-[376px] w-96" src="https://i.ibb.co.com/zsY2zwj/1733902566276-png-image.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {language === "en" ? "Hifz Revise Course" : "হিফয সংশোধনী কোর্স"}
            </h5>
          </a>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            {language === "en"
              ? "Rediscover and strengthen your memorization of the Holy Quran with our Revise Hifz Course. Specifically designed for those who have completed Hifz but need guidance in recalling forgotten portions, this course focuses on revision techniques."
              : "যারা হিফজ সম্পন্ন করার পর কোরআনের কিছু অংশ ভুলে গেছেন তাদের জন্য আমাদের রিভিশন হিফজ কোর্সটি আপনার মুখস্থ পুনরুদ্ধার এবং শক্তিশালী করার জন্য ডিজাইন করা হয়েছে। "}
          </p>

          <div className="flex items-center gap-4">
            <p className="text-xs">{language === "en" ? "Price: 1499 (Per Month)" : "মূল্য: ১৪৯৯ (মাসিক)"}</p> 

            <p className="text-xs">
              {language === "en" ? "Seats Available: 5 (Per Batch)" : "আসন সংখ্যা: ৫ (প্রতি ব্যাচে)"}
            </p>
          </div>
          <p className="text-xs mt-1 mb-2">{language === "en" ? "Duration: 1/2 Year (6 days in week)" : "সময়কাল : ১/২ বছর (সপ্তাহে ৬ দিন)"}</p>

          <a
            href="/reviseD"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {language === "en" ? "More Details" : "আরও বিস্তারিত"}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Revise;
