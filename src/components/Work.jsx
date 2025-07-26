import React from 'react'
import send_icon from '../assets/send-icon.png'
import right_arrow_blod from '../assets/right-arrow-bold.png'
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png'

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
    <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
    <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
    <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my web development and AI project showcase! 
        Here, you'll find a curated collection of my latest work — from interactive frontend websites to powerful AI-driven applications. Each project reflects my passion for building scalable, responsive interfaces and solving real-world problems with technology.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-5 dark:text-black">
        <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Face Recognition & Gender Classification</h2>
                    <p className="text-sm text-gray-700">Deep learning models built with EfficientNetV2 and Siamese networks.</p>
                </div>
                <a href="https://github.com/Ayushsaha004/COMSYS_WIZARDS" target="_blank" rel="noopener noreferrer" className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </a>
            </div>
        </div>

        <div className="aspect-square bg-[url('./assets/work-3.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Full Stack Movie Ticket Booking Website </h2>
                    <p className="text-sm text-gray-700"> Built a movie ticket booking website (MERN) with realtime features.</p>
                </div>
                <a href="https://github.com/Ayushsaha004/Movie_Ticket_Booking" target="_blank" rel="noopener noreferrer" className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </a>
            </div>
        </div>

        <div className="aspect-square bg-[url('./assets/work-2.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Maternal Health Risk Predictor</h2>
                    <p className="text-sm text-gray-700">Machine learning pipeline for early risk detection from clinical data.</p>
                </div>
                <a href="https://github.com/Ayushsaha004/MaternAI" target="_blank" rel="noopener noreferrer" className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </a>
            </div>
        </div>

        <div className="aspect-square bg-[url('./assets/work-4.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Travel and Tourism Management System</h2>
                    <p className="text-sm text-gray-700">Created a travel booking system Java Full Stack</p>
                </div>
                <a href="https://github.com/Ayushsaha004/Travel-and-Tourism" target="_blank" rel="noopener noreferrer" className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </a>
            </div>
        </div>
        <div className="aspect-square bg-[url('./assets/work-5.avif')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Traffic Sign Detector</h2>
                    <p className="text-sm text-gray-700">Deep Learning for early risk detection from clinical data.</p>
                </div>
                <a href="https://github.com/Ayushsaha004/MaternAI" target="_blank" rel="noopener noreferrer" className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </a>
            </div>
        </div>
        
         <div className="aspect-square bg-[url('./assets/work-6.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Personal Portfolio</h2>
                    <p className="text-sm text-gray-700">Built a responsive React portfolio to showcase projects, skills, and publications..</p>
                </div>
                <a href="https://github.com/Ayushsaha004/Portfolio" target="_blank" rel="noopener noreferrer" className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </a>
            </div>
        </div>

    </div>
    <a href="https://github.com/Ayushsaha004" target="_blank" rel="noopener noreferrer" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white dark:hover:bg-darkHover">Show more
        <img src={right_arrow_blod} alt="" className="w-4 dark:hidden"/>
        <img src={right_arrow_blod_dark} alt="" className="w-4 hidden dark:block"/>
    </a>

</div>
  )
}

export default Work
