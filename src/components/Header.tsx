import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Newspaper,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Heart,
  Shield,
  Users,
} from "lucide-react";
import logo from "../images/association_logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const mainNavLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "مبادراتنا", path: "/initiatives" },
    { name: "المشايخ", path: "/scholars" },
  ];

  const moreLinks = {
    label: "المزيد",
    items: [
      { name: "الأخبار", path: "/news", icon: Newspaper },
      { name: "مكتبة الدروس", path: "/lessons", icon: BookOpen },
      { name: "شهادات وتزكيات", path: "/testimonials", icon: MessageCircle },
      { name: "أسئلة شائعة", path: "/faq", icon: HelpCircle },
      { name: "الشفافية", path: "/transparency", icon: Shield },
    ],
  };

  const actionLinks = [
    { name: "حملة فلسطين", path: "/palestine", highlight: true },
    { name: "ساهم معنا", path: "/donate", primary: true },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = () =>
    moreLinks.items.some((item) => location.pathname === item.path);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-emerald-700 p-2 hover:bg-emerald-50 rounded-lg transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="القائمة"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          {/* Main Links */}
          {mainNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg font-medium transition text-sm ${
                isActive(link.path)
                  ? "bg-emerald-100 text-emerald-800"
                  : "text-emerald-700 hover:bg-emerald-50 hover:text-amber-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === "more" ? null : "more")
              }
              className={`px-3 py-2 rounded-lg font-medium transition text-sm flex items-center gap-1 ${
                isDropdownActive() || activeDropdown === "more"
                  ? "bg-emerald-100 text-emerald-800"
                  : "text-emerald-700 hover:bg-emerald-50 hover:text-amber-600"
              }`}
            >
              {moreLinks.label}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "more" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {activeDropdown === "more" && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeInDown z-50">
                {moreLinks.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                      isActive(item.path)
                        ? "bg-emerald-50 text-emerald-800"
                        : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    <item.icon className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact Link */}
          <Link
            to="/contact"
            className={`px-3 py-2 rounded-lg font-medium transition text-sm ${
              isActive("/contact")
                ? "bg-emerald-100 text-emerald-800"
                : "text-emerald-700 hover:bg-emerald-50 hover:text-amber-600"
            }`}
          >
            تواصل معنا
          </Link>

          {/* Separator */}
          <div className="w-px h-6 bg-gray-200 mx-2"></div>

          {/* Action Links */}
          {actionLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg font-bold transition text-sm ${
                link.primary
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"
                  : link.highlight
                  ? "bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
                  : isActive(link.path)
                  ? "bg-emerald-100 text-emerald-800"
                  : "text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo and Title */}
        <Link to="/" className="flex items-center gap-3">
          <div className="text-right">
            <h1 className="text-lg sm:text-xl font-bold text-emerald-800">
              جمعية الرحمة
            </h1>
            <p className="text-xs sm:text-sm text-emerald-600 hidden sm:block">
              للتربية والتنمية والأعمال الاجتماعية
            </p>
          </div>
          <img
            src={logo}
            alt="شعار جمعية الرحمة"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-emerald-100 px-4 py-4 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {/* Main Links */}
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 px-4 rounded-lg font-medium transition ${
                  isActive(link.path)
                    ? "bg-emerald-100 text-emerald-800"
                    : "text-emerald-700 hover:bg-emerald-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* More Section */}
            <div className="border-t border-emerald-100 mt-2 pt-2">
              <p className="px-4 py-2 text-sm text-gray-500 font-medium">
                المزيد
              </p>
              {moreLinks.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-3 px-4 rounded-lg font-medium flex items-center gap-3 transition ${
                    isActive(item.path)
                      ? "bg-emerald-100 text-emerald-800"
                      : "text-emerald-700 hover:bg-emerald-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-emerald-600" />
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div className="border-t border-emerald-100 mt-2 pt-2">
              <Link
                to="/contact"
                className={`py-3 px-4 rounded-lg font-medium transition ${
                  isActive("/contact")
                    ? "bg-emerald-100 text-emerald-800"
                    : "text-emerald-700 hover:bg-emerald-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                تواصل معنا
              </Link>
            </div>

            {/* Action Links */}
            <div className="border-t border-emerald-100 mt-2 pt-4 flex flex-col gap-2">
              <Link
                to="/palestine"
                className="py-3 px-4 rounded-lg font-bold text-center bg-red-50 text-red-700 border border-red-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                حملة فلسطين
              </Link>
              <Link
                to="/donate"
                className="py-3 px-4 rounded-lg font-bold text-center bg-emerald-600 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                ساهم معنا
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
