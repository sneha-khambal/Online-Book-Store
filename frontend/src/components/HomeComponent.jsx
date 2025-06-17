import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FaCalendar, FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { DropdownComponent } from "./dropdownComponent";
import ChildrenBookComponent from "./childrenBookComponent";
import { SliderComponent } from "./SliderComponent";

import {
  FaShippingFast,
  FaPhone,
  FaGetPocket,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { StickyNavbar } from "./NavbarComponent";
import { MobileNav } from "@material-tailwind/react";
import { ResponsiveNav } from "./ResponsiveNav";
import { motion } from "framer-motion";
import useChildrenBooksHook from "../redux/reduxHook";
import { FaTwitter, FaGoogle, FaFacebook, FaYoutube } from 'react-icons/fa';


const HomeComponent = () => {
  const categoryList = [
    "Book",
    "Usedbooks",
    "Sales Off",
    "Biographies",
    "Cookbooks",
    "Education",
    "Engineering",
  ];
  const showCategories = 5;
  const [showListItem, setListItem] = useState(showCategories);
  const [categories, setCategories] = useState(false);

  // book section
  const [bookType, setBookType] = useState("new arrival");
  const [bookSectionType, setBookSectionType] = useState("book");

       const {
      childrenBooksData 
   } = useChildrenBooksHook();

  return (
    // <div>
    //      <Link to={`/books/children`}>
    // Children
    // </Link>
    //   <Link to={`/books/comics`}>
    // Comics
    // </Link></div>

    <>
      <header className="flex">
        <StickyNavbar title="headerNavbar" />
      </header>
      <hr className="z-10" />
      <section className="flex justify-between py-10   ">
        <StickyNavbar />
      </section>
      <section id="searchBox" className="bg-gray-100 w-full py-5">
        <div className="group relative">
          <h4 className="bg-black text-white rounded m-5 px-5 flex justify-between bg-cover ">
            <strong className="m-1">All Categories</strong>
            <div
              className=" m-1"
              onClick={() => {
                setCategories(!categories);
              }}
            >
              <ResponsiveNav openNav={categories} />
            </div>
          </h4>
          <div>
            {categories ? (
              <MobileNav open={categories}>
                <motion.ul
                  initial={{ y: "-5vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 60,
                    damping: 12,
                  }}
                  id="categoriesList"
                  className="w-full absolute bg-white border-solid-gray rounded shadow-lg z-10 items-center mx-15 "
                  style={{
                    position: "absolute",
                    zIndex: "10",
                    background: "white",
                    width: "-webkit-fill-available",
                    margin: "0 20px 0 20px",
                    borderRadius: "5px",
                  }}
                >
                  {categoryList &&
                    categoryList
                      .slice(0, showListItem)
                      .map((item, index) => <li className="p-2">{item}</li>)}

                  {showListItem <= showCategories ? (
                    <li
                      className="p-2  "
                      onClick={() => {
                        setListItem(categoryList.length);
                      }}
                    >
                      <span className="bg-yellow-500 rounded text-center mb-4 w-[10px] px-2 py-1 text-white">
                        {" "}
                        + More Categories{" "}
                      </span>
                    </li>
                  ) : (
                    <li
                      className="p-2"
                      onClick={() => {
                        setListItem(showCategories);
                      }}
                    >
                      <span className="bg-yellow-500 rounded text-center mb-4 w-[10px] px-2 py-1 text-white">
                        {" "}
                        - Less Menu{" "}
                      </span>
                    </li>
                  )}
                </motion.ul>
              </MobileNav>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* <div id="searchBooks">
      <input type="search" name="" id="" />
   <button>Search</button>
    </div> */}
      </section>
      <section id="shopNow" className="bg-red-300 h-100 mb-10">
        {/* <h1 className="text-2xl text-white text-center mb-5">Do it Yourself</h1>
        <div className="grid grid-cols-2 w-30 m-auto ">
          <span className="bg-yellow-500 rounded p-3 text-white">-20%</span>
          <span className="text-orange-500 block mx-2">
            {" "}
            <strike className="block  text-white">80.00</strike>60.00
          </span>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-30 mt-5"
          >
            Shop Now
          </a>
        </div> */}
        <SliderComponent
          bgImage={[
            `/src/assets/portrait-4489207_1280.jpg`,
            `/src/assets/book-1835799_1280.jpg`,
            `/src/assets/colorful-791927_1280.jpg`,
          ]}
        />
      </section>
      <section
        id="bookSection"
        className="grid grid-cols-4 grid-row-5   gap-5 my-20 mt-6 m-auto w-full px-5 lg:px-20"
      >
        <div
          className="row-span-6 col-span-2   rounded shadow h-100 bg-cover "
          style={{
            backgroundImage: "url('/src/assets/books-3482286_1280.jpg')",
          }}
        >
          <small>Comics Books</small>
        </div>
        <div
          className="col-span-2 row-span-4 bg-yellow-500 rounded shadow   bg-cover "
          style={{ backgroundImage: "url('/src/assets/art-2369664_1280.jpg')" }}
        >
          <small>Arts & Photography Book</small>
          <img src="/" alt="" />
        </div>
        <div
          className="col-span-1 row-span-2 bg-blue-500 rounded shadow   bg-cover "
          style={{
            backgroundImage: "url('/src/assets/money-4838516_1280.jpg')",
          }}
        >
          <small>Bussiness & Money Books</small>
          <img src="/" alt="" />
        </div>
        <div
          className="col-span-1 row-span-2 bg-green-500 rounded shadow   bg-cover "
          style={{
            backgroundImage: "url('/src/assets/boys-3396713_1280.jpg')",
          }}
        >
          <small>Children's Books</small>
          <img src="/" alt="" />
        </div>
        <div
          className="col-span-4  bg-orange-500 rounded shadow h-50 bg-cover "
          style={{
            backgroundImage: "url('/src/assets/summer-2880261_1280.jpg')",
          }}
        >
          <small>Travel Books</small>
          <img src="/" alt="" />
        </div>
      </section>
      <section className=" my-15 m-auto w-full px-5 lg:px-20">
        <div className="text-center my-15">
          <h1 className="text-2xl font-bold mb-4">TOP INTERESTING</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            iusto nisi ut optio minima accusamus delectus tempore libero, rem
            ipsum eius. Vitae unde quod eligendi nobis rem, possimus quo quidem.
          </p>
        </div>
        <ul className="grid lg:grid-cols-3 md:grid-cols-2  place-items-center">
          <li
            className={`hover:text-orange-500 ${bookType == "new arrival" ?'text-orange-500': 'text-vlack-500'}`}
            onClick={() => {
              setBookType("new arrival");
            }}
          >
            NEW ARRIVAL
          </li>
          <li
            className={`hover:text-orange-500 ${bookType == "on sale" ?'text-orange-500': 'text-vlack-500'}`}
            onClick={() => {
              setBookType("on sale");
            }}
          >
            ONSALE
          </li>
          <li
           className={`hover:text-orange-500 ${bookType == "featured" ?'text-orange-500': 'text-vlack-500'}`}
            onClick={() => {
              setBookType("featured");
            }}
          >
            FEATURED PRODUCTS
          </li>
        </ul>

        <div className="mt-10">
          <SliderComponent bookType={bookType} slide={"horizontal"} />
        </div>
      </section>
      <section className=" my-15 m-auto w-full px-5 lg:px-20">
        <div className="flex w-full h-15 ">
          <div className="img-gradient">
            <img
              src="./src/assets/old-books-436498_1280.jpg"
              className="w-full h-full object-cover"
            />
            <div className="flex items-center justify-center text-white flex-col top-0 left-0 absolute bottom-[10px] pl-5 ">
              <p className="text-sm pt-5">
                G. Dummy Books & Spiritual Traveler Press
              </p>
              <h2 className="text-1xl font-bold mb-4">Sale up to 30% off</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="my-15 m-auto w-full px-5 lg:px-20">
       
    
{childrenBooksData.length >0 ?  <ul className="grid lg:grid-cols-3  md:grid-cols-2 relative mt-14">
          <li >
               <span
            className={`flex justify-center hover:text-orange-500  ${bookSectionType == "book" ?'text-orange-500': 'text-vlack-500'}`}
            onClick={() => {
              setBookSectionType("book");
            }}
          >
            BOOK
          </span>
            <div  >
              <SliderComponent bookType={"book"} slide={"vertical"} />
            </div>
          </li>
          <li>
               <span
            className={` flex justify-center hover:text-orange-500 ${bookSectionType == "on sale" ?'text-orange-500': 'text-vlack-500'}`}
            onClick={() => {
              setBookSectionType("on sale");
            }}
          >
            AUDIO BOOK 
          </span>
          <div >
            <SliderComponent bookType={"audio"} slide={"vertical"} />
          </div>
          </li>
          <li>
            <span
            className={`flex justify-center hover:text-orange-500   ${bookSectionType == "featured" ?'text-orange-500': 'text-black-500'}`}
            onClick={() => {
              setBookSectionType("featured");
            }} 
          >
            CHILDREN'S BOOK
          </span>
        <div  >
            <SliderComponent bookType={"childrens"} slide={"vertical"} />
          </div>
          </li>
        </ul>: 
       <div class="flex justify-center text-center  p-10">Loading...</div>
        }
       
      </section>

      <section className=" blog text-center my-15 m-auto w-full px-5 lg:px-20">
        <h1 className="text-2xl my-20">Latest from our blog</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-5 place-items-center">
          <div className="grid gap-4">
            <img src="/src/assets/computer-3861322_1280.jpg" alt="" />
            <h1>Lorem, ipsum dolor.</h1>
            <small>admin</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil
              incidunt ut soluta voluptate aliquid assumenda rerum ipsam aliquam
              voluptates!
            </p>
          </div>
          <div className="grid gap-4">
            <img src="/src/assets/computer-3861322_1280.jpg" alt="" />
            <h1>Lorem, ipsum.</h1>
            <small>admin</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil
              incidunt ut soluta voluptate aliquid assumenda rerum ipsam aliquam
              voluptates!
            </p>
          </div>
          <div className="grid gap-4">
            <img src="/src/assets/computer-3861322_1280.jpg" alt="" />
            <h1>Lorem ipsum dolor sit.</h1>
            <small>admin</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil
              incidunt ut soluta voluptate aliquid assumenda rerum ipsam aliquam
              voluptates!
            </p>
          </div>
        </div>
      </section>

      <section className="shippingInfo  py-15 m-auto w-full px-5 lg:px-20">
        <ul className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-5 place-items-center">
          <li className="flex place-items-center ">
            <FaShippingFast size={30} />
            <div>
              <span>free shipping item</span>
              <br />
              <small>for all orders over $500</small>
            </div>
          </li>
          <li className="flex place-items-center gap-2 mt-5">
            <FaCalendar size={30} />
            <div>
              <span>Money back gurantee</span>
              <br />
              <small>100% money back guarantee</small>
            </div>
          </li>
          <li className="flex place-items-center gap-2 mt-5">
            <FaGetPocket size={30} />
            <div>
              <span>Cash on delivery</span>
              <br />
              <small>lorem ipsum dolor consecte</small>
            </div>
          </li>
          <li className="flex place-items-center gap-2 mt-5">
            <FaPhone size={30} />
            <div>
              <span>Help & Support</span>
              <br />
              <small>Call us : 1234567890</small>
            </div>
          </li>
        </ul>
      </section>

      <section className=" tweets grid lg:grid-cols-2 md:grid-cols-1 gap-15 p-15 bg-gray-200 w-full px-5 lg:px-20 ">
        <div >
          <h2> LATEST TWEETS</h2>
          <div className="lg:flex md:block place-items-center mt-5 gap-2">
            <div className="   w-10 h-10 bg-orange-500 rounded-[100%] text-center place-items-center p-10">
           <FaTwitter size={50} color="white"  className="-m-5" />

            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur nostrum cupiditate explicabo ipsa, nihil optio
              molestiae illo in porro excepturi, quas ab totam aliquam, possimus
              quos incidunt ut quam.
              <i className="text-orange-500 block">posthmemes</i>
            </p>
            
          </div>
        </div>
        <div  >
          <h2 >STAY CONNECTED</h2>
          <ul className=" grid lg:grid-cols-4  md:grid-cols-2 gap-5 mt-5 ">
            <li className="w-5 h-5 bg-white rounded-[100%] text-center place-items-center p-7"> <FaTwitter size={25} color="black" className="-m-3" /></li>
            <li className="w-5 h-5 bg-white rounded-[100%] text-center place-items-center p-7" > <FaGoogle size={25} color="black" className="-m-3"  /></li>
            <li className="w-5 h-5 bg-white rounded-[100%] text-center place-items-center p-7" > <FaFacebook size={25} color="black" className="-m-3"  /></li>
            <li className="w-5 h-5 bg-white rounded-[100%] text-center place-items-center p-7"> <FaYoutube size={25} color="black" className="-m-3"  /></li>
            
          </ul>
        </div>
      </section>

      <footer className="bg-black text-white px-15 py-5">
        <ul className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-5 divide-x-1 text-sm">
          <li className="px-5">Enable Cookies</li>
          <li className="px-5">Privacy And Cookie Policy</li>
          <li className="px-5">Contact Us</li>
          <li className="px-5">Blog</li>
        </ul>

        <hr className="my-6 border-t border-gray-10" />

      <div className="overflow-x-auto w-full">
  <table className="w-full min-w-[600px] text-left text-sm">
    <thead className="bg-black text-white">
      <tr>
        <th className="p-5">PRODUCTS</th>
        <th className="border-x border-gray-200 px-4 p-5">OUR COMPANY</th>
        <th className="border-x border-gray-200 px-4 p-5">YOUR ACCOUNT</th>
        <th className="p-5">STORE INFORMATION</th>
      </tr>
    </thead>
    <tbody className="text-white">
      <tr>
        <td className="text-xs p-3">About us</td>
        <td className="border-x border-gray-100 px-4 p-3 text-xs">Contact us</td>
        <td className="border-x border-gray-100 px-4 p-3 text-xs">Addresses</td>
        <td className="text-xs p-3">My Company</td>
      </tr>
      <tr>
        <td className="text-xs p-3">Prices Drop</td>
        <td className="border-x border-gray-100 px-4 p-3 text-xs">Sitemap</td>
        <td className="border-x border-gray-100 px-4 p-3 text-xs">Credit slips</td>
        <td className="text-xs p-3">Lorem ipsum dolor sit amet.</td>
      </tr>
      <tr>
        <td className="text-xs p-3">New products</td>
        <td className="border-x border-gray-100 px-4 p-3 text-xs">Stores</td>
        <td className="border-x border-gray-100 px-4 p-3 text-xs">Orders</td>
        <td className="text-xs p-3">Email: dummy@domain.com</td>
      </tr>
      <tr>
        <td className="text-xs p-3">Best sales</td>
        <td className="border-x border-gray-100 px-4 p-3 text-xs">My account</td>
        <td className="border-x border-gray-100 px-4 p-3 text-xs">Personal info</td>
        <td className="text-xs p-3">Call us now: 1234567890</td>
      </tr>
    </tbody>
  </table>
</div>


        <hr className="my-6 border-t border-gray-10" />
      </footer>
    </>
  );
};

export default HomeComponent;
