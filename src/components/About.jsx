import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>Hi there! 👋 My name is Dhananjay, and I'm an enthusiastic Full Stack Developer with a strong academic background and an insatiable curiosity for technology.

My journey into web development began when I discovered my passion for creating intuitive and visually appealing interfaces. This inspired me to pursue a career as a Frontend Developer, where I could combine my creative flair with my technical prowess.

Throughout my academic journey, I've developed a comprehensive skill set, encompassing HTML, CSS, JavaScript, ReactJS, and more. My technical expertise extends to backend technologies, including Node.js and MongoDB, allowing me to build full-fledged applications that seamlessly integrate frontend and backend functionalities.</p>
            <br />
            <p className='text-xl' >
             One of my proudest moment include when I won the Mr. GGSESTC (2022) award, which is one of my greatest achievement and moment of life.Beyond coding,I love travelling and exploring various geographics.
            </p>
            <br />
            <p className='text-xl'>
            As a tech enthusiast, I'm committed to continuous learning, staying up-to-date with the latest industry trends and advancements. I believe that the learning journey never ends, so I always keep learning, growing and coding.
            <br />
           Thank you for visiting my portfolio! I look forward to connecting and exploring potential collaborations.
            </p>
        </div>
    </div>
  )
}

export default About