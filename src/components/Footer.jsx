import React from 'react'
import {AiOutlineCopyright ,AiOutlineFacebook , AiFillInstagram ,AiOutlineTwitter} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className=' text-slate-400 border-t-2 border-slate-500 md:flex-row flex-col relative bottom-0 m-auto flex justify-around '>
    <div className="logo text-4xl font-bold text-violet-700 font-mono ">ChillTime </div>
  <div  className='social_media flex text-2xl' ><AiFillInstagram/><AiOutlineFacebook/><AiOutlineTwitter/></div>
  <div className='flex items-center text-lg'><AiOutlineCopyright/>oshrat balay</div>
    </div>
  )
}
