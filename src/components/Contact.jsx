import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Let's get in touch !! (Do fill the form below) :</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/83b5d6f6-ef3b-4553-9270-1a2ab5b87133" method='POST'  className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Your good name, please !' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name='email' placeholder='Your email . . .' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                   <textarea name="message"  rows="10" placeholder='Share your message . . .' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                   <button className=' text-white bg-gradient-to-b from bg-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact