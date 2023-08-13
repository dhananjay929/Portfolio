import React from 'react';
import '../App.css';
import profilephoto from "../assets/IMG_20200104_173214.JPG";
import { MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div name="home" className='min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className="h-10 md:hidden"></div>
        <div style={{textAlign:'center'}} className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-6xl font-bold text-white '>
                    I'm a Full-Stack Developer
                </h2>
                <div className='py-6'>
            <img src={profilephoto} alt="my profile" className='rounded-2xl mx-auto  w-2/5  '/>
           </div>
           
                <p className='text-gray-500 py-4 ' style={{textAlign:'center'}}>I am a tech enthusiast, Full Stack Developer, excelling in frontend, backend, and databases. Committed to crafting user-friendly interfaces through Frontend development , with strong problem-solving skills and time management abilities . Seeking a challenging full-time role to further enhance my skills and contribute effectively. I am a person who is constantly learning, growing, and coding . </p>
                <div>
                <Link to='/portfolio'  duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                  Portfolio 
                  <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                  </Link>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Home