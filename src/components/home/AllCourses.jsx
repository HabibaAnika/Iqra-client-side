import { useLanguage } from "../../providers/LanguageProvider";

function AllCourses() {
  const { language } = useLanguage();
  const courses = [
    // বেসিক কোরআন
    {
      courseName: "Basic Quran Course",
      description: {
        english:
          "Start your journey of understanding the Quran with this foundational course. Learn the Arabic alphabet, proper pronunciation, and basic rules of Quranic recitation in an engaging and interactive environment.",
        bangla:
          "কোরআন বোঝার যাত্রা শুরু করুন এই ভিত্তিমূলক কোর্স দিয়ে। আরবি বর্ণমালা, সঠিক উচ্চারণ এবং কোরআনের তিলাওয়াতের মৌলিক নিয়ম শিখুন।",
      },
      price: {
        en: "999 Tk",
        bn: "৯৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "3/4 Months (6 Days a Week)",
        bangla: "৩/৪ মাস (সপ্তাহে ৬ দিন)",
      },
      link: "/basicD"
    },
    // নাযেরা কোর্স
    {
      courseName: "Advance Quran Course (Nazera)",
      description: {
        english:
          "Master the art of reading the Quran fluently and accurately. This course focuses on enhancing tajweed skills and achieving proficiency in Quranic recitation.",
        bangla:
          "কোরআন স্পষ্ট এবং সঠিকভাবে পড়ার দক্ষতা অর্জন করুন। এই কোর্সটি তাজবীদের দক্ষতা বাড়াতে এবং তিলাওয়াতের পারদর্শিতা অর্জনে মনোযোগী।",
      },
      price: {
        en: "999 Tk",
        bn: "৯৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "1 Year (6 Days a Week)",
        bangla: "১ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/advanceD"
    },
    // আমপারা কোর্স
    {
      courseName: "30th Part Memorizing Course (Ampara Hifz)",
      description: {
        english:
          "Begin your Quran memorization journey with Juz Amma, the 30th part of the Quran. This course is ideal for beginners focusing on short surahs.",
        bangla:
          "কোরআনের ৩০তম পারা দিয়ে আপনার মুখস্থ যাত্রা শুরু করুন। এই কোর্সটি ছোট সূরার উপর ফোকাস করা, যেটি নবাগতদের জন্য উপযুক্ত।",
      },
      price: {
        en: "999 Tk",
        bn: "৯৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "5/6 Months (6 Days a Week)",
        bangla: "৫/৬ মাস (সপ্তাহে ৬ দিন)",
      },
      link: "/amparaD"
    },
    // হিফয কোর্স
    {
      courseName: "Memorizing Al Quran (Hifz)",
      description: {
        english:
          "Designed for students aiming to become Hafiz, this comprehensive course guides you step-by-step in memorizing the entire Quran with revision and tajweed techniques.",
        bangla:
          "যারা হাফিজ হতে চান তাদের জন্য এই পূর্ণাঙ্গ কোর্সটি কোরআন মুখস্থ করতে এবং তাজবীদের কৌশল শিখতে ধাপে ধাপে গাইড করবে।",
      },
      price: {
        en: "1499 Tk",
        bn: "১৪৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "3/4 Years (6 Days a Week)",
        bangla: "৩/৪ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/hifzD"
    },
    // হিফয রিভাইস
    {
      courseName: "Hifz Revise Course",
      description: {
        english:
          "Rediscover and strengthen your memorization of the Holy Quran with our Revise Hifz Course. Specifically designed for those who have completed Hifz but need guidance in recalling forgotten portions, this course focuses on revision techniques.",
        bangla:
          "যারা হিফজ সম্পন্ন করার পর কোরআনের কিছু অংশ ভুলে গেছেন তাদের জন্য এই রিভিশন কোর্স মুখস্থ পুনরুদ্ধার এবং শক্তিশালী করার জন্য উপযুক্ত।",
      },
      price: {
        en: "1499 Tk",
        bn: "১৪৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "1/2 Years (6 Days a Week)",
        bangla: "১/২ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/reviseD"
    },
    // ফজিলতের সূরা হিফয
    {
      courseName: "Special Hifz Course",
      description: {
        english:
          "Focused on memorizing specific Surahs of virtue (Fazilat Surahs) from the Quran, this course caters to students seeking spiritual and practical excellence in Quranic memorization.",
        bangla:
          "কোরআনের বিশেষ ফজিলতপূর্ণ সুরাসমূহ হিফজের উপর ভিত্তি করে এই কোর্সটি শিক্ষার্থীদের আত্মিক এবং ব্যবহারিক দক্ষতা বৃদ্ধিতে সহায়তা করে।",
      },
      price: {
        en: "999 Tk",
        bn: "৯৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "3/4 Years (6 Days a Week)",
        bangla: "৩/৪ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/specialD"
    },
    // আলিম কোর্স
    {
      courseName: "Alim Course",
      description: {
        english:
          "Gain deep knowledge of Islamic sciences, Hadith, Fiqh, and Quran Tafseer in this advanced course. Ideal for those aspiring to become Islamic scholars.",
        bangla:
          "ইসলামী বিজ্ঞান, হাদিস, ফিকহ এবং কোরআন তাফসীর সম্পর্কে গভীর জ্ঞান অর্জন করুন। যারা ইসলামী পণ্ডিত হতে চান তাদের জন্য উপযুক্ত।",
      },
      price: {
        en: "1499 Tk",
        bn: "১৪৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "3/4 Years (6 Days a Week)",
        bangla: "৩/৪ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/alimD"
    },
    // ফরজে আইন
    {
      courseName: "Need for Ummah Course",
      description: {
        english:
          "Focused on the essentials of Islamic living, this course teaches values, ethics, and foundational knowledge needed to contribute meaningfully to the Ummah.",
        bangla:
          "ইসলামী জীবনের মৌলিক বিষয়গুলোর উপর ভিত্তি করে এই কোর্সটি মূল্যবোধ, নীতি এবং উম্মাহতে অর্থপূর্ণ অবদান রাখার জন্য প্রয়োজনীয় জ্ঞান শেখায়।",
      },
      price: {
        en: "1199 Tk",
        bn: "১১৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "1/2 Year (6 Days a Week)",
        bangla: "১/২ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/needD"
    },
  ];

  return (
    <div className="container mx-auto mt-40">
      <h2 className="font-bold text-2xl text-center">{language === "en" ? "All Courses" : "সকল কোর্স"}</h2>
      <div className="grid lg:grid-cols-4 gap-10 my-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="max-w-sm bg-[#dfe4ea] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto h-[676px] transform transition-transform duration-300 hover:scale-105"
          >
            <a href="">
              <img className="rounded-t-lg" src="https://i.ibb.co.com/RQL09mN/6.jpg" alt={course.courseName} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {language === "en"
                    ? course.courseName
                    : course.courseName === "Basic Quran Course"
                    ? "প্রাথমিক কোরআন শিক্ষা কোর্স"
                    : course.courseName === "Advance Quran Course (Nazera)"
                    ? "উচ্চতর কোরআন কোর্স (নাযেরা)"
                    : course.courseName === "30th Part Memorizing Course (Ampara Hifz)"
                    ? "৩০তম পারা মুখস্থ করার কোর্স (আমপারা হিফজ)"
                    : course.courseName === "Memorizing Al Quran (Hifz)"
                    ? "মুখস্থ কোরআন কোর্স (হিফজ)"
                    : course.courseName === "Hifz Revise Course"
                    ? "হিফজ পুনরুদ্ধার কোর্স"
                    : course.courseName === "Special Hifz Course"
                    ? "ফজিলতের সুরাসমুহ হিফয কোর্স"
                    : course.courseName === "Alim Course"
                    ? "আলিম কোর্স"
                    : course.courseName === "Need for Ummah Course"
                    ? "ফরজে আইন কোর্স"
                    : course.courseName}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {language === "en" ? course.description.english : course.description.bangla}
              </p>
              <div className="flex items-center gap-4">
                <p className="text-xs">
                  {language === "en" ? `Price: ${course.price.en} (Per Month)` : `মূল্য: ${course.price.bn} (মাসিক)`}
                </p>
                <p className="text-xs">
                  {language === "en"
                    ? `Seats Available: ${course.seats.en} (Per Batch)`
                    : `আসন সংখ্যা: ${course.seats.bn} (প্রতি ব্যাচে)`}
                </p>
              </div>
              <p className="text-xs mt-2 mb-4">
                {language === "en" ? `Duration: ${course.duration.english}` : `সময়কাল: ${course.duration.bangla}`}
              </p>
              <a
                href={course.link}
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
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
