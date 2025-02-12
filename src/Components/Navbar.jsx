//ABhishek is the best coderrr

// import React, { useEffect, useState } from 'react';
// import logo from "../images/logo.svg";
// import menu from "../images/icon-menu.svg";
// import closeBtnImg from "../images/icon-close-menu.svg";
// import MobileExpand from './MobileExpand';
// import downIcon from "../images/icon-arrow-down.svg";
// import upIcon from "../images/icon-arrow-up.svg";
// import todo from "../images/todo.svg"

// import remainders from "../images/icon-reminders.svg"
// import planning from "../images/icon-planning.svg"
// import calender from "../images/icon-calendar.svg"

// const Navbar = () => {
//     const [isOpenFeature, setIsOpenFeature] = useState(false);
//     const [isOpenCompany, setIsOpenCompany] = useState(false)

//     useEffect(() => {
//         const menuBtn = document.getElementById("menu-btn");
//         const mobileMenu = document.getElementById("mobile-menu");
//         const closeBtn = document.getElementById("close-btn");

//         if (menuBtn && mobileMenu && closeBtn) {
//             const openMenu = () => {
//                 mobileMenu.classList.remove("translate-x-full");
//                 document.body.style.overflow = "hidden"; // Prevent scrolling
//             };

//             const closeMenu = () => {
//                 mobileMenu.classList.add("translate-x-full");
//                 document.body.style.overflow = "auto"; // Restore scrolling
//             };

//             menuBtn.addEventListener("click", openMenu);
//             closeBtn.addEventListener("click", closeMenu);

//             return () => {
//                 menuBtn.removeEventListener("click", openMenu);
//                 closeBtn.removeEventListener("click", closeMenu);
//             };
//         }
//     }, []);

//     return (
//         <>
//             <nav className='p-2 lg:p-5 text-[16px] lg:text-[20px]  '>
//                 <div className='max-w-6xl  mx-auto flex  justify-between gap-4 items-center'>
//                     <div className="logo cursor-pointer p-1 md:w-[100px] sm:w-[80px] w-[50px]"><img className='w-[100%] mx-1 ' src={logo} alt="Logo" /></div>

//                     {/* Desktop Nav */}
//                     <div className="desktop-nav hidden md:flex items-center gap-5 relative">


//                         <div
//                             className='mx-2 flex flex-col justify-center items-center'

//                         >
//                             <span
//                                 onMouseOver={() => { setIsOpenFeature(true) }}
//                                 onMouseOut={() => { setIsOpenFeature(false) }}
//                                 className='flex items-baseline justify-left gap-2 cursor-pointer '>Features <img src={isOpenFeature ? upIcon : downIcon} alt="" /></span>

//                             {isOpenFeature &&

//                                 <ul id='ula' className=''>
//                                     <li className=''><a className='flex gap-2 mx-7 my-5 items-center justify-' href="#"><img className='w-[20px] h-[20px]' src={todo} alt="" /> Todo List </a></li>
//                                     <li className=''><a className='flex gap-2 mx-7 my-5 items-center justify-' href="#"><img className='w-[20px] h-[20px]' src={calender} alt="" /> Calender </a></li>
//                                     <li className=''><a className='flex gap-2 mx-7 my-5 items-center justify-' href="#"><img className='w-[20px] h-[20px]' src={remainders} alt="" /> Reminders </a></li>
//                                     <li className=''><a className='flex gap-2 mx-7 my-5 items-center justify-' href="#"><img className='w-[20px] h-[20px]' src={planning} alt="" /> Plannings </a></li>
//                                 </ul>
//                             }

//                         </div>
//                         {/* --- */}
//                         <div
//                             onMouseOver={() => { setIsOpenCompany(true) }}
//                             onMouseOut={() => { setIsOpenCompany(false) }}
//                             className='mx-2'
//                         >
//                             <span className='flex items-center justify-center gap-2 cursor-pointer '>Company <img src={isOpenCompany ? upIcon : downIcon} alt="" /></span>

//                             <div>

//                                 <ul id='ulb' className='hidden'>
//                                     <li className=''><a className='flex gap-2 mx-7 my-2 items-center justify-' href="#">History </a></li>
//                                     <li className=''><a className='flex gap-2 mx-7 my-2 items-center justify-' href="#">Our Team </a></li>
//                                     <li className=''><a className='flex gap-2 mx-7 my-2 items-center justify-' href="#"> Blog </a></li>
//                                     {/* <li className=''><a className='flex gap-2 mx-7 my-5 items-center justify-' href="#">lannings </a></li> */}
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className='mx-2'><a href="#">Careers</a></div>
//                         <div className='mx-2'><a href="#">About</a></div>


//                         {/* Right */}
//                         <div className='flex gap-3 items-center justify-center'>
//                             <button className=' font-light cursor-pointer py-2 px-7 rounded-2xl m-2'>Login</button>
//                             <button className=' font-light cursor-pointer py-2 px-7 border rounded-2xl m-2'>Register</button>
//                         </div>
//                     </div>
//                     {/* ------------------------------------------------------------------------- */}

