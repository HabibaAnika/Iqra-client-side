import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import React from "react";
import { useLanguage } from "../../providers/LanguageProvider";

function Queries() {
  const [open, setOpen] = React.useState(0);
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  const { language } = useLanguage();

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="container mx-auto my-20">
      <h2 className="text-center mb-4 text-2xl font-extrabold">
        {language === "bn" ? "আপনার জিজ্ঞাসা ও আমাদের জবাব" : ""}
      </h2>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="bg-green-500 text-white text-md py-2 pl-6 pr-4 rounded-full hover:bg-green-600"
        >
          {language === "bn" ? "ভর্তি হতে চাই কিভাবে হব ?" : "Want to be admitted, how to be ?"}
        </AccordionHeader>
        <AccordionBody className="p-4 bg-gray-300 rounded-3xl mt-2">
          {language === "bn" ? (
            <>
              ১/ভর্তি হতে হলে প্রথমে আমাদের ফরম পূরণ করতে হবে যেটি নিচে বাটনে ক্লিক করলেই পেয়ে যাবেন। <br /> ২/ফরম পূরণ
              করে আমাদের বিকাশ/নগদ/রকেটে (+88 01737 77 42 98) ভর্তি ফি পাঠান, সম্ভব হলে সাথে রেফারেঞ্চ হিসেবে
              শিক্ষার্থীর নাম লিখে দিন। <br /> ৩/আপনার ভর্তির বিষয়টি আমাদের ফোনে (+880 1919 46 58 71 whatsapp)whatsapp এ
              এসএমএস বা ফোনের মাধ্যমে জানিয়ে দিন। <br />
              ৪/ভর্তি নিশ্চিত করার জন্য আমরা আপনার ভর্তি হরম পূরণ করে রিসিভ প্রদান করব। <br /> ৫/এরপর আমরা ক্লাসের
              অংশগ্রহণের জন্য যাবতীয় নোটিশ ও লিঙ্ক প্রদান করব। <br /> নোটঃ আপনি যদি আমাদের প্রতিষ্ঠানের পুরাতন
              স্টুডেন্ট না হন সেক্ষেত্রে আপনাকে ভর্তি ফি দিতে হবে ৫০০ টাকা । আর যদি আপনি আমাদের আগে কোর্স করেছেন এখন
              নতুন করে আরেকটি ভিন্ন কোর্সে ভর্তি হতে চান সেক্ষেত্রে আপনার ভর্তি ফি দিতে হবে না। প্রত্যেক শিক্ষার্থীকে
              আলাদা ফি পরিশোধ করতে হবে চায় একই পরিবারের হোক না কেন
            </>
          ) : (
            <>
              1/ To get admitted, you need to fill out our admission form, which you can access by clicking the button
              below.
              <br />
              2/ Complete the form and send the admission fee through Bkash/Nagad/Rocket (+88 01737 77 42 98). If
              possible, include the student&#39;s name as a reference. <br />
              3/ Notify us about your admission via SMS or call on WhatsApp (+880 1919 46 58 71). <br />
              4/ We will confirm your admission and provide you with a receipt after processing your form. <br />
              5/ Subsequently, we will share necessary notices and links for class participation. <br />
              Note: If you are not a former student of our institution, an admission fee of 500 BDT is required. If you
              have already taken a course with us and wish to enroll in another different course, you will not need to
              pay the admission fee. Each student must pay separately, even if they are from the same family.
            </>
          )}
          <div className="flex lg:flex-row flex-col items-center gap-2 mt-4">
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
                ? "ভর্তির বিষয়ে বা যে কোন তথ্য জানতে এখানে ক্লিক করুন"
                : "Click here for any information regarding admission"}
            </a>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          className="bg-green-500 mt-2 text-md text-white py-2 pl-6 pr-4 rounded-full hover:bg-green-600"
          onClick={() => handleOpen(2)}
        >
          {language === "bn"
            ? "নূরানী ও নাযেরাসহ ইসলামী যেকোনো সাবজেক্ট সিঙ্গেল ভাবে প্রাইভেট সিস্টেমে ওস্তাদের কাছে পড়া যাবে কিনা ?"
            : "Can any Islamic subject including Noorani and Nazera be studied in a single way by the masters in private system ?"}
        </AccordionHeader>
        <AccordionBody className="p-4 bg-gray-300 rounded-3xl mt-2">
          {language === "bn" ? (
            <>
              জ্বি,আপনি চাইলে ইসলামী যেকোনো বিষয় নিজে বা আপনার সন্তানকে আলাদাভাবে অভিজ্ঞ শিক্ষকের মাধ্যমে আপনার সুবিধামত
              যেকোনো সময়ে পড়াতে বা পড়তে পারেন, সেক্ষেত্রে উস্তাদ আপনার ধারন ক্ষমতা অনুযায়ী পড়া বুঝিয়ে দিবেন ও আপনার থেকে
              পড়া আদায় করবেন। আমাদের রয়েছে ব্যাচ ও প্রাইভেট উভয়ভাবে পড়ার সুবর্ণ সুযোগ। প্রাইভেটভাবে পড়ার ক্ষেত্রে কোর্স
              ফির তুলনায় ফি কিছুটা তারতম্য হতে পারে , সেটি আমাদের সাথে আলোচনার মাধ্যমে জেনে নিন।
            </>
          ) : (
            <>
              Yes, if you want any Islamic subject by yourself or your child separately through an experienced teacher
              at your convenience You can teach or read at any time, in that case the teacher will explain the reading
              according to your ability and from you Read up. We have golden opportunity to study both batch and
              private. Courses in private study Fees may vary slightly from fee to fee, please discuss with us.
            </>
          )}
          <div className="flex lg:flex-row flex-col items-center gap-2 mt-4">
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
                ? "ভর্তির বিষয়ে বা যে কোন তথ্য জানতে এখানে ক্লিক করুন"
                : "Click here for any information regarding admission"}
            </a>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          className="bg-green-500 mt-2 text-md text-white py-2 pl-6 pr-4 rounded-full hover:bg-green-600"
          onClick={() => handleOpen(3)}
        >
          {language === "bn"
            ? "মহিলা/পুরুষ ও বাচ্চাদের জন্য আলাদা শিক্ষকের মাধ্যমে আলাদা ব্যাচ সিস্টেম কিনা ?"
            : "Whether separate batch system for women/men and children with separate teachers ?"}
        </AccordionHeader>
        <AccordionBody className="p-4 bg-gray-300 rounded-3xl mt-2">
          {language === "bn" ? (
            <>
              জ্বি,বাচ্চা,মহিলা,পুরুষ সকলের জন্য আলাদা ব্যাচ , সেই সাথে মহিলা শিক্ষার্থীকে মহিলা উস্তাযার মাধ্যমে পড়ানো
              হয়। আর বাচ্চাদের ব্যাচ মহিলা পুরুষ উভয় উস্তাদের মাধ্যমে পড়ানো হয়,মেয়ে বাচ্চা ৯ বছর বয়সী হলে অবশ্যই মহিলা
              শিক্ষিকা পড়াবেন। আপনি চাইলে আপনার সন্তানকে পুরুস/মহিলা যেকোনো উস্তাদের ব্যাচে পড়াতে পারবেন। সেই সাথে ডেমো
              ক্লাস/ফ্রি ট্রায়াল দিয়ে তারপর ভর্তি হবার সুবিধা পাচ্ছেন। জাযাকুমুল্লাহ খাইর!
            </>
          ) : (
            <>
              Yes, there are separate batches for children, women, men, also female students are taught through female
              teachers. And the children&#39;s batch is taught by both female and male teachers. If the girl child is 9
              years old, the female teacher must teach. If you want you can teach your child male/female in any Ustad
              batch. Along with demo class/free trial then getting admission facility. Jazakumullah Khair!
            </>
          )}
          <div className="flex lg:flex-row flex-col items-center gap-2 mt-4">
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
                ? "ভর্তির বিষয়ে বা যে কোন তথ্য জানতে এখানে ক্লিক করুন"
                : "Click here for any information regarding admission"}
            </a>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          className="bg-green-500 mt-2 text-md text-white py-2 pl-6 pr-4 rounded-full hover:bg-green-600"
          onClick={() => handleOpen(4)}
        >
          {language === "bn"
            ? "ক্লাস কিভাবে করানো হয়,ভর্তি ফি কত, ভর্তি সময়সীমা কতদিন, প্রাইভেটভাবে পড়লে ফি কত, কত বছর বয়স থেকে ভর্তি হওয়া যায়, ক্লাস মিস হলে কি করনীয়, পরিক্ষা কতদিন পর পর নেয়া হয় এবং কিভাবে ?"
            : "How are the classes conducted, how much is the admission fee, how long is the admission period, how much is the fee for studying privately, from what age can admission be done, what to do if the class is missed, how many days are the exams taken and how ?"}
        </AccordionHeader>
        <AccordionBody className="p-4 bg-gray-300 rounded-3xl mt-2">
          {language === "bn" ? (
            <>
              ১/যেহেতু আমাদের ক্লাসগুলো অনলাইনে পরিচালিত হয় সেক্ষেত্রে অনলাইনে পড়ানোর জন্য সব থেকে বেস্ট অ্যাপ যেমনঃ
              গুগল মিট, জুম, টেলিগ্রাম, স্কাইপে বা পরিস্থিতি সাপেক্ষে হোয়াটস অ্যাপে স্ক্রিন শেয়ারিংয়ের মাধ্যমে নেয়া হয়
              <br />
              ২/ভর্তি ফি প্রাইভেট, কোর্স সকল ক্ষেত্রে এবং সকল বিষয়ের ক্ষেত্রে সমান ৫০০ টাকা মাত্র। <br />
              ৩/বছরের প্রায় প্রতিমাসেই আমাদের ভর্তি কার্যক্রম চলমান থাকে। তাই প্রয়োজনে আমাদের সঙ্গে যোগাযোগ করুন (+880
              1919 46 58 71 বা +880 1737 77 42 98) এসএমএস বা কলের মাধ্যমে। <br />
              ৪/প্রাইভেটভাবে পড়তে চাইলে সেটি{" "}
              <a className="bg-green-400 px-2 rounded text-white hover:bg-green-600" href="">
                এখানে ক্লিক করে দেখে নিন
              </a>{" "}
              বা আপনার কোনো মতামত বা অভিযোগ থাকলে অনুগ্রহপূর্বক আমাদের সাথে শেয়ার করুন। <br />
              ৫/সর্বনিম্ন ৪ বছর থেকে আমাদের বেসিক কোরআন শিক্ষা কোর্সটি শুরু করতে পারে তবে অবস্থা বিবেচনায় বয়স কমবেশি
              ধর্তব্য করাই শ্রেয়। <br />
              ৬/আমাদের প্রতিটি ক্লাসের জন্য থাকবে অত্যাধুনিক গুগল শিট, যার মাধ্যমে সকলের উপস্থিতি পর্যবেক্ষণ করা হবে,
              সেই সাথে প্রতিটি স্টুডেন্টের প্রোগ্রেস রিপোর্ট অভিবাবকের কাছে প্রতি মাসের শেষে উপস্থাপন করা হবে। <br />
              ৭/মাসিক পরিক্ষা নেয়া হবে পড়া শুরু করার পরবর্তী মাসের ৫ তারিখে এবং অন্য উস্তায বা পরিচালক প্যানেলের মাধ্যমে
              পরিক্ষা নেয়া হবে, সেটি অবস্থার প্রেক্ষিতে নির্ধারণ করা হবে।
            </>
          ) : (
            <>
              1/ Since our classes are conducted online, the best apps for online teaching are: Screen sharing is done
              on Google Meet, Zoom, Telegram, Skype or WhatsApp as the case may be.
              <br />
              2/ Admission fee private, course in all fields and in all subjects same 500 taka only. <br />
              3/Our admission process is ongoing almost every month of the year. So contact us (+880 1919 46 58 71 or
              +880 1737 77 42 98) via SMS or call. <br />
              4/ If you want to read privately then{" "}
              <a className="bg-green-400 px-2 rounded text-white hover:bg-green-600" href="">
                Check it out by clicking here
              </a>{" "}
              Or if you have any feedback or complaint please share with us. <br />
              5/ Minimum age of 4 years can start our basic Quran learning course but it is better to specify the age
              more or less depending on the situation. <br />
              6/ We will have state-of-the-art Google Sheets for each class, through which all attendance will be
              monitored. Also the progress report of each student will be presented to the parents at the end of every
              month. <br />
              7/ The monthly examination will be conducted on the 5th of the month following the commencement of studies
              and the examination will be conducted through another Ustad or Board of Directors, as determined by the
              situation.
            </>
          )}
          <div className="flex lg:flex-row flex-col items-center gap-2 mt-4">
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
                ? "ভর্তির বিষয়ে বা যে কোন তথ্য জানতে এখানে ক্লিক করুন"
                : "Click here for any information regarding admission"}
            </a>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          className="bg-green-500 mt-2 text-md text-white py-2 pl-6 pr-4 rounded-full hover:bg-green-600"
          onClick={() => handleOpen(5)}
        >
          {language === "bn"
            ? "কোর্স বা প্রাইভেট শেষ করার পর সার্টিফিকেট পাওয়া যাবে কিনা ?"
            : "Can I get a certificate after completing the course or private?"}
        </AccordionHeader>
        <AccordionBody className="p-4 bg-gray-300 rounded-3xl mt-2">
          {language === "bn" ? (
            <>
              জ্বি,আপনাকে আপনার সফলতা ও পরিশ্রমের মূল্যায়ন হিসেবে রেজাল্টের উপর ভিত্তি করে সার্টিফিকেট প্রদান করা হবে,
              ইনশাআল্লাহ। যেই সার্টিফিকেট পরবর্তীতে ইসলামিক কোনো প্রতিষ্ঠানে ভর্তির ক্ষেত্রে মূল্যায়ন করা হতে পারে।
            </>
          ) : (
            <>
              Yes, you will be awarded a certificate based on the results as an appreciation of your success and hard
              work, Inshallah. The certificate may be evaluated later for admission to any Islamic institution.
            </>
          )}
          <div className="flex lg:flex-row flex-col items-center gap-2 mt-4">
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
                ? "ভর্তির বিষয়ে বা যে কোন তথ্য জানতে এখানে ক্লিক করুন"
                : "Click here for any information regarding admission"}
            </a>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          className="bg-green-500 mt-2 text-md text-white py-2 pl-6 pr-4 rounded-full hover:bg-green-600"
          onClick={() => handleOpen(6)}
        >
          {language === "bn"
            ? "অন্য কোন প্রশ্নের জন্য সরাসরি যোগাযোগ করতে পারবো কিনা ?"
            : "Can I contact directly for any other questions?"}
        </AccordionHeader>
        <AccordionBody className="p-4 bg-gray-300 rounded-3xl mt-2">
          {language === "bn" ? (
            <>
              জ্বি,নিচের বাটনে ক্লিক করার মাধ্যমে হোয়াটস অ্যাপে আপনি সরাসরি আপনার ব্যক্তিগত প্রশ্ন করতে পারেন বা +880
              1919 46 58 71 এই নাম্বারে ফোন বা এসএমএস করতে পারেন, জাযাকুমুল্লাহ খাইর। <br />
            </>
          ) : (
            <>
              Yes, you can directly ask your personal question on WhatsApp by clicking the button below or call or SMS
              on +880 1919 46 58 71, Jazakumullah Khair. <br />
            </>
          )}
          <a
            href="https://wa.me/message/RCTHVDUIYROZB1"
            target="_blank"
            className="inline-flex items-center mt-2 px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
          >
            {language === "bn"
              ? "ভর্তির বিষয়ে বা যে কোন তথ্য জানতে এখানে ক্লিক করুন"
              : "Click here for any information regarding admission"}
          </a>
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default Queries;
