import React from 'react'
import { useState } from 'react'

import logo from "../images/logo.svg"
import menu from "../images/icon-menu.svg"
import closeBtn from "../images/icon-close-menu.svg"
import downIcon from "../images/icon-arrow-down.svg"
import upIcon from "../images/icon-arrow-up.svg"
import todo from "../images/todo.svg"
import remainders from "../images/icon-reminders.svg"
import planning from "../images/icon-planning.svg"
import calender from "../images/icon-calendar.svg"
// import MobileExpand from './MobileExpand'

const MobileExpand = (props) => {
    const [isOpenA, setIsOpenA] = useState(0)
    const [isOpenB, setIsOpenB] = useState(0)

    const ula = document.getElementById("ula");
    const ulb = document.getElementById("ulb");

    let srca = downIcon;
    let srcb = downIcon;


    return (
        <div>
            <div className='custom select my-0'
                onClick={(e) => {
                    if (isOpenA == 0) {
                        setIsOpenA(1);
                        srca = downIcon;
                        ula.classList.add("hidden");
                    } else if (isOpenA == 1) {
                        setIsOpenA(0);
                        srca = upIcon;
                        ula.classList.remove("hidden");
                    }
                }}
            >
                <div className='flex items-center gap-1 cursor-pointer'
                >Features <img src={downIcon} alt="" /></div>
                <ul id='ula' className='hidden'>
                    <li className=''><a className='flex gap-2 mx-7 my-5 items-center justify-' href="#"><img className='w-[20px] h-[20px]' src={todo} alt="" /> Todo List </a></li>
                    <li className=''><a className='flex gap-2 mx-7 my-5 items-center justify-' href="#"><img className='w-[20px] h-[20px]' src={calender} alt="" /> Calender </a></li>
                    <li className=''><a className='flex gap-2 mx-7 my-5 items-center justify-' href="#"><img className='w-[20px] h-[20px]' src={remainders} alt="" /> Reminders </a></li>
                    <li className=''><a className='flex gap-2 mx-7 my-5 items-center justify-' href="#"><img className='w-[20px] h-[20px]' src={planning} alt="" /> Plannings </a></li>
                </ul>
            </div>


            <div className='custom select my-0'
                onClick={(e) => {
                    if (isOpenB == 0) {
                        setIsOpenB(1);
                        srcb = downIcon;
                        ulb.classList.add("hidden");
                    } else if (isOpenB == 1) {
                        setIsOpenB(0);
                        srcb = upIcon
                        ulb.classList.remove("hidden");
                    }
                }}
            >
                <div className='flex items-center gap-1 cursor-pointer'
                >Company <img src={downIcon} alt="" /></div>
                <ul id='ulb' className='hidden'>
                    <li className=''><a className='flex gap-2 mx-7 my-2 items-center justify-' href="#">History </a></li>
                    <li className=''><a className='flex gap-2 mx-7 my-2 items-center justify-' href="#">Our Team </a></li>
                    <li className=''><a className='flex gap-2 mx-7 my-2 items-center justify-' href="#"> Blog </a></li>
                    {/* <li className=''><a className='flex gap-2 mx-7 my-5 items-center justify-' href="#">lannings </a></li> */}
                </ul>
            </div>

            <div className='custom select my-1'>
                <div className='flex items-center gap-1'>Carrers</div>
            </div>

            <div className='custom select my-1'>
                <div className='flex items-center gap-1'>About</div>
            </div>
        </div>
    )
}

export default MobileExpand


