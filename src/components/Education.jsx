import React from 'react'
import pas  from  "../assets/pas.png";
import cv  from  "../assets/cv (2).png";
import ggsestc  from  "../assets/ggsestc.png";


const Education = () => {
  const learn=[
    {id:1,src:ggsestc,title:"Guru Gobind Singh Educational Society's Technical Campus , Bokaro (2019-23)",style:"shadow-purple-500",describe:"B.Tech in Computer Science Engineering (CGPA:- 9.04)",href:"https://ggsestc.ac.in/",cerhref:"https://drive.google.com/drive/folders/1Pp9Ip8i_TPblRrF3Y5A57k0CNtCBJnPI?usp=drive_link"},
    
    {id:2,src:cv,title:"Chinmaya Vidyalaya , Bokaro (2018-19)",style:"shadow-green-500",describe:"Intermediate (Percentage:- 84.4%)",href:"http://www.chinmayabokaro.org/", cerhref:"https://drive.google.com/file/d/16xBls2Tyrq3G6vWhoQ9iAJKv55zBaVsq/view?usp=drive_link"},
    
    {id:3,src:pas,title:"The Pentecostal Assembly School , Bokaro (2016-17)",style:"shadow-red-500",describe:"Matriculation (CGPA:- 9.8)",href:"https://www.pasbokaro.com/", cerhref:"https://drive.google.com/file/d/171zBQCx10xXUcIYjGQAaEDnwsogf53r5/view?usp=drive_link"}
   
  ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-screen text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>
            Education
          </p>
          <p className='py-6'>
            These are my educational qualifications :-
          </p>
        </div>

        <div className='w-full   text-center py-8 px-12 sm:px-0'>
    
        {learn.map(({id,src,title,style,describe,href,cerhref})=>(
            
    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-14 rounded-lg ${style}`}>
           
        <h1 className='text-2xl font-bold'>{title}</h1>

        <div style={{display:'grid', justifyContent:'center',alignItems:'center'}}>

        <a href={href} target='_blank' rel="noreferrer">
        
          <img  src={src} className='w-40 h-40 hover:scale-105 duration-75'  alt="" />

         </a>
       
        </div>

      <a href={cerhref} target='_blank' rel="noreferrer">
      <p  className='text-2xl hover:scale-105 duration-75'>{describe}</p><br />
      </a>

    </div>
       ))}
       </div>

      </div>
    </div>
  )
}

export default Education