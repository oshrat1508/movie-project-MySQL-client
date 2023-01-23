import React from "react";

import {
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";




const user = JSON.parse(localStorage.getItem("user"))?.data;
  
const Likes = ({liked, id}) => {

//   const [like , setLike] = React.useState()
//   const [reducerV,forceUpdate ] = React.useState(true);

//   React.useEffect(()=>{
// setLike(user.like?.find(
//     (likes) => likes === id
//   ))
// },[reducerV])

//   console.log(reducerV , like);

    if (user?.like.length > 0) {
      return liked ? (
        <>
          <AiFillHeart  className='mt-0.5' size={20} />
        </>
      ) : (
        <>
        
          <AiOutlineHeart  size={20} className='mt-0.5' />
           
        </>
      );
    }
    return (
      <>
      
        <AiOutlineHeart    size={20} />
      </>
    );
  };

  export default Likes