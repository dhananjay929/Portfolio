import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [nav, setNav] = useState(false);
    const links = [
        {id: 1,href:"/" ,link:"home"},
        {id: 2,href:"/about" ,link:"about"},
        {id: 3,href:"/education" ,link:"education"},
        {id: 4,href:"/portfolio" ,link:"portfolio"},
        {id: 5,href:"/experience" ,link:"experience"},
        {id: 6,href:"/achievements" ,link:"achievements"},
        {id: 7,href:"/contact" ,link:"contact"}

    ]
  return (
    <div id='nab' className="flex justify-between items-center w-full h-20 px-4 text-white bg-black bg-fixed ">
        <div>
            <h1 className='text-5xl font-signature ml-2'>
                🧑‍💻Dhananjay 
            </h1>
        </div>
        
        <ul className="hidden lg:flex ">
            {links.map(({id, link, href})=>(
              <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'><Link to={href}> {link} </Link></li>
        ))} </ul>
        <div onClick= {()=>setNav(!nav) }  className='cursor-pointer pr-4 z-10 text-gray-500 lg:hidden'>

           { nav?<FaTimes className='hover:scale-110 duration-200'  size={30}/>:<FaBars className='hover:scale-110 duration-200' size={30}/>}
              
         </div>

           {nav&&(
           <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">

           {links.map(({id, link,href})=>(
              <li   key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200' ><Link to={href}  duration={500} onClick={()=> setNav(!nav)}>{link}</Link></li>
        ))}   
           </ul>
            )}
    </div>
  );
};

export default NavBar