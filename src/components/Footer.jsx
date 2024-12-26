import { useLanguage } from "../providers/LanguageProvider";

function Footer() {
  const { language } = useLanguage();

  return (
    <div className="shadow-black shadow-2xl">
      <footer className="footer container mx-auto flex flex-col md:flex-row items-center justify-between">
        <aside className="text-center md:text-left">
          <img className="w-24 mx-auto md:mx-0" src="https://i.ibb.co.com/YbLDnmN/Artboard-4-4x.png" alt="" />
          <p>
            {language === "en" ? "IQRA QAWMI INSTITUTE" : "ইক্বরা কওমি ইনস্টিটিউট"}
            <br />
            {language === "en"
              ? "Providing reliable teach since 2023"
              : "2023 সাল থেকে নির্ভরযোগ্য শিক্ষা প্রদান করা হচ্ছে"}
          </p>
        </aside>

        <nav className="mt-5 flex flex-col md:flex-row items-center gap-5">
          <div>
            <h6 className="footer-title">{language === "en" ? "Follow us" : "ফলো করুন"}</h6>
            <div className="grid grid-flow-col gap-4">
              <a target="_blank" href={"https://www.facebook.com/iqraqawmiinstitute/"}>
                <img className="w-7" src="https://i.ibb.co.com/z7rndMm/facebook.png" alt="" />
              </a>
              <a target="_blank" href="https://www.instagram.com/iqraqawmi">
                <img className="w-7" src="https://i.ibb.co.com/wQd363D/instagram.png" alt="" />
              </a>
              <a target="_blank" href="https://whatsapp.com/channel/0029VazsvgPDuMRXQgMd8j0e">
                <img className="w-8" src="https://i.ibb.co.com/F3rrrkv/icons8-whatsapp-48.png" alt="" />
              </a>
            </div>
          </div>

          <div>
            <h6 className="footer-title">{language === "en" ? "Please Subscribe" : "সাবস্ক্রাইব করুন"}</h6>
            <div className="grid grid-flow-col">
              <a target="_blank" href={"https://www.youtube.com/channel/UC9zJ98THY5Y4n80kcXZDwsg"}>
                <img className="w-10" src="https://i.ibb.co.com/5L4pbvn/youtube.png" alt="" />
              </a>
              <a target="_blank" href="https://t.me/+VFF2fsr8g4I0YmNl">
                <img className="w-10" src="https://i.ibb.co.com/zf1DJV3/icons8-telegram-94.png" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
