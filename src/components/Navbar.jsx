import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../providers/LanguageProvider";
import ThemeSwitcher from "./ThemeSwitcher";
import Dropdown from "./smallDevice/Dropdown";
import { useState, useEffect } from "react";

function Navbar() {
  const { language, switchLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change based on when you want the background to appear
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { link: "/", label: language === "en" ? "Home" : "হোম" },
    {
      label: language === "en" ? "About" : "সম্পর্কে",
      items: [
        { link: "/teachers", label: language === "en" ? "Our Teachers" : "আমাদের শিক্ষকমণ্ডলী" },
        { link: "/rules", label: language === "en" ? "Our Rules" : "নীতিমালা" },
      ],
    },
    {
      label: language === "en" ? "All Courses" : "সকল কোর্স",
      items: [
        { link: "/basic", label: language === "en" ? "Basic Learning Quran" : "প্রাথমিক কোরআন শিক্ষা" },
        { link: "/nazera", label: language === "en" ? "Advance Quran Course" : "নাযেরা কোর্স" },
        { link: "/30th", label: language === "en" ? "30th Part Memorizing Course" : "আমপারা হিফয কোর্স" },
        { link: "/hifz", label: language === "en" ? "Memorizing All Quran Course" : "সম্পূর্ণ কোরআন হিফয কোর্স" },
        { link: "/revise", label: language === "en" ? "Hifz Revise Course" : "হিফয সংশোধন কোর্স" },
        {
          link: "/specialHifz",
          label: language === "en" ? "Special Surahs Memorize Course" : "ফযিলতের সূরা হিফয কোর্স",
        },
        { link: "/alim", label: language === "en" ? "Alim Course" : "আলিম কোর্স" },
        { link: "/need", label: language === "en" ? "Need For Ummah Course" : "ফরজে আইন কোর্স" },
      ],
    },
    { link: "/contact", label: language === "en" ? "Contact" : "যোগাযোগ" },
    { link: "/blog", label: language === "en" ? "Blog" : "ব্লগ" }, 
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to a search results page or handle search logic here
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div
      className={`z-50 w-full fixed transition-all duration-300 ${
        isScrolled ? "bg-[#eff3f0] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="navbar py-1">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow overflow-y-auto"
              >
                {navItems.map((item, index) =>
                  item.items ? (
                    <Dropdown key={index} label={item.label} items={item.items} />
                  ) : (
                    <li key={index} className="mb-1">
                      <NavLink to={item.link}>{item.label}</NavLink>
                    </li>
                  )
                )}
                <form className="max-w-md mx-auto" onSubmit={handleSearch}>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      placeholder={language === "en" ? "Search..." : "অনুসন্ধান করুন..."}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      required
                    />
                  </div>
                </form>
              </ul>
            </div>

            {/* Website Name */}
            <div className="flex items-center gap-2">
              <img className="w-16" src="https://i.ibb.co/YbLDnmN/Artboard-4-4x.png" alt="IQRA Logo" />
              <div className="lg:flex flex-col hidden items-start relative left-[-20px] top-1">
                <Link to="/" className="font-black text-xl tracking-widest">
                  {language === "en" ? "IQRA" : "ইক্বরা"}
                </Link>
                <Link to="/" className="font-thin text-xs tracking-wide">
                  {language === "en" ? "QAWMI INSTITUTE" : "কওমি ইনস্টিটিউট"}
                </Link>
              </div>
            </div>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex lg:items-center">
            <ul className="menu menu-horizontal px-1 lg:flex lg:items-center">
              {navItems.map((item, index) =>
                item.items ? (
                  <Dropdown key={index} label={item.label} items={item.items} />
                ) : (
                  <li key={index} className="mr-2">
                    <NavLink to={item.link}>{item.label}</NavLink>
                  </li>
                )
              )}
              <form className="max-w-md mx-auto" onSubmit={handleSearch}>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder={language === "en" ? "Search..." : "অনুসন্ধান করুন..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                  />
                </div>
              </form>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm">{language === "bn" ? "বাংলা" : "English"}</span>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={(e) => switchLanguage(e.target.checked ? "en" : "bn")}
                  checked={language === "en"}
                />
              </div>

              {/* Theme Switcher */}
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
