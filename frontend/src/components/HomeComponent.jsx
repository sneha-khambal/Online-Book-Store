import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FaCalendar, FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { DropdownComponent } from "./dropdownComponent";
import ChildrenBookComponent from "./childrenBookComponent";
import { SliderComponent } from "./SliderComponent";

import { FaShippingFast,FaPhone,FaGetPocket,FaRegCalendarAlt } from 'react-icons/fa';


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

  return (
    // <div>
    //      <Link to={`/books/children`}>
    // Children
    // </Link>
    //   <Link to={`/books/comics`}>
    // Comics
    // </Link></div>

    <>
      <header className="bg-gray h-[60px] py-5   border-solid border-y-1 border-bottom-gray-300 m-auto place-items-center ">
      <div className="flex justify-between w-220 pl-[45px]">
          <DropdownComponent title={"INR"} data={["INR", "USD", "GBP", "EUR"]} />

        <div
          id="profileInfo"
          className="grid grid-cols-3 divide-x-3 divide-solid divide-gray-500 h-5   "
        >
          <span className="pr-3">My Account</span>
          <span className="pl-3">Checkout</span>
          <span className="pl-3">Sign In</span>
        </div>
      </div>
      </header>
      <section className="flex justify-between my-15  m-auto w-300 ">
        <i
          style={{ color: "oklch(87.9% 0.169 91.605)", fontFamily: "emoji" }}
          className="text-5xl font-emoji "
        >
          Koparion
        </i>

        <ul className="flex justify-between ml-4 items-center">
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
        <FaShoppingCart size={50} />
      </section>
      <section id="searchBox" className="bg-gray-100 w-full py-5">
        <span className="group">
          <h4 className="bg-black text-white rounded m-5 px-5 flex justify-between ">
            <strong className="m-1">All Categories</strong>
            <div
              className=" m-1"
              onClick={() => {
                setCategories(!categories);
              }}
            >
              <div className="bg-white w-5 rounded h-1  my-1"></div>
              <div className="bg-white w-5 rounded h-1  my-1"></div>
              <div className="bg-white w-5 rounded h-1  my-1"></div>
            </div>
          </h4>
          {categories ? (
            <ul
              id="categoriesList"
              className="absolute w-230  bg-white border-solid-gray rounded shadow-lg z-10 items-center mx-10 "
            >
              {categoryList &&
                categoryList
                  .slice(0, showListItem)
                  .map((item, index) => <li className="p-2">{item}</li>)}

              {showListItem <= showCategories ? (
                <li
                  className="p-2"
                  onClick={() => {
                    setListItem(categoryList.length);
                  }}
                >
                  {" "}
                  + More Categories
                </li>
              ) : (
                <li
                  className="p-2"
                  onClick={() => {
                    setListItem(showCategories);
                  }}
                >
                  {" "}
                  - Less Menu
                </li>
              )}
            </ul>
          ) : (
            ""
          )}
        </span>

        {/* <div id="searchBooks">
      <input type="search" name="" id="" />
   <button>Search</button>
    </div> */}
      </section>
      <section
        id="shopNow"
        className="bg-red-300 h-100 relative content-center bg-cover"
      style={{ backgroundImage: "url('/src/assets/portrait-4489207_1280.jpg')" }} >
        <h1 className="text-2xl text-white text-center mb-5">Do it Yourself</h1>
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
        </div>
      </section>
      <section id="bookSection" className="grid grid-cols-4 grid-row-5 gap-5 my-20 mt-6 m-auto w-300">
        <div className="row-span-6 col-span-2   rounded shadow h-100 bg-cover " style={{ backgroundImage: "url('/src/assets/books-3482286_1280.jpg')" }} >
          <small>Comics Books</small>
 
        </div>
        <div className="col-span-2 row-span-4 bg-yellow-500 rounded shadow   bg-cover " style={{ backgroundImage: "url('/src/assets/art-2369664_1280.jpg')" }}>
          <small>Arts & Photography Book</small>
          <img src="/" alt="" />
        </div>
        <div className="col-span-1 row-span-2 bg-blue-500 rounded shadow   bg-cover " style={{ backgroundImage: "url('/src/assets/money-4838516_1280.jpg')" }}>
          <small>Bussiness & Money Books</small>
          <img src="/" alt="" />
        </div>
        <div className="col-span-1 row-span-2 bg-green-500 rounded shadow   bg-cover " style={{ backgroundImage: "url('/src/assets/boys-3396713_1280.jpg')" }}>
          <small>Children's Books</small>
          <img src="/" alt="" />
        </div>
        <div className="col-span-4  bg-orange-500 rounded shadow h-50 bg-cover " style={{ backgroundImage: "url('/src/assets/summer-2880261_1280.jpg')" }}>
          <small>Travel Books</small>
          <img src="/" alt="" />
        </div>
      </section>
      <section className=" my-15 m-auto w-300">
        <div className="text-center my-15">
          <h1 className="text-2xl font-bold mb-4">TOP INTERESTING</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            iusto nisi ut optio minima accusamus delectus tempore libero, rem
            ipsum eius. Vitae unde quod eligendi nobis rem, possimus quo quidem.
          </p>
        </div>
        <ul className="grid grid-cols-3 place-items-center">
          <li
            className="hover:text-orange-500"
            onClick={() => {
              setBookType("new arrival");
            }}
          >
            NEW ARRIVAL
          </li>
          <li
            className="hover:text-orange-500"
            onClick={() => {
              setBookType("on sale");
            }}
          >
            ONSALE
          </li>
          <li
            className="hover:text-orange-500"
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
      <section className=" my-15 m-auto w-300">
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

      <section className="my-15 m-auto w-300">
        <div>{/* card section */}</div>
        <ul className="grid grid-cols-3 place-items-center">
          <li
            className="hover:text-orange-500"
            onClick={() => {
              setBookType("new arrival");
            }}
          >
            BOOK
          </li>
          <li
            className="hover:text-orange-500"
            onClick={() => {
              setBookType("on sale");
            }}
          >
            AUDIO
          </li>
          <li
            className="hover:text-orange-500"
            onClick={() => {
              setBookType("featured");
            }}
          >
            CHILDREN'S BOOK
          </li>
        </ul>

        <ul className=" grid grid-cols-3 m-15 h-200 relative">
          <li>
            <SliderComponent bookType={"book"} slide={"vertical"} />
          </li>
          <li>
            <SliderComponent bookType={"audio"} slide={"vertical"} />
          </li>
          <li>
            <SliderComponent bookType={"childrens"} slide={"vertical"} />
          </li>
        </ul>
      </section>

      <section className=" blog text-center my-15 m-auto w-300 ">
        <h1 className="text-2xl my-20">Latest from our blog</h1>
        <div className="grid grid-cols-3 gap-5 place-items-center">
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

      <section className="shippingInfo my-15 my-15 m-auto w-300">
        <ul className="grid grid-cols-4 place-items-center">
          <li className="flex place-items-center gap-2">
            <FaShippingFast size={30} />
            <div>
              <span>free shipping item</span>
            <br />
            <small>for all orders over $500</small></div>
          </li>
          <li className="flex place-items-center gap-2">
            <FaCalendar size={30} />
            <div>
              <span>Money back gurantee</span>
            <br />
            <small>100% money back guarantee</small>
            </div>
          </li>
          <li className="flex place-items-center gap-2">
            <FaGetPocket size={30} />
            <div>
              <span>Cash on delivery</span>
            <br />
            <small>lorem ipsum dolor consecte</small>

            </div>
          </li>
          <li className="flex place-items-center gap-2">
            <FaPhone size={30} />
       <div>
             <span>Help & Support</span>
            <br />
            <small>Call us : 1234567890</small>
       </div>
          </li>
        </ul>
      </section>

      <section className=" tweets grid grid-cols-2 place-items-center p-15 bg-gray-200 w-full">
        <div>
          <h2>LATEST TWEETS</h2>
          <div>
            <img src="/" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur nostrum cupiditate explicabo ipsa, nihil optio
              molestiae illo in porro excepturi, quas ab totam aliquam, possimus
              quos incidunt ut quam
            </p>
            <span>posthmemes</span>
          </div>
        </div>
        <div>
          <h2>STAY CONNECTED</h2>
          <ul className="flex gap-2">
            <li>Twitter</li>
            <li>Google</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>Twitter</li>
          </ul>
        </div>
      </section>

      <footer className="bg-black text-white px-15 py-5">
        <ul className="flex divide-x-1 text-sm">
          <li className="px-5">Enable Cookies</li>
          <li className="px-5">Privacy And Cookie Policy</li>
          <li className="px-5">Contact Us</li>
          <li className="px-5">Blog</li>
        </ul>

        <hr className="my-6 border-t border-gray-10" />

        <table className=" w-full">
          <thead>
            <tr>
              <th className="p-5">PRODUCTS</th>
              <th className="border-x border-gray-100 px-4 p-5">OUR COMPANY</th>
              <th className="border-x border-gray-100 px-4 p-5">
                YOUR ACCOUNT
              </th>
              <th className="p-5">STORE INFORMATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-xs">About us</th>
              <th className="border-x border-gray-100 px-4 p-5">Contact us</th>
              <th className="border-x border-gray-100 px-4 p-5">Addresses</th>
              <th className="text-xs">My Compoany</th>
            </tr>
            <tr>
              <th className="  text-xs">Prices Drop</th>
              <th className="border-x border-gray-100 px-4 py-2 text-xs">
                Sitemap
              </th>
              <th className="border-x border-gray-100 px-4 py-2 text-xs">
                Credit slips
              </th>
              <th className="  text-xs">Lorem ipsum dolor sit amet.</th>
            </tr>
            <tr>
              <th className=" text-xs">New products</th>
              <th className="border-x border-gray-100 px-4 py-2 text-xs">
                Stores
              </th>
              <th className="border-x border-gray-100 px-4 py-2 text-xs">
                Orders
              </th>
              <th className="text-xs">Email:dummy@domain.com</th>
            </tr>
            <tr>
              <th className="text-xs">Best sales</th>
              <th className="border-x border-gray-100 px-4 p-5 text-xs">
                My account
              </th>
              <th className="border-x border-gray-100 px-4 p-5 text-xs">
                Personal info
              </th>

              <th className="text-xs">call us now: 1234567890</th>
            </tr>
          </tbody>
        </table>

        <hr className="my-6 border-t border-gray-10" />
      </footer>
    </>
  );
};

export default HomeComponent;
