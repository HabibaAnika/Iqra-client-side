
import { useLanguage } from "../../providers/LanguageProvider";

function AdvanceDetails() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen w-full overflow-y-auto pb-20">
      {/* Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/2.jpg')" }} // Replace with your image
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-800 bg-opacity-40"></div>

      {/* Content Area */}
      <div className="relative z-10 container mx-auto mt-40">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {language === "en" ? "Advanced Quran Course Details" : "উচ্চতর কোরআন কোর্সের বিস্তারিত"}
        </h1>

        <p className="bg-[#bbe0e459] w-auto p-4 rounded-sm text-sm mb-4">
          {language === "en"
            ? "The Advanced Quran Course is designed for those who already have a basic understanding of Quranic recitation. This course focuses on advanced Tajweed, recitation techniques, and memorization of selected Surahs. It is ideal for individuals who want to perfect their Quranic knowledge and recitation skills."
            : "উচ্চতর কোরআন কোর্সটি তাদের জন্য ডিজাইন করা হয়েছে যারা ইতিমধ্যে কোরআন তিলাওয়াতের মৌলিক জ্ঞান রাখেন। এই কোর্সটি উন্নত তাজবীদ, তিলাওয়াতের কৌশল এবং নির্বাচিত সূরাগুলো মুখস্থ করার উপর গুরুত্ব দেয়। এটি তাদের জন্য আদর্শ যারা তাদের কোরআন তিলাওয়াতের দক্ষতা উন্নত করতে চান।"}
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>
        <ul className="list-disc pl-6 text-sm bg-[#bbe0e459] w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>Advanced rules of Tajweed.</li>
              <li>Perfecting Quranic recitation (Qirat).</li>
              <li>Memorization of Juz Amma and selected Surahs.</li>
              <li>Correcting recitation mistakes.</li>
              <li>Understanding meanings of key Surahs and verses.</li>
            </>
          ) : (
            <>
              <li>উন্নত তাজবীদের নিয়ম।</li>
              <li>কোরআন তিলাওয়াতের দক্ষতা উন্নত করা (ক্বিরাত)।</li>
              <li>আমপারা এবং নির্বাচিত সূরা মুখস্থ করা।</li>
              <li>তিলাওয়াতের ভুল সংশোধন করা।</li>
              <li>গুরুত্বপূর্ণ সূরা এবং আয়াতের অর্থ বোঝা।</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="text-sm mb-4 bg-[#bbe0e459] p-4 rounded-sm">
          {language === "en"
            ? "This course runs for 6 months, with 5 classes per week. Students will get personalized guidance to perfect their recitation and Tajweed. The course fee is 1499 per month."
            : "এই কোর্সটি ৬ মাসের জন্য পরিচালিত হয়, সপ্তাহে ৫ দিন ক্লাস। শিক্ষার্থীদের তিলাওয়াত এবং তাজবীদ নিখুঁত করার জন্য ব্যক্তিগত দিকনির্দেশনা প্রদান করা হয়। কোর্স ফি প্রতি মাসে ১৪৯৯।"}
          <p>
            {language === "bn" ? (
              <>
                কোর্সের সময়সীমা: ৬ মাস <br />
                ক্লাসের সময়: সপ্তাহে ৫ দিন <br />
                উন্নত তাজবীদ এবং ক্বিরাত শেখানো হবে। <br />
                মহিলা শিক্ষার্থীদের জন্য আলাদা ব্যাচ। <br />
                দক্ষ শিক্ষক ও ক্বারীদের তত্ত্বাবধানে অনলাইন ক্লাস। <br />
                ক্লাসের মাধ্যম: Zoom, WhatsApp, Skype। <br />
                ভর্তির শেষ তারিখ: জানুয়ারি ১ তারিখ পর্যন্ত <br />
                ক্লাস শুরু: ২০২৫ ইং
              </>
            ) : (
              <>
                Course Duration: 6 months <br />
                Class Schedule: 5 days a week <br />
                Advanced Tajweed and Qirat training will be provided. <br />
                Separate batches for female students. <br />
                Online classes under the guidance of skilled teachers and Qaris. <br />
                Class Medium: Zoom, WhatsApp, Skype. <br />
                Last Date of Admission: Up to January 1st <br />
                Classes Start: 2025
              </>
            )}
          </p>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="/advanced"
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

export default AdvanceDetails;
