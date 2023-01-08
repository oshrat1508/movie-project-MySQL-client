import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { db } from "../firebase/FireBase";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import { UserAuth } from "../context/AuthContext";

export default function ShowImage({ arr ,title,path}) {
  // const { user } = UserAuth();

  // const [saved, setSaved] = useState(false);
  // const [like, setLike] = useState(
  //   JSON.parse(localStorage.getItem("is-open")) || false
  // );
  // const movieId = doc(db, "users", `${user?.email}`);

  // const saveShow = async () => {
  //   if (user?.email) {
  //     localStorage.setItem("is-open", JSON.stringify(!like));
  //     setLike(!like);
  //     setSaved(true);
  //     await updateDoc(movieId, {
  //       savedShows: arrayUnion({
  //         id: arr.id,
  //         title: arr.title,
  //         img: arr.backdrop_path,
  //       }),
  //     });
  //   } else {
  //     alert("please log in to save");
  //   }
  // };

  return (
      <div className="flex  flex-col  w-[90%] m-auto  mb-28 ">
        <h1 className="text-3xl mb-10">{title}</h1>
        <div className=" flex justify-center justify-around">
          {arr.slice(0, 6).map((movie, i) => (
            <Link key={i} to={`${path}${movie.id}`}><div>
            <img
              className=" w-52 "
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
              {/* <div onClick={saveShow}>
        {like ? <AiOutlineHeart /> : <AiFillHeart />}
      </div> */}
            </div></Link>
          ))}
        </div>
      </div>
  );
}
