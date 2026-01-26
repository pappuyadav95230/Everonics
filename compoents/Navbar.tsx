"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Use the specific hex colors for styling consistency
const BRAND_ORANGE = "#f26b36"; // Accent Color
const BRAND_BLACK_TEXT = "#1A1A1A"; // Main Text Color
const BRAND_GRAY_HOVER = "#F0F0F0"; // Light Gray Hover background

// --- Custom Nav Item Data (Unchanged) ---
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services", // Grouping link
    dropdown: [
      { name: "Web Solutions", href: "/services/web" },
      { name: "Mobile Apps", href: "/services/mobile" },
      { name: "Digital Marketing", href: "/services/marketing" },
    ],
  },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const closeAllMenus = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const isParentActive = (parentHref: string) => {
    if (pathname === parentHref && parentHref === "/") return true;
    if (pathname.startsWith(parentHref) && parentHref !== "/") return true;

    const servicesItem = navItems.find((item) => item.name === "Services");
    if (servicesItem && servicesItem.dropdown) {
      return servicesItem.dropdown.some((subItem) => pathname === subItem.href);
    }
    return false;
  };

  // --- Mobile and Desktop Nav Link Component ---
  const NavLink: React.FC<{
    item: (typeof navItems)[0];
    isMobile: boolean;
  }> = ({ item, isMobile }) => {
    const isActive = isParentActive(item.href) || pathname === item.href;
    const isDropdown = !!item.dropdown;

    // Base classes for a nav link
    const baseClasses = `transition duration-300 font-bold  whitespace-nowrap text-center px-4 py-2 ${
      isActive ?
        `text-[${BRAND_ORANGE}] bg-[${BRAND_GRAY_HOVER}] rounded-full`
      : `text-[${BRAND_BLACK_TEXT}] hover:text-[${BRAND_ORANGE}] hover:bg-[${BRAND_GRAY_HOVER}] rounded-full`
    }`;

    // Dropdown Logic
    if (isDropdown) {
      return (
        <div className="relative group">
          <button
            onClick={() => {
              if (isMobile) {
                setDropdownOpen(!dropdownOpen);
              }
            }}
            // Link button (does not take full container width)
            className={`flex items-center justify-center ${isMobile ? "py-2 w-full" : "py-0"} ${baseClasses}`}
            style={{ color: isActive ? BRAND_ORANGE : BRAND_BLACK_TEXT }}
            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
          >
            {item.name}
            <FiChevronDown
              className={`ml-1 transition-transform ${isDropdown && (dropdownOpen || !isMobile) ? "rotate-180" : ""}`}
            />
          </button>
          {/* DROPDOWN CONTENT */}
          <AnimatePresence>
            {
              isMobile ?
                // Mobile Dropdown (Indented, inside the mobile menu)
                isOpen &&
                dropdownOpen &&
                item.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 space-y-2 mt-1"
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block text-sm font-bold transition-colors duration-300 py-1.5 ${
                          pathname === subItem.href ?
                            `text-[${BRAND_ORANGE}]`
                          : `text-[${BRAND_BLACK_TEXT}]/70 hover:text-[${BRAND_ORANGE}]`
                        }`}
                        onClick={closeAllMenus}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )
                // Desktop Dropdown (OUTSIDE the nav pill)
              : dropdownOpen &&
                item.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-52 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-100"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                       className={`block py-2 text-center text-sm font-bold text-[${BRAND_BLACK_TEXT}] hover:bg-gray-100 hover:text-[${BRAND_ORANGE}] transition-colors ${
                          pathname === subItem.href ?
                            `bg-gray-100 text-[${BRAND_ORANGE}]`
                          : ""
                        }`}
                        onClick={closeAllMenus}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )

            }
          </AnimatePresence>
        </div>
      );
    }

    // Standard Link
    return (
      <Link
        href={item.href}
        className={`${baseClasses} ${isMobile ? "block py-2 w-full" : ""}`}
        style={{ color: isActive ? BRAND_ORANGE : BRAND_BLACK_TEXT }}
        onClick={closeAllMenus}
      >
        {item.name}
      </Link>
    );
  };
  // ---------------------------------------------

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.1,
          }}
          // Inner container for the "floating" and rounded appearance
          // >>>>>>>>>>>>>>>>>>>> FIX APPLIED HERE <<<<<<<<<<<<<<<<<<<<
          className={`mx-auto mt-4 rounded-full shadow-xl overflow-visible 
                     bg-white backdrop-blur-md border-2 border-[${BRAND_ORANGE}]`} 
        >
          {/* Adjusted padding/height for the pill shape content */}
          <div className="px-6 sm:px-6 py-4">
            {/* Main Flex Container: Logo (Left) vs Nav Group (Right) */}
            <div className="flex justify-between items-center h-10">
              {/* 1. Logo (Left Side) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="shrink-0"
              >
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={closeAllMenus}
                >
                  {/* LOGO IMAGE */}
                  <img
                    src="/image/logo.jpeg"
                    alt="Everonic Solutions Logo"
                    className="h-12 w-auto "
                  />
                </Link>
              </motion.div>

              {/* 2. Desktop Nav Group (Right Side) */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-8"> 
                {navItems.map((item) => (
                  <NavLink key={item.name} item={item} isMobile={false} />
                ))}
              </div>

              {/* 3. Mobile menu toggle (Far Right) */}
              <motion.div
                className="md:hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                    if (isOpen) setDropdownOpen(false);
                  }}
                  className={`p-2 focus:outline-none transition duration-300 rounded-full ${
                    isOpen ?
                      `bg-[${BRAND_GRAY_HOVER}] text-[${BRAND_ORANGE}]`
                    : `text-[${BRAND_BLACK_TEXT}] hover:bg-[${BRAND_GRAY_HOVER}]`
                  }`}
                  aria-label="Toggle menu"
                >
                  {isOpen ?
                    <FiX size={24} />
                  : <FiMenu size={24} />}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Nav Dropdown - Sits outside and below the pill */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mx-auto mt-2 w-full bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-1.5">
                {navItems.map((item) => (
                  <NavLink key={item.name} item={item} isMobile={true} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;