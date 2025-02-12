import React, { useState } from 'react';

import downIcon from "../images/icon-arrow-down.svg";
import upIcon from "../images/icon-arrow-up.svg";
import todo from "../images/todo.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import calendar from "../images/icon-calendar.svg";

const MobileExpand = () => {
    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenB, setIsOpenB] = useState(false);

    return (
        <div>
            {/* Features Dropdown */}
            <div 
                className='custom select my-0 cursor-pointer'
                onClick={() => setIsOpenA(!isOpenA)}
            >
                <div className='flex items-center gap-1 '>
                    Features <img src={isOpenA ? upIcon : downIcon} alt="Toggle" />
                </div>
                {isOpenA && (
                    <ul className='mt-2'>
                        <li><a className='flex gap-2 mx-7 my-2 items-center' href="#"><img className='w-[20px] h-[20px]' src={todo} alt="Todo" /> Todo List </a></li>
                        <li><a className='flex gap-2 mx-7 my-2 items-center' href="#"><img className='w-[20px] h-[20px]' src={calendar} alt="Calendar" /> Calendar </a></li>
                        <li><a className='flex gap-2 mx-7 my-2 items-center' href="#"><img className='w-[20px] h-[20px]' src={reminders} alt="Reminders" /> Reminders </a></li>
                        <li><a className='flex gap-2 mx-7 my-2 items-center' href="#"><img className='w-[20px] h-[20px]' src={planning} alt="Planning" /> Planning </a></li>
                    </ul>
                )}
            </div>

            {/* Company Dropdown */}
            <div 
                className='custom select my-0 cursor-pointer'
                onClick={() => setIsOpenB(!isOpenB)}
            >
                <div className='flex items-center gap-1'>
                    Company <img src={isOpenB ? upIcon : downIcon} alt="Toggle" />
                </div>
                {isOpenB && (
                    <ul className='mt-2'>
                        <li><a className='flex gap-2 mx-7 my-2' href="#">History</a></li>
                        <li><a className='flex gap-2 mx-7 my-2' href="#">Our Team</a></li>
                        <li><a className='flex gap-2 mx-7 my-2' href="#">Blog</a></li>
                    </ul>
                )}
            </div>

            {/* Static Links */}
            <div className='custom select my-1'>
                <div className='flex items-center gap-1'>Careers</div>
            </div>
            <div className='custom select my-1'>
                <div className='flex items-center gap-1'>About</div>
            </div>
        </div>
    );
};

export default MobileExpand;
