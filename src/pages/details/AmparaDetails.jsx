import { useLanguage } from "../../providers/LanguageProvider";

function AmparaDetails() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen w-full overflow-y-auto pb-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/4.jpg')" }} // Replace with the correct image path
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-25"></div>

      {/* Content Area */}
      <div className="relative z-10 container mx-auto mt-40">
        <h1 className="text-3xl font-bold mb-6">
          {language === "en" ? "Ampara Course Details" : "আমপারা কোর্সের বিস্তারিত"}
        </h1>

        <p className="bg-[#bbe0e459] w-auto p-4 rounded-sm mb-4 text-sm">
          {language === "en"
            ? "The Ampara Course focuses on memorizing the 30th Juz of the Quran (Juz Amma). This course is designed for students who aim to memorize small Surahs and improve their recitation skills. The course emphasizes proper Tajweed and fluency in recitation."
            : "আমপারা কোর্সটি কোরআনের ৩০তম পারা (আমপারা) মুখস্থ করার উপর গুরুত্ব দেয়। এই কোর্সটি এমন শিক্ষার্থীদের জন্য ডিজাইন করা হয়েছে যারা ছোট সূরা মুখস্থ করতে এবং তিলাওয়াতের দক্ষতা উন্নত করতে চায়। এই কোর্সে সঠিক তাজবীদ এবং সাবলীল তিলাওয়াতের উপর বিশেষ জোর দেওয়া হয়।"}
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>
        <ul className="list-disc pl-6 text-sm bg-[#bbe0e459] w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>Memorization of the entire Juz Amma (30th Juz).</li>
              <li>Correct Tajweed rules and pronunciation.</li>
              <li>Daily recitation practice for fluency.</li>
              <li>Understanding the meanings of small Surahs.</li>
              <li>Strengthening overall Quran memorization skills.</li>
            </>
          ) : (
            <>
              <li>পুরো আমপারা (৩০তম পারা) মুখস্থ করা।</li>
              <li>সঠিক তাজবীদ এবং উচ্চারণ শেখানো।</li>
              <li>সাবলীল তিলাওয়াতের জন্য দৈনিক অনুশীলন।</li>
              <li>ছোট সূরার অর্থ বোঝার অনুশীলন।</li>
              <li>সম্পূর্ণ কোরআন মুখস্থ করার দক্ষতা উন্নত করা।</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="mb-4 bg-[#bbe0e459] p-4 rounded-sm text-sm">
          {language === "en"
            ? "This course runs for  4/6 months, with 5 classes per week. Students will be taught in small groups to ensure personalized guidance. The course fee is 999 per month."
            : "এই কোর্সটি ৪/৬ মাস ধরে পরিচালিত হয়, সপ্তাহে ৬ দিন ক্লাস। শিক্ষার্থীদের ছোট ব্যাচে পড়ানো হয় যাতে ব্যক্তিগত দিকনির্দেশনা নিশ্চিত করা যায়। কোর্স ফি প্রতি মাসে ৯৯৯।"}
          <p> 
            {language === "bn" ? (
              <>
                কোর্সের সময়সীমা: ৪/৬ মাস <br />
                ক্লাসের সময়: সপ্তাহে ৬ দিন <br />
                আলাদা ব্যাচ: বাচ্চা, মহিলা এবং পুরুষদের জন্য। <br />
                এছাড়াও হোয়াটসঅ্যাপ এর মাধ্যমে সার্বক্ষণিক সহযোগিতা প্রদান করা। <br />
                ঘরে বসেই প্রশিক্ষণপ্রাপ্ত অভিজ্ঞ উস্তাজ, হাফিজ ক্বারী এবং আলেমদের দ্বারা অনলাইনে কুরআন তাজবীদ শিখুন।{" "}
                <br />
                ক্লাসের মাধ্যম: জুম, মিট, হোয়াটসঅ্যাপ ,স্কাইপি লাইভ ক্লাস। (রেকর্ড ক্লাস দেয়া হয়)<br />
                ডেমো ক্লাস করার পর আপনি ভর্তি হতে পারবেন <br />
                সীমিত কোটায় ভর্তি চলছে।
              </> 
            ) : (
              <>
                Course Duration: 4/6 months <br />
                Class Schedule: 6 days a week <br />
                Separate batches for kids, women, and men. <br />
                Medium: Zoom, WhatsApp, Skype. <br />
                Classes are conducted by skilled teachers and Hafiz Qaris. <br />
                Last Date of Admission: January 1st <br />
                Classes Start: 2025
              </>
            )}
          </p>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="/ampara"
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
              ? "ভর্তির বিষয়ে তথ্য জানতে এখানে ক্লিক করুন"
              : "Click here for any information regarding admission"}
          </a>
        </div>

      </div>
    </div>
  );
}

export default AmparaDetails;
