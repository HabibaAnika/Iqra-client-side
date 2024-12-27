import { useLanguage } from "../../providers/LanguageProvider";

function ReviseDetails() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen w-full overflow-y-auto pb-20">
      {/* Image Container */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('9.jpg')" }}></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>

      {/* Content Area */}
      <div className="relative z-10 container mx-auto mt-40">
        <h1 className="text-3xl font-bold mb-6">
          {language === "en" ? "Revision Course Details" : "পুনরাবৃত্তি কোর্সের বিস্তারিত"}
        </h1>
        <p className="bg-[#12831b4d] text-sm p-4 rounded-sm mb-4">
          {language === "en"
            ? "The Revision Course is tailored for those who have previously memorized the Quran but need guidance to refresh and strengthen their memorization. The course ensures a structured approach to retaining and revising Quranic content."
            : "পুনরাবৃত্তি কোর্সটি তাদের জন্য যারা পূর্বে কুরআন মুখস্থ করেছেন কিন্তু পুনরায় মুখস্থ ও স্মৃতিশক্তি ধরে রাখতে দিকনির্দেশনার প্রয়োজন। এই কোর্সটি কুরআনের বিষয়বস্তু ধরে রাখা এবং পুনরাবৃত্তি নিশ্চিত করার জন্য একটি কাঠামোবদ্ধ পদ্ধতি প্রদান করে।"}
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>
        <ul className="list-disc pl-6 text-sm bg-[#12831b4d] w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>Strategies for retaining previously memorized portions of the Quran.</li>
              <li>Improvement in Tajweed and pronunciation accuracy.</li>
              <li>Daily revision plans for consistent practice.</li>
              <li>Focus on maintaining a balanced Hifz schedule.</li>
              <li>Developing confidence in recitation and memory recall.</li>
            </>
          ) : (
            <>
              <li>পূর্বে মুখস্থ করা কুরআনের অংশ ধরে রাখার কৌশল।</li>
              <li>তাজবীদ এবং উচ্চারণের যথার্থতা উন্নত করা।</li>
              <li>নিয়মিত অনুশীলনের জন্য দৈনিক পুনরাবৃত্তি পরিকল্পনা।</li>
              <li>হিফজের সময়সূচি ধরে রাখার উপর ফোকাস।</li>
              <li>তিলাওয়াত এবং স্মৃতিশক্তি বাড়াতে আত্মবিশ্বাস তৈরি করা।</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="text-sm bg-[#12831b4d] p-4 rounded-sm mb-4">
          {language === "en"
            ? "This course is designed for a duration of 1 year, depending on individual progress. Classes are held 6 days a week with flexible timing options. Students will have access to small batch sizes of 5-7 participants for personalized guidance. Students receive one-on-one sessions to ensure focused learning. A dedicated WhatsApp group is available for continuous support and guidance. The course fee is 1499 Taka per month, and all classes are conducted online using Zoom, Meet, and WhatsApp platforms."
            : "এই কোর্সটি ১ বছরের জন্য ডিজাইন করা হয়েছে, যা শিক্ষার্থীর অগ্রগতির উপর নির্ভরশীল।, সপ্তাহে ৬টি ক্লাস এবং সময়ের ক্ষেত্রে নমনীয়তা রয়েছে। শিক্ষার্থীরা ৫-৭ জনের ছোট ব্যাচে ব্যক্তিগত নির্দেশনার সুবিধা পাবেন।শিক্ষার্থীরা ফোকাসড শেখার জন্য একান্ত সেশনের সুযোগ পায়। টানা সহায়তা এবং নির্দেশনার জন্য একটি নিবেদিত হোয়াটসঅ্যাপ গ্রুপ রয়েছে। কোর্স ফি প্রতি মাসে ১৪৯৯ টাকা, এবং সমস্ত ক্লাস জুম, মিট এবং হোয়াটসঅ্যাপ প্ল্যাটফর্মে অনলাইনে পরিচালিত হয়।"}
         
            
            {language === "bn" ? (
              <>
                <br />কোর্সের সময়সীমা: ১ বছর <br /> 
                ক্লাসের সময়: সপ্তাহে ৬ দিন <br />
                উন্নত তাজবীদ এবং ক্বিরাত শেখানো হবে। <br />
                পুরুষ/মহিলা ও ছোট বাচ্চা সবার জন্য আলাদা ব্যাচ আছে। <br />
                মহিলা শিক্ষার্থীদের ক্লাস মহিলা শিক্ষিকা নিবেন। <br />
                এছাড়াও হোয়াটসঅ্যাপ এর মাধ্যমে সার্বক্ষণিক সহযোগিতা প্রদান করা। <br />
                ঘরে বসেই প্রশিক্ষণপ্রাপ্ত অভিজ্ঞ উস্তাজ, হাফিজ ক্বারী এবং আলেমদের দ্বারা অনলাইনে কুরআন তাজবীদ শিখুন।{" "}
                <br />
                ক্লাসের মাধ্যম: জুম, মিট, হোয়াটসঅ্যাপ ,স্কাইপি লাইভ ক্লাস। (রেকর্ড ক্লাস দেয়া হয়)
                <br />
                ডেমো ক্লাস করার পর আপনি ভর্তি হতে পারবেন <br />
                সীমিত কোটায় ভর্তি চলছে।
              </>
            ) : (
              <>
                Course Duration: 1 year <br />
                Class Schedule: 6 days a week <br />
                Advanced Tajweed and Qirat training will be provided. <br />
                There are separate batches for men/women and children. <br />
                Class of female students will be taken by female teacher. <br />
                Also providing round the clock support through WhatsApp. <br />
                Learn Quran Tajweed online by trained experienced Ustaz, Hafiz Qari and Scholars from home. <br />
                Class Medium: Zoom , Google Meet, WhatsApp, Skype Live Class. (Recorded video is provided) <br />
                After demo class you can get admission <br />
                Admission is going on in limited quota.
              </>
            )}
          </p>

        <div className="flex items-center gap-4">
          <a
            href="/revise"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
          >
            {language === "en" ? "Back to Courses" : "কোর্সে ফিরে যান"}
          </a>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
          >
            {language === "en" ? "Home" : "হোম"}
          </a>
        </div>

        <div className="flex lg:flex-row flex-col items-center gap-4 mt-4">
          <a
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
            target="_blank"
            href="https://forms.gle/axmVRr88k5hnSJmd8"
          >
            {language === "en" ? "Click Here for Admission Form" : "ভর্তি ফর্ম পেতে এখানে ক্লিক করুন"}
          </a>
          <a
            href="https://wa.me/message/RCTHVDUIYROZB1"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
          >
            {language === "en"
              ? "Click here for any information regarding admission"
              : "ভর্তির বিষয়ে যে কোন তথ্য জানতে এখানে ক্লিক করুন"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReviseDetails;
