import React from "react";

import {
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";




const user = JSON.parse(localStorage.getItem("user"))?.data;
  
const Likes = ({ id}) => {
  console.log(user?.like.length > 0 );
    if (user?.like.length > 0) {
      console.log('hey');
      return user.like?.find(
        (like) => like === id
      ) ? (
        <>
          <AiFillHeart className='mt-0.5' size={20} />
        </>
      ) : (
        <>
        
          <AiOutlineHeart size={20} className='mt-0.5' />
           
        </>
      );
    }
    return (
      <>
      
        <AiOutlineHeart size={20} />
      </>
    );
  };

  export default Likes