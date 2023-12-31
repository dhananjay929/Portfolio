import React from 'react'
import html  from  "../assets/html.png";
import css  from  "../assets/css-3.png";
import js  from  "../assets/js.png";
import mongo  from  "../assets/pngwing.com.png";
import express  from  "../assets/express.png";
import react  from  "../assets/science.png";
import nodejs  from  "../assets/node.png";
import bootstrap  from  "../assets/bootstrap.png";
import github  from  "../assets/github.png";
import outsystem  from  "../assets/outsystemss.png";
import php  from  "../assets/php (2).png";
import laravel  from  "../assets/laravel.png";

const Experience = () => {
  const techs=[
    {id:1,src:html,title:"HTML",style:"shadow-orange-500"},
    {id:2,src:css,title:"CSS",style:"shadow-blue-500"},
    {id:3,src:js,title:"JavaScript",style:"shadow-yellow-500"},
    {id:4,src:mongo,title:"MongoDB (M)",style:"shadow-green-500"},
    {id:5,src:express,title:"ExpressJS (E)",style:"shadow-gray-500"},
    {id:6,src:react,title:"ReactJS (R)",style:"shadow-blue-600"},
    {id:7,src:nodejs,title:"NodeJS (N)",style:"shadow-green-500"},
    {id:8,src:bootstrap,title:"Bootstrap",style:"shadow-purple-500"},
    {id:9,src:github,title:"GitHub",style:"shadow-gray-400"},
    {id:10,src:php,title:"PHP",style:"shadow-blue-400"},
    {id:11,src:laravel,title:"Laravel",style:"shadow-orange-400"},
    {id:12,src:outsystem,title:"Outsystems",style:"shadow-red-500"}
  ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-screen text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline exper-ience'>
            Experience
          </p>
          <p className='py-6'>
            These are the technologies I've worked with :-
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {techs.map(({id,src,title,style})=>(

       
  
        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
          <img src={src} className='w-20 mx-auto' alt="" />
          <p className='mt-4'>{title}</p>
        </div>
       ))}
       </div>

      </div>
    </div>
  )
}

export default Experience