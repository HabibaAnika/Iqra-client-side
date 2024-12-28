import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../src/style.css";
import { useLanguage } from "../../providers/LanguageProvider";

function Teachers() {
  // Teacher data
  const teachers = [
    {
      name: "John Doe",
      banglaName: "জন ডো",
      age: 35,
      experience: "10 years",
      banglaExperience: "১০ বছর",
      education: {
        degree: "M.Ed in Mathematics",
        banglaDegree: "গণিতে এম.এড",
        institute: "Harvard University",
        banglaInstitute: "হার্ভার্ড বিশ্ববিদ্যালয়",
        result: "Distinction",
        banglaResult: "বিশেষ কৃতিত্ব",
        passYear: 2010,
        banglaPassYear: "২০১০",
      },
      img: "t-1.jpg",
      location: "New York, USA",
      banglaLocation: "নিউ ইয়র্ক, ইউএসএ",
      schedule: ["2:30pm - 4:00pm", "10:00 am - 12:00 pm"],
      banglaSchedule : ["২:৩০পিএম - ৪:০০পিএম", "১০:০০ এ এম - ১২:০০ পিএম"],
      time: "Available",
      bnTime: "পাওয়া যাবে"
    },
    {
      name: "Jane Smith",
      banglaName: "জেন স্মিথ",
      age: 29,
      experience: "7 years",
      banglaExperience: "৭ বছর",
      education: {
        degree: "Ph.D. in Physics",
        banglaDegree: "পদার্থবিজ্ঞানে পিএইচডি",
        institute: "California Institute of Technology",
        banglaInstitute: "ক্যালিফোর্নিয়া ইনস্টিটিউট অফ টেকনোলজি",
        result: "Magna Cum Laude",
        banglaResult: "ম্যাগনা কাম লডে",
        passYear: 2015,
        banglaPassYear: "২০১৫",
      },
      img: "t-2.jpg",
      location: "Los Angeles, USA",
      banglaLocation: "লস অ্যাঞ্জেলেস, ইউএসএ",
      schedule: ["2:30pm - 4:00pm", "10:00 am - 12:00 pm"],
      banglaSchedule : ["২:৩০পিএম - ৪:০০পিএম", "১০:০০ এ এম - ১২:০০ পিএম"],
      time: "Available",
      bnTime: "পাওয়া যাবে"
    },
    {
      name: "Michael Johnson",
      banglaName: "মাইকেল জনসন",
      age: 40,
      experience: "15 years",
      banglaExperience: "১৫ বছর",
      education: {
        degree: "M.A. in English Literature",
        banglaDegree: "ইংরেজি সাহিত্যে এম.এ",
        institute: "University of Chicago",
        banglaInstitute: "শিকাগো বিশ্ববিদ্যালয়",
        result: "Summa Cum Laude",
        banglaResult: "সুম্মা কাম লডে",
        passYear: 2008,
        banglaPassYear: "২০০৮",
      },
      img: "t-3.jpg",
      location: "Chicago, USA",
      banglaLocation: "শিকাগো, ইউএসএ",
      schedule: ["2:30pm - 4:00pm", "10:00 am - 12:00 pm"],
      banglaSchedule : ["২:৩০পিএম - ৪:০০পিএম", "১০:০০ এ এম - ১২:০০ পিএম"],
      time: "Available",
      bnTime: "পাওয়া যাবে"
    },
    {
      name: "Emily Davis",
      banglaName: "এমিলি ডেভিস",
      age: 32,
      experience: "8 years",
      banglaExperience: "৮ বছর",
      education: {
        degree: "B.Sc in Computer Science",
        banglaDegree: "কম্পিউটার সায়েন্সে বিএসসি",
        institute: "Rice University",
        banglaInstitute: "রাইস বিশ্ববিদ্যালয়",
        result: "First Class",
        banglaResult: "প্রথম শ্রেণি",
        passYear: 2014,
        banglaPassYear: "২০১৪",
      },
      img: "https://via.placeholder.com/150",
      location: "Houston, USA",
      banglaLocation: "হিউস্টন, ইউএসএ",
      schedule: ["2:30pm - 4:00pm", "10:00 am - 12:00 pm"],
      banglaSchedule : ["২:৩০পিএম - ৪:০০পিএম", "১০:০০ এ এম - ১২:০০ পিএম"],
      time: "unavailable",
      bnTime: "পাওয়া যাবে না"
    },
    {
      name: "Sarah Wilson",
      banglaName: "সারা উইলসন",
      age: 37,
      experience: "12 years",
      banglaExperience: "১২ বছর",
      education: {
        degree: "M.A. in History",
        banglaDegree: "ইতিহাসে এম.এ",
        institute: "Stanford University",
        banglaInstitute: "স্ট্যানফোর্ড বিশ্ববিদ্যালয়",
        result: "Cum Laude",
        banglaResult: "কাম লডে",
        passYear: 2006,
        banglaPassYear: "২০০৬",
      },
      img: "https://via.placeholder.com/150",
      location: "San Francisco, USA",
      banglaLocation: "সান ফ্রান্সিসকো, ইউএসএ",
      schedule: ["2:30pm - 4:00pm", "10:00 am - 12:00 pm"],
      banglaSchedule : ["২:৩০পিএম - ৪:০০পিএম", "১০:০০ এ এম - ১২:০০ পিএম"],
      time: "Available",
      bnTime: "পাওয়া যাবে"
    },
    {
      name: "David Brown",
      banglaName: "ডেভিড ব্রাউন",
      age: 45,
      experience: "20 years",
      banglaExperience: "২০ বছর",
      education: {
        degree: "Ph.D. in Chemistry",
        banglaDegree: "রসায়নে পিএইচডি",
        institute: "University of Miami",
        banglaInstitute: "মিয়ামি বিশ্ববিদ্যালয়",
        result: "Summa Cum Laude",
        banglaResult: "সুম্মা কাম লডে",
        passYear: 2003,
        banglaPassYear: "২০০৩",
      },
      img: "https://via.placeholder.com/150",
      location: "Miami, USA",
      banglaLocation: "মিয়ামি, ইউএসএ",
      schedule: ["2:30pm - 4:00pm", "10:00 am - 12:00 pm"],
      banglaSchedule : ["২:৩০পিএম - ৪:০০পিএম", "১০:০০ এ এম - ১২:০০ পিএম"],
      time: "unavailable",
      bnTime: "পাওয়া যাবে না"
    },
    {
      name: "Emma Taylor",
      banglaName: "এমা টেইলর",
      age: 28,
      experience: "5 years",
      banglaExperience: "৫ বছর",
      education: {
        degree: "M.A. in Economics",
        banglaDegree: "অর্থনীতিতে এম.এ",
        institute: "Boston University",
        banglaInstitute: "বস্টন বিশ্ববিদ্যালয়",
        result: "High Distinction",
        banglaResult: "উচ্চ কৃতিত্ব",
        passYear: 2019,
        banglaPassYear: "২০১৯",
      },
      img: "https://via.placeholder.com/150",
      location: "Boston, USA",
      banglaLocation: "বস্টন, ইউএসএ",
      schedule: ["2:30pm - 4:00pm", "10:00 am - 12:00 pm"],
      banglaSchedule : ["২:৩০পিএম - ৪:০০পিএম", "১০:০০ এ এম - ১২:০০ পিএম"],
      time: "Available",
      bnTime: "পাওয়া যাবে"
    },
  ];

  const { language } = useLanguage();

  return (
    <div className="teachers-slider container mx-auto my-20">
      <h2 className="text-2xl font-extrabold text-center mb-4">
        {language === "bn" ? "আমাদের শিক্ষক প্যানেল" : "Our Teachers Panel"}
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={false}
        navigation={true}
        pagination={{ clickable: true }}
        speed={1000}
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="card bg-base-100 w-80 shadow-xl my-10 h-[600px]">
              <figure>
                <img
                  src={teacher.img}
                  alt={`${teacher.name}`}
                  className="teacher-img"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-bold">
                  {language === "bn" ? teacher.banglaName : teacher.name}
                </h3>
                <div className="my-4">
                  <p>
                    <strong>{language=== "bn" ? "বয়স :" : "Age :"}</strong>{" "}
                    {language === "bn" ? teacher.age.toLocaleString("bn-BD") : teacher.age}
                  </p>
                  <p>
                    <strong> {language=== "bn" ? "অভিজ্ঞতা :" : "Experience:"}</strong>{" "}
                    {language === "bn"
                      ? teacher.banglaExperience
                      : teacher.experience}
                  </p>
                  <p>
                    <strong>{language=== "bn" ? "শিক্ষাগত যোগ্যতা :" : "Educational Skill :"}</strong>{" "}
                    {language === "bn"
                      ? `${teacher.education.banglaDegree}, ${teacher.education.banglaInstitute}, ${teacher.education.banglaResult} (${teacher.education.banglaPassYear})`
                      : `${teacher.education.degree}, ${teacher.education.institute}, ${teacher.education.result} (${teacher.education.passYear})`}
                  </p>
                  <p>
                    <strong> {language=== "bn" ? "অবস্থান :" : "Location :"}</strong>{" "}
                    {language === "bn"
                      ? teacher.banglaLocation
                      : teacher.location}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <div className="btn btn-outline btn-success hover:text-white btn-xs rounded-badge">{language=== "bn" ? `${teacher.bnTime}` : `${teacher.time}`}</div>
                  <div className="btn btn-outline btn-warning hover:text-white btn-xs rounded-badge">{language=== "bn" ? "শিডিউল দেখুন " :"Show Schedule"}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Teachers;
