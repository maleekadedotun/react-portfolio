// import React from 'react'
// import { HERO_CONTENT } from "../constants"
// import profilePic from "../assets/kevinRushProfile.png"

// const Hero = () => {
//   return (
//     <div className='border-b border-neutral-900 pb-5 lg:mb-35 '>
//         <div className='flex flex-row bg-red-500'>
//             <div className='w- 1/2 lg:1/2'>
//                 <div className='flex md-flex-col items-center lg:items-start'>
//                     <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 md:text-8 xl'>Kevin Rush</h1>
//                     <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transprent'>
//                         Full Stack Developer
//                     </span>
//                     <p className='min-w-xl font-light tracking-tighter'>
//                         {HERO_CONTENT}
//                     </p>
//                 </div>
//             </div>
//             <div className='md:w-full w- 1/2 lg:p -8 md:w-full bg-green-700'>
//                 <div className='flex justify-center'>
//                     <img src={profilePic} alt="KeviRush" className="h-[bb10px]" />
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import {motion} from "framer-motion"

const container = (delay) => ({
    hidden:{x: -100, opacity: 0},
    visible:{
        x: 0,
        opacity: 1,
        transition:{duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-5 lg:mb-35'>
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 lg:w-1/2'>
                <div className='flex flex-col items-center md:items-center lg:items-start md:mb-20'>
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='mb-8 text-4xl md:text-6xl font-thin tracking-tight lg:mt-16'>
                        Kevin Rush
                    </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                     className='mb-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl tracking-tight text-transparent'>
                        Full Stack Developer
                    </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='min-w-full md:min-w-xl font-light tracking-tighter text-center md:text-left'>
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img
                        initial={{x: 100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay:1.2}}
                    src={profilePic} alt="Kevin Rush" className="h-48 md:h-64 min-w-1/2" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;

