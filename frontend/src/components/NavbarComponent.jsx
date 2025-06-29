import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { DropdownComponent } from "./dropdownComponent";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCartDataCountApiCall } from "../APIs/bookSaleingApi";

export function StickyNavbar({ title }) {
  const [hideNav, setHideNav] = useState(window.innerWidth <= 700);
  const [openNav, setOpenNav] = useState(false);
  const [cartDataCount, setCartDataCount] = useState(0);

    useEffect(()=>{
          getCartDataCountApiCall().then(
               (res)=>{
               console.log(res.data)
   setCartDataCount(res.data)
               }
           ).catch(
               (err)=>{console.log(err)}
           )
  },[])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setHideNav(true);
        setOpenNav(false);
      } else {
        setHideNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call it once on mount
    handleResize();

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log("openNav ", openNav);
  console.log("hideNav ", hideNav);

  const navList = (
    <ul
      className={` mb-4 flex  ${
        hideNav ? "flex-col" : "flex-row"
      } gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 `}
    >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="  font-normal"
      >
        <Link to={`/myAccount/signUp`}>My Account</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="  font-normal"
      >
        <Link to={'/checkout'}>
          Checkout
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="  font-normal"
      >
        <Link to={`/myAccount/signIn`}>Sign In</Link>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="  font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography> */}
    </ul>
  );

  const sectionList = (
    <ul
      className={` lg:mr-50 md:mr-0 mb-4 flex  ${
        hideNav ? "flex-col" : "flex-row"
      } gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 `}
    >
      <li>
        {" "}
        <DropdownComponent
          title={"HOME"}
          data={["HOME 1", "HOME 2", "HOME 3", "HOME 4"]}
        />
      </li>
      <li>
        {" "}
        <DropdownComponent
          title={"SHOP"}
          data={["SHOP 1", "SHOP 2", "SHOP 3", "SHOP 4"]}
        />
      </li>
      <li>
        {" "}
        <DropdownComponent
          title={"PRODUCT"}
          data={["PRODUCT 1", "PRODUCT 2", "PRODUCT 3", "PRODUCT 4"]}
        />
      </li>
      <li>
        {" "}
        <DropdownComponent
          title={"BLOG"}
          data={["BLOG 1", "BLOG 2", "BLOG 3", "BLOG 4"]}
        />
      </li>
      <li>
        {" "}
        <DropdownComponent
          title={"PAGES"}
          data={["PAGES 1", "PAGES 2", "PAGES 3", "PAGES 4"]}
        />
      </li>
    </ul>
  );

  return (
    <div className="  w-[calc(100%+48px)] overflow-hidden px-5 lg:px-20">
      <Navbar
        className={`sticky top-0 z-10 h-max max-w-full rounded-none shadow-none  bg-white text-black mt-4 `}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            {title == "headerNavbar" ? (
              <DropdownComponent
                title={"INR"}
                data={["INR", "USD", "GBP", "EUR"]}
              />
            ) : (
              <i
                style={{
                  color: "oklch(87.9% 0.169 91.605)",
                  fontFamily: "emoji",
                }}
                className="text-5xl font-emoji"
              >
                Koparion
              </i>
            )}
          </Typography>
          <div className="flex items-center gap-5 ">
            {!hideNav ? (
              <>
                {title == "headerNavbar" ? (
                  <div className="mr-4 lg:block">{navList}</div>
                ) : (
                  <div className="mr-4 flex">
                    {sectionList}
                    {title != "headerNavbar" ? (
                      <div className="flex items-center  lg:mr-[5rem]">
                        <Link to={`/addToCart`}>
                        <FaShoppingCart size={50} />
                                      <div className="bg-yellow-400 text-white text-xl text-center p-1 sticky -mt-6 rounded-full w-10 h-10">{cartDataCount}</div>

                        </Link>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </>
            ) : (
              <IconButton
                variant="text"
                className="ml-auto  mb-5 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            )}
          </div>
        </div>

        {title == "headerNavbar" ? (
          <MobileNav open={openNav}>{navList}</MobileNav>
        ) : (
          <MobileNav open={openNav}>
            {sectionList}
            <Link to={`/addToCart`}>
              <FaShoppingCart size={30} />
               <div className="bg-yellow-400 text-white text-sm text-center  sticky -mt-5 rounded-full w-5 h-5">{cartDataCount}</div>

            </Link>
          </MobileNav>
        )}
      </Navbar>
    </div>
  );
}