//                     {/* Mobile Menu Button */}
//                     <button className='md:hidden' id='menu-btn'>
//                         <img src={menu} alt="Menu" />
//                     </button>
//                 </div>
//             </nav>

//             {/* Mobile Nav */}
//             <div id='mobile-menu' className='w-[200px] m-2 px-2 bg-white fixed top-0 right-0 shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out md:hidden'>

//                 {/* Close button */}
//                 <button id='close-btn' className='relative top-0 left-[150px]'>
//                     <img className='h-4 w-4' src={closeBtnImg} alt="Close" />
//                 </button>

//                 <MobileExpand clds="4" imgs="" />

//                 <button className='w-full text-gray-500 bg-gray-100 py-1 px-2 rounded-xl my-1'>Login</button>

//                 <button className='w-full text-gray-900 py-1 px-2 rounded-xl my-1 border'>Register</button>
//             </div>
//         </>
//     );
// };

// export default Navbar;

// // More to work for mobile


import React, { useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import closeBtnImg from "../images/icon-close-menu.svg";
import MobileExpand from "./MobileExpand";
import downIcon from "../images/icon-arrow-down.svg";
import upIcon from "../images/icon-arrow-up.svg";
import todo from "../images/todo.svg";
import remainders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import calender from "../images/icon-calendar.svg";

const Navbar = () => {
    const [isOpenFeature, setIsOpenFeature] = useState(false);
    const [isOpenCompany, setIsOpenCompany] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="p-2 lg:p-5 text-[16px] lg:text-[20px]">
                <div className="max-w-6xl mx-auto flex justify-between gap-4 items-center">
                    <div className="logo cursor-pointer p-1 md:w-[100px] sm:w-[80px] w-[50px]">
                        <img className="w-full mx-1" src={logo} alt="Logo" />
                    </div>

                    {/* Desktop Nav */}
                    <div className="desktop-nav hidden md:flex items-center gap-5">
                        {/* Features Dropdown */}
                        <div
                            className="relative mx-2"
                            onMouseEnter={() => setIsOpenFeature(true)}
                            onMouseLeave={() => setIsOpenFeature(false)}
                        >
                            <span className="flex items-center gap-2 cursor-pointer">
                                Features <img src={isOpenFeature ? upIcon : downIcon} alt="" />
                            </span>
                            {isOpenFeature && (
                                <ul className="absolute bg-white shadow-lg p-2 rounded-md mt-2">
                                    <li className="p-2 flex items-center gap-2 cursor-pointer ">
                                        <img className="w-5 h-5" src={todo} alt="" /> Todo List
                                    </li>
                                    <li className="p-2 flex items-center gap-2 cursor-pointer ">
                                        <img className="w-5 h-5" src={calender} alt="" /> Calendar
                                    </li>
                                    <li className="p-2 flex items-center gap-2 cursor-pointer ">
                                        <img className="w-5 h-5" src={remainders} alt="" /> Reminders
                                    </li>
                                    <li className="p-2 flex items-center gap-2 cursor-pointer ">
                                        <img className="w-5 h-5" src={planning} alt="" /> Planning
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Company Dropdown */}
                        <div
                            className="relative mx-2"
                            onMouseEnter={() => setIsOpenCompany(true)}
                            onMouseLeave={() => setIsOpenCompany(false)}
                        >
                            <span className="flex items-center gap-2 cursor-pointer">
                                Company <img src={isOpenCompany ? upIcon : downIcon} alt="" />
                            </span>
                            {isOpenCompany && (
                                <ul className="absolute bg-white shadow-lg p-2 rounded-md mt-2" >
                                    <li className="p-2 cursor-pointer">History</li>
                                    <li className="p-2 cursor-pointer">Our Team</li>
                                    <li className="p-2 cursor-pointer">Blog</li>
                                </ul>
                            )}
                        </div>

                        <div className="mx-2">
                            <a href="#">Careers</a>
                        </div>
                        <div className="mx-2">
                            <a href="#">About</a>
                        </div>

                        {/* Right Section */}
                        <div className="flex gap-3 items-center">
                            <button className="font-light cursor-pointer py-2 px-7 rounded-2xl">
                                Login
                            </button>
                            <button className="font-light cursor-pointer py-2 px-7 border rounded-2xl">
                                Register
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                        <img src={menu} alt="Menu" />
                    </button>
                </div>
            </nav>

            {/* Mobile Nav */}
            <div
                className={`fixed top-0 right-0 w-[200px] bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close button */}
                <button
                    className="absolute top-2 right-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <img className="h-4 w-4" src={closeBtnImg} alt="Close" />
                </button>

                <MobileExpand clds="4" imgs="" />

                <button className="w-full text-gray-500 bg-gray-100 py-1 px-2 rounded-xl my-1">
                    Login
                </button>
                <button className="w-full text-gray-900 py-1 px-2 rounded-xl my-1 border">
                    Register
                </button>
            </div>
        </>
    );
};

export default Navbar;
