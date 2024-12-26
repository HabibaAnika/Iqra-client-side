import { useState, useEffect } from "react";
import { useLanguage } from "../providers/LanguageProvider";

const ThemeSwitcher = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  //

  const themeTranslations = {
    light: "লাইট",
    dark: "ডার্ক",
    cupcake: "কাপকেক",
    bumblebee: "বাম্বলবি",
    emerald: "পান্না",
    corporate: "কর্পোরেট",
    synthwave: "সিন্থওয়েভ",
    retro: "রেট্রো",
    cyberpunk: "সাইবারপাংক",
    valentine: "ভ্যালেন্টাইন",
    halloween: "হ্যালোইন",
    garden: "বাগান",
    forest: "বন",
    aqua: "জল",
    lofi: "লোফাই",
    pastel: "প্যাস্টেল",
    fantasy: "ফ্যান্টাসি",
    wireframe: "ওয়্যারফ্রেম",
    black: "কালো",
    luxury: "লাক্সারি",
    dracula: "ড্রাকুলা",
    cmyk: "সিএমওয়াইকে",
    autumn: "শরৎ",
    business: "ব্যবসা",
    acid: "অ্যাসিড",
    lemonade: "লেমোনেড",
    night: "রাত",
    coffee: "কফি",
    winter: "শীত",
    dim: "ম্লান",
    nord: "নর্ড",
    sunset: "সানসেট",
  };

  const [currentTheme, setCurrentTheme] = useState("light");
  const { language } = useLanguage();

  // Load the saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Handle theme change
  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
  };

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        {language === "en"
          ? `${currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}`
          : themeTranslations[currentTheme]}
      </label>

      <div className="relative">
        <ul
          className="absolute dropdown-content menu p-2 shadow bg-base-100 rounded-box max-h-96 w-96 right-0"
        >
          {themes.map((theme, index) => (
            <li className="pointer" key={index}>
              <button
                className={`capitalize w-full text-left px-4 py-2 rounded ${
                  currentTheme === theme ? "bg-[#000] text-white" : ""
                }`}
                onClick={() => handleThemeChange(theme)}
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

export default ThemeSwitcher;
