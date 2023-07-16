import React from 'react';
import textanalyzer from "../assets/text-analyzer.png"
import calculator from "../assets/calculator.png"
import ecommerce from "../assets/e-commerce.png"
import moviereviewer from "../assets/movie-reviewer.png"
import tictactoe from "../assets/tic-tac-toe.png"
import newsapp from "../assets/news-app.png"

const Portfolio = () => {
    const portfolios = [
        {id:1,demolink:"https://text-analyzer-app.vercel.app/",codelink:"https://github.com/dhananjay929/Text_Analyzer_App" ,src: textanalyzer },
        {id:2,demolink:"https://movie-reviewer-eight.vercel.app/",codelink:"https://github.com/dhananjay929/Movie_Reviewer" ,src: moviereviewer},
        {id:3,demolink:"https://tic-tac-toe-game-green-nu.vercel.app/",codelink:"https://github.com/dhananjay929/TicTacToeGame" ,src: tictactoe},
        {id:4,demolink:"https://github.com/dhananjay929/NewsMonkey_App",codelink:"https://github.com/dhananjay929/NewsMonkey_App" ,src: newsapp},
        {id:5,demolink:"https://dhananjay929.github.io/Calculator/",codelink:"https://github.com/dhananjay929/Calculator" ,src: calculator},
        {id:6,demolink:"https://dhananjay929.github.io/E-Commerce/",codelink:"https://github.com/dhananjay929/E-Commerce" ,src: ecommerce}
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
               <p className='py-6'>Check out some of my work right here : </p>
            </div>

            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
            portfolios.map(({id,src,demolink,codelink})=>(

               
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                             <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                 <div className='flex items-center justify-center'>
                           <a href={demolink}  target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</a>
                           <a href={codelink} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Code</a>
    </div>
</div>
            ))}
            </div>       
        </div>
    </div>
  )
}

export default Portfolio