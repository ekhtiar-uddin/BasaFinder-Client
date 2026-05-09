"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import { selectCurrentUser, setUser } from "@/redux/features/authSlice";
import {
  initialState,
  setFilters,
  toggleFiltersFullOpen,
} from "@/redux/features/globalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout } from "@/services/AuthService";
import { Bell, Home, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
  const userInfo = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const router = useRouter();
  const pathname = usePathname();

  const isDashboardPage =
    pathname.includes("/landlord") ||
    pathname.includes("/tenant") ||
    pathname.includes("/admin");
  const isPropertiesPage = pathname.includes("/search");

  const isHomePage = pathname === "/";
  const isScrolled = scrollY > 20;

  // Requirement:
  // - Home page => transparent (but can become solid on scroll)
  // - Other pages => always solid white with border-bottom
  const hasSolidBg = useMemo(() => {
    if (!isHomePage) return true;
    return isScrolled;
  }, [isHomePage, isScrolled]);

  const navClassName = useMemo(() => {
    // shadow removed from all cases
    if (hasSolidBg) {
      return "bg-white/95 backdrop-blur-md border-b border-gray-100";
    }
    return "bg-transparent";
  }, [hasSolidBg]);

  const handleSignOut = async () => {
    await logout();
    window.location.href = "/";
    dispatch(setUser({ user: null, token: null }));
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen,
  );

  const handleGoHome = () => {
    router.push("/");
    dispatch(setFilters(initialState.filters));
    if (isFiltersFullOpen === false) return;
    dispatch(toggleFiltersFullOpen());
  };

  const navLinks = [
    { name: "Home", href: "/", active: pathname === "/" },
    { name: "Properties", href: "/search", active: pathname === "/search" },
    { name: "Pricing", href: "/pricing", active: pathname === "/pricing" },
    {
      name: "Contact Us",
      href: "/contact-us",
      active: pathname === "/contact-us",
    },
    {
      name: "Our Story",
      href: "/our-story",
      active: pathname === "/our-story",
    },
  ];

  return (
    <>
      {/* Backdrop when mobile menu open */}
      {mobileMenu && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40"
          onClick={() => setMobileMenu(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${navClassName}`}
        style={{ minHeight: `${NAVBAR_HEIGHT}px` }}
      >
        <div className="customWidth  mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            {/* ── Logo ── */}
            <div className="flex items-center gap-3">
              {isDashboardPage && (
                <div className="md:hidden">
                  <SidebarTrigger />
                </div>
              )}
              <Link
                href="/"
                onClick={isPropertiesPage ? handleGoHome : undefined}
                className="flex items-center gap-2 group cursor-pointer"
                scroll={false}
              >
                <div className="bg-[#f6920a] p-1.5 rounded-lg group-hover:bg-[#e08309] transition-colors flex-shrink-0">
                  <Home className="w-[18px] h-[18px] text-white" />
                </div>
                <span
                  className={`text-xl font-extrabold tracking-tight transition-colors ${
                    hasSolidBg ? "text-gray-900" : "text-white"
                  }`}
                >
                  RENT<span className="font-light">MODE</span>
                </span>
              </Link>
            </div>

            {/* ── Desktop Nav Links ── */}
            {!isDashboardPage && (
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <button
                      onClick={
                        link.href === "/" && isPropertiesPage
                          ? handleGoHome
                          : undefined
                      }
                      className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer hover:text-[#f6920a]  ${
                        link.active
                          ? "text-secondary-500"
                          : hasSolidBg
                            ? "text-gray-600"
                            : "text-white"
                      }`}
                    >
                      {link.name}
                    </button>
                  </Link>
                ))}
              </div>
            )}

            {/* ── Right: Auth / User + Hamburger ── */}
            <div className="flex items-center gap-3">
              {userInfo ? (
                <>
                  {/* Notification icons – desktop */}
                  <div className="relative hidden md:block">
                    <MessageCircle
                      className={`w-5 h-5 cursor-pointer hover:text-[#f6920a] transition-colors ${
                        hasSolidBg ? "text-gray-600" : "text-gray-200"
                      }`}
                    />
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#f6920a] rounded-full" />
                  </div>
                  <div className="relative hidden md:block">
                    <Bell
                      className={`w-5 h-5 cursor-pointer hover:text-[#f6920a] transition-colors ${
                        hasSolidBg ? "text-gray-600" : "text-gray-200"
                      }`}
                    />
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#f6920a] rounded-full" />
                  </div>

                  {/* User dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-[#f6920a] text-white text-sm font-semibold">
                          {userInfo.role?.[0].toUpperCase()}
                        </AvatarFallback>
                        <AvatarImage src={userInfo?.photo} />
                      </Avatar>
                      <span
                        className={`hidden md:block text-sm font-medium transition-colors ${
                          hasSolidBg ? "text-gray-900" : "text-white"
                        }`}
                      >
                        {userInfo?.name}
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white text-primary-700">
                      <DropdownMenuItem
                        className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100 font-bold"
                        onClick={() =>
                          router.push(
                            userInfo?.role?.toLowerCase() === "admin"
                              ? "/admin/profile"
                              : userInfo?.role?.toLowerCase() === "landlord"
                                ? "/landlord/profile"
                                : "/tenant/profile",
                            { scroll: false },
                          )
                        }
                      >
                        Go to Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-primary-200" />
                      <DropdownMenuItem
                        className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
                        onClick={() =>
                          router.push(
                            `/${userInfo.role?.toLowerCase()}/settings`,
                            { scroll: false },
                          )
                        }
                      >
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className={`text-sm font-medium border transition-colors ${
                        hasSolidBg
                          ? "border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50"
                          : "border-white/40 text-gray-800 bg-white hover:bg-white/90"
                      }`}
                    >
                      Sign In
                    </Button>
                  </Link>
                  {/* Sign Up hidden on very small screens, shown from sm+ */}
                  <Link className="hidden sm:block" href="/register">
                    <Button className="bg-[#f6920a] hover:bg-[#e08309] text-white text-sm font-medium shadow-sm transition-colors">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}

              {/* Hamburger – shown on <lg, not on dashboard (sidebar handles) */}
              {!isDashboardPage && (
                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className={`lg:hidden p-2 rounded-lg transition-colors ${
                    hasSolidBg
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Mobile Slide-in Drawer ── */}
        <div
          className={`lg:hidden bg-white transition-all duration-300 fixed top-0 right-0 h-full shadow-xl z-50 border-l overflow-hidden
            w-[calc(100vw-40px)] xs:w-80
            ${mobileMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <div className="p-4 flex flex-col h-full overflow-y-auto">
            {/* Drawer header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="bg-[#f6920a] p-1.5 rounded-lg">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                  RENT<span className="font-light">MODE</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenu(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col border-b border-gray-100 pb-4 mb-4 gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <button
                    onClick={() => {
                      setMobileMenu(false);
                      if (link.href === "/" && isPropertiesPage) handleGoHome();
                    }}
                    className={`w-full text-left text-sm font-medium px-3 py-3 rounded-lg transition-colors hover:text-[#f6920a] hover:bg-orange-50 ${
                      link.active
                        ? "text-[#f6920a] bg-orange-50"
                        : "text-gray-600"
                    }`}
                  >
                    {link.name}
                  </button>
                </Link>
              ))}
            </div>

            {/* Auth / User actions */}
            {!userInfo ? (
              <div className="flex flex-col gap-3">
                <Link href="/login" onClick={() => setMobileMenu(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 font-medium"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setMobileMenu(false)}>
                  <Button className="w-full bg-[#f6920a] hover:bg-[#e08309] text-white font-medium">
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                {/* User info header */}
                <div className="flex items-center gap-3 px-3 py-3 mb-2 bg-gray-50 rounded-xl">
                  <Avatar className="w-9 h-9">
                    <AvatarFallback className="bg-[#f6920a] text-white text-sm font-semibold">
                      {userInfo.role?.[0].toUpperCase()}
                    </AvatarFallback>
                    <AvatarImage src={userInfo?.photo} />
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-none">
                      {userInfo?.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 capitalize">
                      {userInfo?.role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMobileMenu(false);
                    router.push(
                      userInfo?.role?.toLowerCase() === "admin"
                        ? "/admin/profile"
                        : userInfo?.role?.toLowerCase() === "landlord"
                          ? "/landlord/profile"
                          : "/tenant/profile",
                    );
                  }}
                  className="w-full text-left text-sm font-semibold px-3 py-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-[#f6920a] transition-colors"
                >
                  Go to Dashboard
                </button>
                <button
                  onClick={() => {
                    setMobileMenu(false);
                    router.push(`/${userInfo.role?.toLowerCase()}/settings`);
                  }}
                  className="w-full text-left text-sm px-3 py-3 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-[#f6920a] transition-colors"
                >
                  Settings
                </button>
                <button
                  onClick={() => {
                    setMobileMenu(false);
                    handleSignOut();
                  }}
                  className="w-full text-left text-sm px-3 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors mt-1"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
