import { useLanguage } from "../../providers/LanguageProvider";

function BasicDetails() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen w-full overflow-y-auto pb-20">
      {/* Image Container */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/1.jpg')" }}></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-800 bg-opacity-40"></div>

      {/* content area */}
      <div className="relative z-10 container mx-auto mt-40">

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {language === "en" ? "Basic Quran Course Details" : "প্রাথমিক কোরআন কোর্সের বিস্তারিত"}
        </h1>

        <p className="bg-[#2184b3d3] w-auto p-4 rounded-sm text-sm mb-4">
          {language === "en"
            ? "Start your journey into understanding the Quran with the Basic Quran Course. This comprehensive foundational course is tailored to beginners and focuses on the basics of Quranic reading and recitation. Whether you are new to Quran learning or need to strengthen your basics, this course offers a structured and engaging approach.It is a shame to not be able to read the Quran despite being a Muslim. By taking this Quran learning course, anyone can learn to read the Quran correctly and accurately very quickly, Insha'Allah."
            : "প্রাথমিক কোরআন কোর্সের মাধ্যমে কোরআন বোঝার যাত্রা শুরু করুন। এই বিস্তৃত ভিত্তিমূলক কোর্সটি নতুনদের জন্য বিশেষভাবে ডিজাইন করা হয়েছে এবং এটি কোরআন পাঠ এবং তিলাওয়াতের মৌলিক বিষয়ে ফোকাস করে। আপনি যদি নতুন হন বা আপনার মৌলিক বিষয়গুলি শক্তিশালী করতে চান তবে এই কোর্সটি একটি সংগঠিত এবং আকর্ষণীয় পদ্ধতি সরবরাহ করে। মুসলিম হওয়া সত্ত্বেও কোরআন পড়তে না পারা খুবই লজ্জার। কোরআন শিখার এই কোর্সটি করে যেকেউ খুব দ্রুত কোরআন সহীহ ও শুদ্ধভাবে পড়া শিখতে পারবেন,ইনশাআল্লাহ ।"}
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>
        <ul className="list-disc pl-6 text-sm bg-[#2184b3d3] w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>Arabic alphabet and their pronunciation.</li>
              <li>Basic rules of Quranic recitation (Tajweed).</li>
              <li>Proper pronunciation and ampara.</li>
              <li>Daily Quran reading practice.</li>
              <li>Memorization of small surahs and duas.</li>
            </>
          ) : (
            <>
              <li>আরবি বর্ণমালা এবং তাদের উচ্চারণ।</li>
              <li>কোরআন তিলাওয়াতের মৌলিক নিয়ম (তাজবীদ)।</li>
              <li>সঠিক উচ্চারণ এবং আমপারা।</li>
              <li>দৈনিক কোরআন পড়ার অনুশীলন।</li>
              <li>ছোট সুরা এবং দোয়া মুখস্থ করা।</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="text-sm mb-4 bg-[#2184b3d3] p-4 rounded-sm">
          {language === "en"
            ? "This course is conducted over 3-4 months, with 6 classes per week. Students will be taught in small batches of 5 to ensure personalized attention and guidance. The course fee is 999 per month."
            : "এই কোর্সটি ৩-৪ মাস ধরে পরিচালিত হয়, সপ্তাহে ৬টি ক্লাস। শিক্ষার্থীদের ব্যক্তিগত মনোযোগ এবং দিকনির্দেশনা নিশ্চিত করতে ৫ জনের ছোট ব্যাচে পাঠ দেওয়া হয়। কোর্স ফি প্রতি মাসে ৯৯৯। "}
          <p>
            {language === "bn" ? (
              <>
                কোর্সের সময়সীমা: ৩/৪ মাস মেয়াদী কোর্স
                <br />
                ক্লাসের সময়: সপ্তাহে ৬ দিন
                <br />
                পুরুষ/মহিলা ও ছোট বাচ্চা সবার জন্য আলাদা ব্যাচ আছে। <br />
                মহিলা শিক্ষার্থীদের ক্লাস মহিলা শিক্ষিকা নিবেন। <br />
                এছাড়াও হোয়াটসঅ্যাপ এর মাধ্যমে সার্বক্ষণিক সহযোগিতা প্রদান করা। <br />
                ঘরে বসেই প্রশিক্ষণপ্রাপ্ত অভিজ্ঞ উস্তাজ, হাফিজ ক্বারী এবং আলেমদের দ্বারা অনলাইনে কুরআন তাজবীদ শিখুন।{" "}
                <br />
                ক্লাসের মাধ্যম: জুম, মিট, হোয়াটসঅ্যাপ ,স্কাইপি লাইভ ক্লাস। (রেকর্ড ক্লাস দেয়া হয়)<br />
                ডেমো ক্লাস করার পর আপনি ভর্তি হতে পারবেন <br />
                সীমিত কোটায় ভর্তি চলছে।
              </>
            ) : (
              <>
                Course Duration: 3/4 month course <br />
                Class Schedule: 6 days a week <br />
                There are separate batches for men/women and children. <br />
                Class of female students will be taken by female teacher. <br />
                Also providing round the clock support through WhatsApp. <br />
                Learn Quran Tajweed online by trained experienced Ustaz, Hafiz Qari and Scholars from home. <br />
                Class Medium: Zoom , Google Meet, WhatsApp, Skype Live Class. (Recorded video is provided){" "}
                <br />
                After demo class you can get admission <br />
              </>
            )}
          </p>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="/basic"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {language === "en" ? "Back to Courses" : "কোর্সে ফিরে যান"}
          </a>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {language === "en" ? "Home" : "হোম"}
          </a>
        </div>

        <div className="flex lg:flex-row flex-col items-center gap-4 mt-4">
          <a
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            target="_blank"
            href="https://forms.gle/axmVRr88k5hnSJmd8"
          >
            {language === "en" ? "Click Here for Admission Form" : "ভর্তি ফর্ম পেতে এখানে ক্লিক করুন"}
          </a>
          <a
            href="https://wa.me/message/RCTHVDUIYROZB1"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {language === "bn"
              ? "ভর্তির বিষয়ে যে কোন তথ্য জানতে এখানে ক্লিক করুন"
              : "Click here for any information regarding admission"}
          </a>
        </div>

      </div>
    </div>
  );
}

export default BasicDetails;
