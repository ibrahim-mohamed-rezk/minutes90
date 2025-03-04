import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Settings = () => {
  const th = useTranslations("header");
  const t = useTranslations("settings");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;

    // تحديث المسار باللغة الجديدة
    router.push(`/${newLocale}${pathname.replace(`/${locale}`, "")}`);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[25px] font-extrabold font-['Montserrat']">
        {t("Main_Information")}
      </div>

      {/* account information */}
      <div className="min-h-[343px] relative bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-8">
        <div className="text-white text-[20px] font-extrabold font-['Montserrat']">
          {t("Settings")}
        </div>

        <div className="min-h-[343px] relative mt-[10px] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-8">
          <div className="flex flex-col gap-2">
            <label className="text-white text-xs font-normal font-['Poppins']">
              {t("Language")}
            </label>
            <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
              <select
                onChange={(e) => handleLanguageChange(e.target.value)}
                value={locale}
                className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
              >
                <option value="en">{th("english")}</option>
                <option value="ar">{th("arabic")}</option>
                <option value="fr">{th("french")}</option>
                <option value="de">{th("german")}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
