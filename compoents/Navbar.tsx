"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced color palette for modern design
const BRAND_ORANGE = "#f26b36";
const BRAND_BLACK_TEXT = "#1A1A1A";
const BRAND_GRAY_HOVER = "#F0F0F0";
const BRAND_WHITE = "#FFFFFF";
const BRAND_DARK_ORANGE = "#d9531e";

// Define the nav item type to support dropdowns
type NavItem = {
  name: string;
  href: string;
  dropdown?: Array<{ name: string; href: string }>;
};

// --- Custom Nav Item Data ---
const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  {
    name: "Products",
    href: "/products",
    dropdown: [
      { name: "Location Tracker", href: "https://locationtrack.in/" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const isParentActive = (parentHref: string) => {
    if (pathname === parentHref && parentHref === "/") return true;
    if (pathname.startsWith(parentHref) && parentHref !== "/") return true;

    const productsItem = navItems.find((item) => item.name === "Products");
    if (productsItem && productsItem.dropdown) {
      return productsItem.dropdown.some((subItem) => pathname === subItem.href);
    }
    return false;
  };

  // --- Enhanced Mobile and Desktop Nav Link Component ---
  const NavLink: React.FC<{
    item: NavItem;
    isMobile: boolean;
  }> = ({ item, isMobile }) => {
    const isActive = isParentActive(item.href) || pathname === item.href;
    const isDropdown = !!item.dropdown;

    // Enhanced base classes with modern styling
    const baseClasses = `transition-all duration-300 font-semibold whitespace-nowrap text-center px-5 py-2.5 rounded-full ${isActive
        ? `text-white bg-gradient-to-r from-[${BRAND_ORANGE}] to-[${BRAND_DARK_ORANGE}] shadow-lg`
        : `text-[${BRAND_BLACK_TEXT}] hover:text-white hover:bg-gradient-to-r hover:from-[${BRAND_ORANGE}] hover:to-[${BRAND_DARK_ORANGE}] hover:shadow-md`
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
            className={`flex items-center justify-center ${isMobile ? "py-2 w-full" : "py-0"
              } ${baseClasses}`}
            style={{
              color: isActive ? BRAND_WHITE : BRAND_BLACK_TEXT,
              background: isActive
                ? `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_DARK_ORANGE})`
                : "transparent",
            }}
            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
          >
            {item.name}
            <FiChevronDown
              className={`ml-2 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>
          {/* DROPDOWN CONTENT */}
          <AnimatePresence>
            {isMobile
              ? // Mobile Dropdown (Indented, inside the mobile menu)
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
                      className={`block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg mx-2 ${pathname === subItem.href
                          ? `text-white bg-gradient-to-r from-[${BRAND_ORANGE}] to-[${BRAND_DARK_ORANGE}]`
                          : `text-[${BRAND_BLACK_TEXT}]/80 hover:text-brand-orange hover:bg-orange-50`
                        }`}
                      onClick={closeAllMenus}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              )
              : // Desktop Dropdown (OUTSIDE the nav pill)
              dropdownOpen &&
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
                      className={`block px-5 py-3 text-sm font-medium text-center transition-all duration-200 hover:bg-orange-50 hover:text-brand-orange rounded-lg mx-2 ${pathname === subItem.href
                          ? `bg-gradient-to-r from-[${BRAND_ORANGE}] to-[${BRAND_DARK_ORANGE}] text-white`
                          : `text-[${BRAND_BLACK_TEXT}]`
                        }`}
                      onClick={closeAllMenus}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
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
          className={`mx-auto mt-4 rounded-full shadow-2xl overflow-visible transition-all duration-300 ${scrolled
              ? `bg-white/90 backdrop-blur-xl border-2 border-[${BRAND_ORANGE}]/30`
              : `bg-white backdrop-blur-md border-2 border-[${BRAND_ORANGE}]`
            }`}
          style={{
            boxShadow: scrolled
              ? `0 10px 30px -10px rgba(242, 107, 54, 0.2)`
              : `0 20px 40px -15px rgba(242, 107, 54, 0.3)`,
          }}
        >
          <div className="px-6 sm:px-8 py-4">
            <div className="flex justify-between items-center h-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="shrink-0"
              >
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={closeAllMenus}
                >
                  <div className="relative">
                    <img
                      src="/image/logo.jpeg"
                      alt="Everonic Solutions Logo"
                      className="h-14 w-auto transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[${BRAND_ORANGE}] to-[${BRAND_DARK_ORANGE}] rounded-full border-2 border-white"></div>
                  </div>
                </Link>
              </motion.div>

              {/* 2. Desktop Nav Group (Right Side) */}
              <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
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
                  className={`p-3 focus:outline-none transition-all duration-300 rounded-full ${isOpen
                      ? `bg-gradient-to-r from-[${BRAND_ORANGE}] to-[${BRAND_DARK_ORANGE}] text-white shadow-lg`
                      : `text-[${BRAND_BLACK_TEXT}] hover:bg-[${BRAND_GRAY_HOVER}] hover:shadow-md`
                    }`}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Nav Dropdown - Enhanced floating card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mx-auto mt-3 w-full max-w-md bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-[${BRAND_ORANGE}]/20 overflow-hidden"
              style={{
                boxShadow: `0 25px 50px -12px rgba(242, 107, 54, 0.25)`,
              }}
            >
              <div className="px-5 pt-4 pb-6 space-y-2">
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
