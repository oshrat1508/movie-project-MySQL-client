import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


export default function ShowImage({ arr ,title,path}) {

  const [like, setLike] = useState()

  return (
      <div className="  w-[90%]   m-auto  mb-20 ">
        <h1 className="text-3xl mb-10">{title}</h1>
        <div className=" flex justify-center ">
          {arr.slice(0, 4).map((movie, i) => (
            <Link key={i} to={`${path}${movie.id}`}><div>
            <img
              className=" w-72 "
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
              <div >
      </div>
            </div></Link>
          ))}
        </div>
      </div>
  );
}
