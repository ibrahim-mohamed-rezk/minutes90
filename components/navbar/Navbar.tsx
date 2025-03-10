"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LoginModal from "../auth/LoginModal";
import { usePathname, useRouter } from "next/navigation";
import SignupModal from "../auth/SignupModal";
import ForgetPassword from "../auth/ForgetPassword";
import { useAppSelector } from "@/libs/store/hooks";
import UserType from "../auth/UserType";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserTypeModalOpen, setIsUserTypeModalOpen] = useState(false);
  const pathname = usePathname();
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);

  const { userData, token } = useAppSelector((state) => state.user);
  const t = useTranslations("header");
  const router = useRouter();
  const locale = useLocale();
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    if (userData && token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userData, token]);

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("player"), href: "/players" },
    { label: t("agent"), href: "/agents" },
    // { label: t("blogs"), href: "/blogs" },
  ];

  const langs = [
    { label: t("english"), value: "en" },
    { label: t("arabic"), value: "ar" },
    { label: t("german"), value: "de" },
    { label: t("french"), value: "fr" },
  ];

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;

    // تحديث المسار باللغة الجديدة
    router.push(`/${newLocale}${pathname.replace(`/${locale}`, "")}`);
  };

  return (
    <nav className="w-full ">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[100px] items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/row_logo.svg"
                alt="Minutes90 Logo"
                width={172}
                height={55}
                className="h-[55px] w-[172px]"
                style={{ width: "172px", height: "55px" }}
                loading="lazy"
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-[38px]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[var(--color-text-black)] hover:text-[var(--color-green)] hover:border-b-[3px] hover:border-[var(--color-green)] py-[3px] text-[18px] font-[poppins] font-[600] ${
                  pathname === item.href &&
                  "text-[var(--color-green)] border-b-[3px] border-[var(--color-green)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="flex items-center justify-center gap-[5px]">
              <select
                value={locale}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="w-full flex flex-col items-center justify-center bg-transparent text-[#000] font-bold text-xs font-['Poppins'] outline-none"
              >
                {langs.map((lang) => (
                  <option
                    className="w-full text-center"
                    key={lang.value}
                    value={lang.value}
                  >
                    {lang.label}
                  </option>
                ))}
              </select>
              <div>
                <img src="" alt="" />
              </div>
            </div>

            {/* Auth Buttons */}
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-[var(--color-green)] w-[clamp(100px,7.65601vw,147px)] h-[clamp(40px,2.55235vw,49px)] flex items-center justify-center text-white hover:bg-[var(--color-green-hover)] px-4 py-2 rounded-[22px] text-[15px] font-[poppins] font-[700]"
                >
                  {t("login")}
                </button>
                <button
                  onClick={() => setIsSignupModalOpen(true)}
                  className=" w-[clamp(100px,7.65601vw,147px)] h-[clamp(40px,2.55235vw,49px)] flex items-center justify-center text-[var(--color-green)] hover:bg-[var(--color-green-hover)] hover:text-white px-4 py-2 rounded-[22px] text-[15px] font-[poppins] font-[700] border-[1px] border-[var(--color-green)]"
                >
                  {t("signup")}
                </button>
              </>
            ) : (
              <Link href="/profile" className="relative">
                <img
                  src={userData?.image || "/images/icons/userAvatar.png"}
                  alt="User Profile"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[var(--color-green-hover)] hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-md text-gray-700 hover:text-[var(--color-green)] hover:bg-gray-100"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="px-2 pt-14 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={` hover:text-[var(--color-green)] hover:border-b-2 hover:border-[var(--color-green)] block px-3 py-2  text-base font-medium ${
                pathname === item.href
                  ? "text-[var(--color-green)] border-b-2 border-[var(--color-green)]"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {!isLoggedIn ? (
            <div className="space-y-1 pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="text-[var(--color-green)] hover:text-[var(--color-green-hover)] block w-full text-left px-3 py-2 text-base font-medium"
              >
                Log in
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSignupModalOpen(true);
                }}
                className="bg-[var(--color-green)] hover:bg-[var(--color-green-hover)] text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign up
              </button>
            </div>
          ) : (
            <div className="flex w-full flex-col items-start justify-center gap-[30px] px-3 py-2">
              <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex items-center">
                  <Image
                    src={userData?.image || "/images/icons/userAvatar.png"}
                    alt="User Profile"
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                  />
                  <span className="ml-3 text-gray-700">{t("profile")}</span>
                </div>
              </Link>
              <div className="flex w-full items-center justify-center gap-[5px]">
                <div className="relative w-full">
                  <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="w-full flex items-center justify-between bg-transparent text-[#000] font-bold text-xs font-['Poppins'] cursor-pointer"
                  >
                    {langs.find((lang) => lang.value === locale)?.label}
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform ${
                        isLangOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isLangOpen && (
                    <div className="absolute flex flex-col items-start justify-center top-full left-0 mt-1 w-full bg-white shadow-lg rounded-md overflow-hidden">
                      {langs.map((lang) => (
                        <button
                          key={lang.value}
                          onClick={() => {
                            handleLanguageChange(lang.value);
                            setIsLangOpen(false);
                          }}
                          className="w-full text-center px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onOpenSignupModal={() => setIsSignupModalOpen(true)}
        onOpenForgotPasswordModal={() => setIsForgotPasswordModalOpen(true)}
      />
      <SignupModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        onOpenUserTypeModal={() => setIsUserTypeModalOpen(true)}
      />
      <ForgetPassword
        isOpen={isForgotPasswordModalOpen}
        onClose={() => setIsForgotPasswordModalOpen(false)}
      />
      <UserType
        isOpen={isUserTypeModalOpen}
        onClose={() => setIsUserTypeModalOpen(false)}
        token={token}
      />
    </nav>
  );
};

export default Navbar;
