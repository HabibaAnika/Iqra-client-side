import { useLanguage } from "../../providers/LanguageProvider";

function SpecialHifz() {
  const {language} = useLanguage();
  return (

    <div className="mt-40 mb-32">
      <div className="max-w-sm bg-[#dfe4ea] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[676px] mx-auto transform transition-transform duration-300 hover:scale-105">
        <a href="#">
          <img className="rounded-t-lg" src="https://i.ibb.co.com/RQL09mN/6.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {language === "en" ? "Special Surahs Memorization Course" : "ফযিলতের সূরা মুখস্থ কোর্স"}
            </h5>
          </a>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            {language === "en"
              ? "Memorize selected surahs with profound meanings, such as Surah Yaseen, Surah Rahman, and Surah Mulk. Learn with tajweed to recite with confidence." : "সূরা ইয়াসিন, সূরা রহমান এবং সূরা মুলকের মতো বিশেষ সূরা মুখস্থ করুন। তাজবীদ শিখে আত্মবিশ্বাসের সাথে তিলাওয়াত করুন।"} 
          </p> 

          <div className="flex items-center gap-4">
            <p className="text-xs">{language === "en" ? "Price: 1200 (Per Month)" : "মূল্য: ১২০০ (মাসিক)"}</p> 

            <p className="text-xs">
              {language === "en" ? "Seats Available: 5 (Per Batch)" : "আসন সংখ্যা: ৫ (প্রতি ব্যাচে)"}
            </p>
          </div>
          <p className="text-xs mt-2 mb-2">{language === "en" ? "Duration: 3/4 Month (6 days in week)" : "সময়কাল : ৫/৬ মাস (সপ্তাহে ৬ দিন)"}</p>

          <a
            href="/specialD"
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

export default SpecialHifz;
