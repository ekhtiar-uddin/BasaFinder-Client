"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import { selectCurrentUser, setUser } from "@/redux/features/authSlice";
import { setFilters } from "@/redux/features/globalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout } from "@/services/AuthService";
import {
  Bell,
  ChevronDown,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  SearchCheck,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { SidebarTrigger } from "../ui/sidebar";
// import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  // const { user: userInfo, isLoading } = useUser();
  const userInfo = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  // console.log("here userinfo", userInfo);
  const [mobileMenu, setMobileMenu] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState("");

  const [scrollY, setScrollY] = useState(0);
  const isDashboardPage =
    pathname.includes("/landlord") ||
    pathname.includes("/tenant") ||
    pathname.includes("/admin");
  const isPropertiesPage = pathname.includes("/search");

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

  const handleLocationSearch = async () => {
    try {
      const trimmedQuery = searchQuery.trim();
      if (!trimmedQuery) return;

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          trimmedQuery
        )}&format=json`
      );
      const data = await response.json();
      if (!data || data.length === 0) return;

      const lat = data[0]?.lat;
      const lng = data[0]?.lon;

      // console.log("here", lat, lng);

      // problem1

      dispatch(
        setFilters({
          location: trimmedQuery,
          coordinates: [parseFloat(lng), parseFloat(lat)],
          // coordinates: [90.3731, 23.7465],
        })
      );

      const params = new URLSearchParams({
        location: trimmedQuery,
        lat: lat.toString(),
        lng: lng.toString(),
      });
      router.push(`/search?${params.toString()}`);
    } catch (error) {
      console.error("error search location:", error);
    }
  };

  const navs = (
    <>
      <Link href="/" className="md:mr-0 sm:mr-5">
        {" "}
        <button className={`${pathname === "/" ? "navBtnActive" : "navBtn"}`}>
          Home
        </button>
      </Link>
      <Link href="/search" className="md:mr-0 sm:mr-5 ">
        {" "}
        <button
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className=" transition-all duration-100 cursor-pointer hover:text-secondary-600  px-4 h-[60px] lg:block 3xs:hidden  hover:bg-[#ededee]  "
        >
          <span className="flex items-center  gap-1 mb-3">
            {" "}
            Features <ChevronDown className="w-[20px]" />
          </span>
        </button>
      </Link>
      <Link href="/search" className="md:mr-0 sm:mr-5">
        {" "}
        <button
          className={`${pathname === "/search" ? "navBtnActive" : "navBtn"}`}
        >
          Properties
        </button>
      </Link>
      <Link href="/pricing" className="md:mr-0 sm:mr-5">
        {" "}
        <button
          className={`${pathname === "/pricing" ? "navBtnActive" : "navBtn"}`}
        >
          Pricing
        </button>
      </Link>
      <Link href="/contact-us" className="md:mr-0 sm:mr-5">
        {" "}
        <button
          className={`${
            pathname === "/contact-us" ? "navBtnActive" : "navBtn"
          }`}
        >
          Contact Us
        </button>
      </Link>
      <Link href="/our-story">
        <button
          className={`${pathname === "/our-story" ? "navBtnActive" : "navBtn"}`}
        >
          Our Story
        </button>
      </Link>
    </>
  );

  // console.log("userInfo", userInfo?.role);

  return (
    <div className="w-full border-b-2 text-sm">
      <div className=" shadow-xl bg-secondary-500 text-white">
        <div
          className=" customWidth flex justify-center items-center w-full"
          style={{ height: `${NAVBAR_HEIGHT}px ` }}
        >
          <div className="flex justify-between customWidth">
            {!isDashboardPage && (
              <>
                <div className="flex gap-5  items-center    ">
                  <p className="font-semibold flex items-center gap-1   ">
                    <Phone className="w-[16px]" />{" "}
                    <span>+9 (681) 843-4596</span>
                  </p>
                  <p className="font-semibold 3xs:flex items-center gap-1 hidden ">
                    <Mail className="w-[16px]" /> <span>info@rentmode.com</span>
                  </p>
                </div>
                <div className="md:flex items-center  hidden ">
                  <p className="font-semibold  flex gap-1 items-center">
                    {/* Discover your perfect rental apartment with our advanced search
                     */}
                    <SearchCheck className="w-[20px]" />{" "}
                    <span className="">
                      Find your ideal rental home quickly{" "}
                      <span className="3xs:hidden 2xl:inline">
                        and easily with our powerful search tools.
                      </span>
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          scrollY > 30
            ? "border-b-2 border-b1 w-full fixed top-0 left-0  z-50  "
            : ""
        }  bg-white   h-[75px] flex justify-between  `}
      >
        <div className="customWidth flex justify-between items-center  ">
          <div className="flex items-center gap-4 md:gap-6">
            {isDashboardPage && (
              <div className="md:hidden">
                <SidebarTrigger />
              </div>
            )}

            <Link href="/" className="cursor-pointer" scroll={false}>
              <div className=" flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="Rentmode Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 bg-primary-700 p-1 rounded "
                />
                <div className="text-xl font-bold">
                  RENT
                  <span className=" font-light ">MODE</span>
                </div>
              </div>
            </Link>
          </div>
          {!isDashboardPage && (
            <>
              <div className={`3xs:hidden mt-3 lg:flex items-center gap-8   `}>
                {navs}
              </div>
            </>
          )}
          <div className="flex items-center gap-5 ">
            {userInfo ? (
              <>
                <div className="relative hidden md:block">
                  <MessageCircle className="w-6 h-6 cursor-pointer text-secondary-600 hover:text-primary-400" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-600 rounded-full"></span>
                </div>
                <div className="relative hidden md:block">
                  <Bell className="w-6 h-6 cursor-pointer text-secondary-600 hover:text-primary-400" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-600 rounded-full"></span>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
                    <Avatar>
                      {/* <AvatarImage src={userInfo.userInfo?.image} /> */}
                      <AvatarFallback className="bg-primary-600">
                        {userInfo.role?.[0].toUpperCase()}
                      </AvatarFallback>
                      <AvatarImage src={userInfo?.photo} />
                    </Avatar>

                    <p className=" hidden md:block">{userInfo?.name}</p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white text-primary-700">
                    <DropdownMenuItem
                      className="cursor-pointer sm:hidden block hover:!bg-primary-700 hover:!text-primary-100 font-bold"
                      onClick={() =>
                        router.push(
                          userInfo?.role?.toLowerCase() === "admin"
                            ? "/admin/users"
                            : userInfo?.role?.toLowerCase() === "landlord"
                            ? "/landlord/list/rental"
                            : "/tenant/applications",
                          { scroll: false }
                        )
                      }
                    >
                      Properties
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer sm:hidden block hover:!bg-primary-700 hover:!text-primary-100 font-bold"
                      onClick={() =>
                        router.push(
                          userInfo?.role?.toLowerCase() === "admin"
                            ? "/admin/users"
                            : userInfo?.role?.toLowerCase() === "landlord"
                            ? "/landlord/list/rental"
                            : "/tenant/applications",
                          { scroll: false }
                        )
                      }
                    >
                      Our Story
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100 font-bold"
                      onClick={() =>
                        router.push(
                          userInfo?.role?.toLowerCase() === "admin"
                            ? "/admin/profile"
                            : userInfo?.role?.toLowerCase() === "landlord"
                            ? "/landlord/profile"
                            : "/tenant/profile",
                          { scroll: false }
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
                          {
                            scroll: false,
                          }
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
                    className=" hover:bg-secondary-500 text-secondary-600  border-secondary-600 bg-transparent hover:text-white "
                  >
                    Sign In
                  </Button>
                </Link>
                <Link className="3xs:hidden sm:block" href="/register">
                  <Button
                    variant="secondary"
                    className="text-white bg-secondary-500  hover:text-primary-700 "
                  >
                    Sign Up
                  </Button>
                </Link>

                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="2xs:block lg:hidden hover:bg-[#f8fafc] cursor-pointer p-1.5 rounded-sm "
                >
                  <Menu className="w-8" />
                </button>
                {mobileMenu && (
                  <div
                    className="fixed inset-0 backdrop-blur-sm z-40"
                    onClick={() => setMobileMenu(false)}
                  />
                )}
                <div
                  className={`lg:hidden bg-white transition-all duration-300 fixed top-0 right-0 h-full shadow-xl z-50 border-l overflow-hidden w-80 ${
                    mobileMenu
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="p-4  ">
                    <button
                      onClick={() => setMobileMenu(!mobileMenu)}
                      className="2xs:block lg:hidden hover:bg-[#f8fafc] cursor-pointer p-2 rounded-sm"
                    >
                      <X className="w-[25px]" />
                    </button>
                    <div className="mt-10 mb-2">
                      <div className="flex justify-center ">
                        <Input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search by city or address"
                          className="w-full  max-w-lg rounded-none rounded-l-xl  bg-white h-12"
                        />
                        <Button
                          onClick={handleLocationSearch}
                          className="bg-secondary-500 text-white rounded-none rounded-r-xl  border-none hover:bg-secondary-600 h-12 "
                        >
                          Find it
                        </Button>
                      </div>
                    </div>

                    <div
                      className={`border-b pb-5 lg:hidden 3xs:flex flex-col items-center gap-1`}
                    >
                      {navs}
                    </div>

                    <div className="mt-8">
                      <Link href="/login">
                        <Button
                          variant="outline"
                          className="h-[40px] hover:bg-secondary-500/95 w-full bg-secondary-500  text-white "
                        >
                          Sign In
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {show && (
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className={`${
            scrollY > 30 ? "top-[74px]" : "top-[125px]"
          } fixed  left-0    bg-[#ededee] z-80 h-[70vh] w-full border-b-5 border-secondary-600`}
        >
          <div className="flex  mt-7  justify-center gap-8">
            <div>
              <h1 className="megaMenuTitle">Platform Capabilities</h1>
              <ul className="megaMenuList text-lg font-bold">
                <li>Business Operations</li>
                <li>Leasing</li>
                <li>Accounting and Payments</li>
                <li>Marketing</li>
                <li>Business Performance</li>
              </ul>
            </div>
            <div>
              <h1 className="megaMenuTitle">Key Features</h1>
              <ul className="megaMenuList">
                <li>Property Accounting</li>

                <li>Collect Rent Online</li>

                <li>Maintenance Requests</li>

                <li>1099 e-Filing</li>

                <li>Resident Center</li>

                <li>Tenant Screening</li>
                <li>Tenant background checks</li>
                <li>Property Management Website</li>

                <li>Online Leasing</li>

                <li>Buildium Marketplace</li>

                <li>Maintenance Contact Center</li>
              </ul>
            </div>
            <div>
              <h1 className="megaMenuTitle">Customer Success</h1>
              <ul className="megaMenuList">
                <li>Buildium Help Hub</li>
                <li>Onboarding</li>
                <li>Buildium Rewards</li>
                <li>Customer Care</li>
                <li>Data Security</li>
                <li>Resident Center Resources</li>
                <li>Customer Stories</li>
                <li>All Features</li>
              </ul>
            </div>
            <div>
              <h1 className="megaMenuTitle">Platform Capabilities</h1>
              <ul className="megaMenuList">
                <li>Business Operations</li>
                <li>Leasing</li>
                <li>Accounting and Payments</li>
                <li>Marketing</li>
                <li>Business Performance</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
