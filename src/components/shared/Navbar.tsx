"use client";
import { useWindowScroll } from "react-use";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import { selectCurrentUser, setUser } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout } from "@/services/AuthService";
import { Bell, ChevronDown, MessageCircle } from "lucide-react";
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
import { SidebarTrigger } from "../ui/sidebar";
// import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  // const { user: userInfo, isLoading } = useUser();
  const userInfo = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  // console.log("here userinfo", userInfo);
  const router = useRouter();
  const pathname = usePathname();
  const { y } = useWindowScroll();
  const [scrollY, setScrollY] = useState(0);
  const isDashboardPage =
    pathname.includes("/landlord") ||
    pathname.includes("/tenant") ||
    pathname.includes("/admin");

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

  // console.log("userInfo", userInfo?.role);

  return (
    <div className="w-full  ">
      <div className=" shadow-xl bg-secondary-500 text-white">
        <div
          className=" customWidth "
          style={{ height: `${NAVBAR_HEIGHT}px ` }}
        >
          <div className="flex justify-center items-center w-full pt-3 px-8 ">
            {!isDashboardPage && (
              <div className="md:flex items-center gap-5  hidden ">
                <p className=" text-primary-200 hidden lg:block">
                  {/* Discover your perfect rental apartment with our advanced search
                   */}
                  Find your ideal rental home with our powerful search tools
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          scrollY > 30
            ? "border-b-2 border-b1 w-full fixed top-0 left-0  z-50  "
            : ""
        }  bg-white   h-[95px] flex justify-between  `}
      >
        <div className="customWidth flex justify-between items-center  ">
          <div className="flex items-center gap-4 md:gap-6">
            {isDashboardPage && (
              <div className="md:hidden">
                <SidebarTrigger />
              </div>
            )}

            <Link href="/" className="cursor-pointer" scroll={false}>
              <div className="bg-red-500 flex items-center gap-3">
                {/* <Image
                  src="/logo.svg"
                  alt="Rentmode Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 "
                /> */}
                <div className="text-xl font-bold">
                  RENT
                  <span className=" font-light ">MODE</span>
                </div>
              </div>
            </Link>
          </div>
          {!isDashboardPage && (
            <>
              <div className={`mt-3 md:flex items-center gap-8   `}>
                <Link href="/search" className="md:mr-0 sm:mr-5 ">
                  {" "}
                  <button
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    className=" transition-all duration-100 cursor-pointer hover:text-secondary-600  px-4 h-[60px]  hover:bg-[#ededee]  "
                  >
                    <span className="flex items-center  gap-1 mb-3">
                      {" "}
                      Features <ChevronDown className="w-[20px]" />
                    </span>
                  </button>
                </Link>

                <Link href="/" className="md:mr-0 sm:mr-5">
                  {" "}
                  <button
                    className={`${
                      pathname === "/" ? "navBtnActive" : "navBtn"
                    }`}
                  >
                    Home
                  </button>
                </Link>
                <Link href="/search" className="md:mr-0 sm:mr-5">
                  {" "}
                  <button
                    className={`${
                      pathname === "/search" ? "navBtnActive" : "navBtn"
                    }`}
                  >
                    Properties
                  </button>
                </Link>
                <Link href="/blog" className="md:mr-0 sm:mr-5">
                  {" "}
                  <button
                    className={`${
                      pathname === "/blog" ? "navBtnActive" : "navBtn"
                    }`}
                  >
                    Blog
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
                    className={`${
                      pathname === "/our-story" ? "navBtnActive" : "navBtn"
                    }`}
                  >
                    Our Story
                  </button>
                </Link>
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
                            ? "/admin/users"
                            : userInfo?.role?.toLowerCase() === "landlord"
                            ? "/landlord/list/rental"
                            : "/tenant/applications",
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
                <Link href="/register">
                  <Button
                    variant="secondary"
                    className="text-white bg-secondary-500  hover:text-primary-700 "
                  >
                    Sign Up
                  </Button>
                </Link>
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
            scrollY > 30 ? "top-[84px]" : "top-[135px]"
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
