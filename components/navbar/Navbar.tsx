"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginModal from "../auth/LoginModal";
import { usePathname } from "next/navigation";
import SignupModal from "../auth/SignupModal";
import ForgetPassword from "../auth/ForgetPassword";
import { useAppSelector } from "@/libs/store/hooks";
import UserType from "../auth/UserType";

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

  useEffect(() => {
    if (userData && token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userData, token]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Players", href: "/players" },
    { label: "Agents", href: "/agents" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <nav className="w-full ">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[100px] items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/row_logo.png"
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
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-[var(--color-green)] w-[clamp(100px,7.65601vw,147px)] h-[clamp(40px,2.55235vw,49px)] flex items-center justify-center text-white hover:bg-[var(--color-green-hover)] px-4 py-2 rounded-[22px] text-[15px] font-[poppins] font-[700]"
                >
                  Log in
                </button>
                <button
                  onClick={() => setIsSignupModalOpen(true)}
                  className=" w-[clamp(100px,7.65601vw,147px)] h-[clamp(40px,2.55235vw,49px)] flex items-center justify-center text-[var(--color-green)] hover:bg-[var(--color-green-hover)] hover:text-white px-4 py-2 rounded-[22px] text-[15px] font-[poppins] font-[700] border-[1px] border-[var(--color-green)]"
                >
                  Sign up
                </button>
              </>
            ) : (
              <Link href="/profile" className="relative">
                <img
                  src={userData.image || "/images/icons/userAvatar.png"}
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
              className={`text-gray-700 hover:text-[var(--color-green)] hover:border-b-2 hover:border-[var(--color-green)] block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href
                  ? "text-[var(--color-green)] border-b-2 border-[var(--color-green)]"
                  : ""
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
            <div className="flex items-center px-3 py-2">
              <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex items-center">
                  <Image
                    src="/images/default-avatar.png"
                    alt="User Profile"
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                  />
                  <span className="ml-3 text-gray-700">My Profile</span>
                </div>
              </Link>
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
      />
    </nav>
  );
};

export default Navbar;
