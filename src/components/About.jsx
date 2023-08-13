import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>Thank you for taking time to read my about section.
            My name is Dhananjay Kumar, and I'm an enthusiastic Full Stack Developer with a strong academic background and an insatiable curiosity for technology.Currently I am a B.tech passout of 2023 who is gaining expreiences of various fields through making projects. <br />

My journey into web development began when I discovered my passion for creating intuitive and visually appealing interfaces. This inspired me to pursue a career as a Frontend Developer, where I could combine my creative flair with my technical prowess. <br />

Throughout my academic journey, I've developed a comprehensive skill set, encompassing HTML, CSS, JavaScript, ReactJS and more of the cutting edge technologies of present. My technical expertise extends to backend technologies, including ExpressJS, NodeJS and MongoDB, allowing me to build full-fledged applications that seamlessly integrate frontend and backend functionalities.</p>
            <br />
            <p className='text-xl' >
             My premium project work include VibeHub, a social media platform where users can authenticate themselves login and express their thoughts as well as explore what other people are expressing.
            </p>
            <br />
            <p className='text-xl'>
            As a tech enthusiast, I'm committed to continuous learning, staying up-to-date with the latest industry trends and advancements. I believe that the learning journey never ends, so I always keep learning, growing and coding.
        
            </p>
        </div>
    </div>
  )
}

export default About