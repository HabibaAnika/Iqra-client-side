import { useLanguage } from "../../providers/LanguageProvider";

function AlimDetails() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen w-full overflow-y-auto pb-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/8.jpg')" }} // Replace with the correct image path
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#148d6573] bg-opacity-40"></div>

      {/* Content Area */}
      <div className="relative z-10 container mx-auto mt-40">
        <h1 className="text-3xl font-bold mb-6">
          {language === "en" ? "Alim Course Details" : "আলিম কোর্সের বিস্তারিত"}
        </h1>

        <p className="bg-[#bbe0e459] w-auto p-4 rounded-sm text-sm mb-4">
          {language === "en"
            ? "The Alim Course is a comprehensive Islamic studies program designed to produce scholars with in-depth knowledge of the Quran, Hadith, Fiqh, Tafseer, and Islamic history. This course is ideal for students who aspire to gain a deeper understanding of Islam and serve their communities as knowledgeable scholars."
            : "আলিম কোর্সটি একটি বিস্তৃত ইসলামিক শিক্ষা প্রোগ্রাম যা শিক্ষার্থীদের কোরআন, হাদিস, ফিকহ, তাফসীর এবং ইসলামী ইতিহাস সম্পর্কে গভীর জ্ঞান অর্জনে সহায়তা করে। এই কোর্সটি তাদের জন্য আদর্শ যারা ইসলামের গভীর জ্ঞান অর্জন করে সমাজে বিজ্ঞ আলেম হিসেবে ভূমিকা রাখতে চান।"}
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>
        <ul className="list-disc pl-6 text-sm bg-[#bbe0e459] w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>Advanced Quranic studies, Tafseer, and Tajweed.</li>
              <li>Comprehensive study of Hadith (Bukhari, Muslim, etc.).</li>
              <li>Principles of Islamic jurisprudence (Fiqh).</li>
              <li>Islamic history and the lives of Prophets.</li>
              <li>Arabic grammar, vocabulary, and literature.</li>
              <li>Practical training for leadership in communities.</li>
            </>
          ) : (
            <>
              <li>উন্নত কোরআন শিক্ষা, তাফসীর ও তাজবীদ।</li>
              <li>হাদিসের বিস্তৃত অধ্যয়ন (বুখারি, মুসলিম ইত্যাদি)।</li>
              <li>ইসলামী শরিয়তের মূলনীতি (ফিকহ)।</li>
              <li>ইসলামের ইতিহাস এবং নবীদের জীবন।</li>
              <li>আরবি ব্যাকরণ, শব্দভাণ্ডার ও সাহিত্য।</li>
              <li>কমিউনিটিতে নেতৃত্ব প্রদানের বাস্তব প্রশিক্ষণ।</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="text-sm mb-4 bg-[#bbe0e459] p-4 rounded-sm">
          {language === "en"
            ? "The Alim Course spans 5-6 years, divided into multiple levels. Classes are conducted 6 days a week by qualified scholars, ensuring a detailed and structured learning experience. Online and on-campus options are available."
            : "আলিম কোর্সটি ৫-৬ বছরের একটি প্রোগ্রাম, যা বিভিন্ন স্তরে বিভক্ত। এই কোর্সটি ৬ দিন ক্লাসের মাধ্যমে দক্ষ আলেমদের দ্বারা পরিচালিত হয়, যা একটি বিস্তারিত এবং সুসংগঠিত শিক্ষার অভিজ্ঞতা নিশ্চিত করে। অনলাইন এবং অন-ক্যাম্পাস উভয় বিকল্পই উপলব্ধ।"}
        </p>
        <p className="text-sm bg-[#bbe0e459] p-4 rounded-sm">
          {language === "bn" ? (
            <>
              কোর্সের সময়সীমা: ৫-৬ বছর <br />
              ক্লাসের সময়: সপ্তাহে ৬ দিন <br />
              শিক্ষার মাধ্যম: অনলাইন , জুম বা মিট বা হোয়াটস অ্যাপ<br />
              ক্লাস পরিচালনায়: দক্ষ আলেম এবং ক্বারী <br />
              সেশন শুরু: জানুয়ারি ২০২৫ <br /> 
              ভর্তির শেষ তারিখ: ডিসেম্বর ৩১, ২০২৪
            </>
          ) : (
            <>
              Duration: 5-6 years <br />
              Class Schedule: 6 days a week <br />
              Mode of Learning: Online by Zoom or Meet or Whatsapp<br />
              Conducted by: Qualified Scholars and Qaris <br />
              Session Start: January 2025 <br />
              Last Date of Admission: December 31, 2024
            </>
          )}
        </p>

        <div className="flex items-center gap-4 mt-5">
          <a
            href="/alim"
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

export default AlimDetails;
