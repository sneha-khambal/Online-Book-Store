import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { DropdownComponent } from "./dropdownComponent";
import ChildrenBookComponent from "./childrenBookComponent";
import { SliderComponent } from "./SliderComponent";

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
  const [showListItem,setListItem] = useState(showCategories)
  const [categories, setCategories] = useState(false);

  // book section 
  const [bookType,setBookType] = useState('new arrival')

  return (
    // <div>
    //      <Link to={`/books/children`}>
    // Children
    // </Link>
    //   <Link to={`/books/comics`}>
    // Comics
    // </Link></div>

    <>
      <header className="bg-gray h-[60px] flex justify-between p-5 pb-0 border-solid border-y-1 border-bottom-gray-300">
        <DropdownComponent title={"INR"} data={["INR", "USD", "GBP", "EUR"]} />

        <div
          id="profileInfo"
          className="grid grid-cols-3 divide-x-3 divide-solid divide-gray-500 h-5 "
        >
          <span className="pr-3">My Account</span>
          <span className="pl-3">Checkout</span>
          <span className="pl-3">Sign In</span>
        </div>
      </header>
      <section className="flex justify-between my-15 px-10">
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
              {categoryList && categoryList.slice(0,showListItem).map((item,index)=>(
                 <li className="p-2">{item}</li>

              ))}
           
           {showListItem <= showCategories ?
            <li className="p-2" onClick={()=>{setListItem(categoryList.length)}}> + More Categories</li>
          :
               <li className="p-2" onClick={()=>{setListItem(showCategories)}}> - Less Menu</li>
          }
              
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
        className="bg-red-300 h-100 relative content-center"
      >
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
      <section id="bookSection" className="grid grid-cols-4 gap-5 m-5">
        <div className="row-span-2 bg-red-500 rounded shadow h-50 ">
          <small>Comics Books</small>
          <img src="/" alt="" />
        </div>
        <div className="col-span-2 bg-yellow-500 rounded shadow">
          <small>Arts & Photography Book</small>
          <img src="/" alt="" />
        </div>
        <div className="col-span-1 bg-blue-500 rounded shadow">
          <small>Bussiness & Money Books</small>
          <img src="/" alt="" />
        </div>
        <div className="col-span-1 bg-green-500 rounded shadow">
          <small>Children's Books</small>
          <img src="/" alt="" />
        </div>
        <div className="col-span-2 bg-orange-500 rounded shadow">
          <small>Travel Books</small>
          <img src="/" alt="" />
        </div>
      </section>
      <section>
        <div className="text-center my-15">
          <h1 className="text-2xl font-bold mb-4">TOP INTERESTING</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            iusto nisi ut optio minima accusamus delectus tempore libero, rem
            ipsum eius. Vitae unde quod eligendi nobis rem, possimus quo quidem.
          </p>
        </div>
        <ul className="grid grid-cols-3 place-items-center">
          <li className="hover:text-orange-500" onClick={()=>{setBookType('new arrival')}}>NEW ARRIVAL</li>
          <li className="hover:text-orange-500" onClick={()=>{setBookType('on sale')}}>ONSALE</li>
          <li className="hover:text-orange-500" onClick={()=>{setBookType('featured')}}>FEATURED PRODUCTS</li>
        </ul>
     
        <SliderComponent bookType={bookType} />
   
      </section>

      <section>
        <div>
          {/* card section */}
          <table>
            <thead>
              <tr>
                <th>Book</th>
                <th>AUDIO BOOKS</th>
                <th>CHILDREN'S BOOKS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ChildrenBookComponent bookType={'book'} />
                </td>
                <td>
                  <ChildrenBookComponent bookType={'audio'} />
                </td>
                <td>
                  <ChildrenBookComponent bookType={'childrens'} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="text-center ">
        <h1 className="text-2xl my-20">Latest from our blog</h1>
        <div className="grid grid-cols-3 place-items-center">
          <div>
            <img src="/" alt="" />
            <h4>tile</h4>
            <small>admin</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil
              incidunt ut soluta voluptate aliquid assumenda rerum ipsam aliquam
              voluptates!
            </p>
          </div>
          <div>
            <img src="/" alt="" />
            <h4>tile</h4>
            <small>admin</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil
              incidunt ut soluta voluptate aliquid assumenda rerum ipsam aliquam
              voluptates!
            </p>
          </div>
          <div>
            <img src="/" alt="" />
            <h4>tile</h4>
            <small>admin</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil
              incidunt ut soluta voluptate aliquid assumenda rerum ipsam aliquam
              voluptates!
            </p>
          </div>
        </div>
      </section>

      <section className="shippingInfo my-15">
        <ul className="grid grid-cols-4 place-items-center">
          <li>
            <img src="/" alt="" />
            <span>free shipping item</span>
            <br />
            <small>for all orders over $500</small>
          </li>
          <li>
            <img src="/" alt="" />
            <span>Money back gurantee</span>
            <br />
            <small>100% money back guarantee</small>
          </li>
          <li>
            <img src="/" alt="" />
            <span>Cash on delivery</span>
            <br />
            <small>lorem ipsum dolor consecte</small>
          </li>
          <li>
            <img src="/" alt="" />
            <span>Help & Support</span>
            <br />
            <small>Call us : 1234567890</small>
          </li>
        </ul>
      </section>

      <section className=" tweets grid grid-cols-2 place-items-center p-15">
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
