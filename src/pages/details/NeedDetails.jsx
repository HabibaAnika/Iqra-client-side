
import { useLanguage } from "../../providers/LanguageProvider";

function NeedDetails() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen w-full overflow-y-auto pb-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('10.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#143a8d75] bg-opacity-40"></div>

      {/* Content Area */}
      <div className="relative z-10 container mx-auto mt-40">
        <h1 className="text-3xl font-bold mb-6">
          {language === "en" ? "Need for Ummah - Course Details" : "ফরজে আইন - কোর্সের বিবরণ"}
        </h1>

        <p className="bg-[#1c9de7bb]  w-auto p-4 rounded-sm text-sm mb-4">
          {language === "en"
            ? "This course focuses on fundamental aspects of Islamic life, imparting essential knowledge to contribute meaningfully to the Ummah."
            : "ইসলামী জীবনের মৌলিক বিষয়গুলোর উপর ভিত্তি করে এই কোর্সটি মূল্যবোধ, নীতি এবং উম্মাহতে অর্থপূর্ণ অবদান রাখার জন্য প্রয়োজনীয় জ্ঞান শেখায়।"}
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>
        <ul className="list-disc pl-6 text-sm bg-[#1c9de7bb] w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>Core Islamic values and principles.</li>
              <li>Fiqh and basic jurisprudence.</li>
              <li>Fundamentals of Quran and Hadith studies.</li>
              <li>Practical Islamic practices for daily life.</li>
            </>
          ) : (
            <>
              <li>ইসলামের মূল মূল্যবোধ এবং নীতি।</li>
              <li>ফিকহ এবং মৌলিক শরিয়ত।</li>
              <li>কোরআন এবং হাদিসের মৌলিক অধ্যয়ন।</li>
              <li>প্রতিদিনের জীবনের জন্য ব্যবহারিক ইসলামিক অনুশীলন।</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="text-sm mb-4 bg-[#1c9de7bb] p-4 rounded-sm">
        {language === "bn" ? (
              <>
                কোর্সের সময়সীমা: ৬ মাস - ১ বছর মেয়াদী কোর্স 
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
                সীমিত কোটায় ভর্তি চলছে। <br />
                কোর্স ফি : ১১৯৯ টাকা (মাসিক) 
              </>
            ) : (
              <>
                Course Duration: 6 month - 1 years course <br />
                Class Schedule: 6 days a week <br />
                There are separate batches for men/women and children. <br />
                Class of female students will be taken by female teacher. <br />
                Also providing round the clock support through WhatsApp. <br />
                Learn Quran Tajweed online by trained experienced Ustaz, Hafiz Qari and Scholars from home. <br />
                Class Medium: Zoom , Google Meet, WhatsApp, Skype Live Class. (Recorded video is provided){" "}
                <br />
                After demo class you can get admission <br />
                Course fee : 1199 Taka (monthly)
              </>
            )}
        </p>

        <div className="flex items-center gap-4 mt-5">
          <a
            href="/need-for-ummah"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
          >
            {language === "en" ? "Back to Courses" : "কোর্সে ফিরে যান"}
          </a>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
          >
            {language === "en" ? "Home" : "হোম"}
          </a>
        </div>

        <div className="flex lg:flex-row flex-col items-center gap-4 mt-4">
          <a
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
            target="_blank"
            href="https://forms.gle/axmVRr88k5hnSJmd8"
          >
            {language === "en" ? "Click Here for Admission Form" : "ভর্তি ফর্ম পেতে এখানে ক্লিক করুন"}
          </a>
          <a
            href="https://wa.me/message/RCTHVDUIYROZB1"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
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

export default NeedDetails;
