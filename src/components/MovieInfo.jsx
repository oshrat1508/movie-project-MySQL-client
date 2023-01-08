import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link} from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { db } from "../firebase/FireBase";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";


export default function MovieInfo() {
  const { id } = useParams();
  const [similarMovie, setSimilar] = useState([]);
const [movieInfo, setMovieInfo] = useState([]);
  const [cast, setcast] = useState([]);
  const [Trailer, setTrailer] = useState([]);
  const { user } = UserAuth();

  const [saved, setSaved] = useState(false);
  const [like, setLike] = useState(false);


    const get_similar_by_id=async()=> {
    const {data} = await axios.get(
     ` https://api.themoviedb.org/3/movie/${id}/similar?api_key=698c26f192e68da611452c5592599ea2 ` );
    
    setSimilar(data.results) ;
  }

  useEffect(() => {
   
    get_similar_by_id()
  }, []);

  

   const get_trailer_by_id=async()=> {
    const {data} = await axios.get(
     ` https://api.themoviedb.org/3/movie/${id}/videos?api_key=698c26f192e68da611452c5592599ea2 ` );
    
    setTrailer(data.results[0].key) ;
  }



  const get_movie_by_id = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}
     ?api_key=698c26f192e68da611452c5592599ea2`);
    setMovieInfo(data);
  };

  const get_cast = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=698c26f192e68da611452c5592599ea2`
    );
    setcast(data);
  };

  useEffect(() => {
    get_movie_by_id();
    get_cast();
    get_trailer_by_id()
  }, []);

  return (
    <div className="text-white " >
    <div className=" md:flex col  justify-between mb-20 w-5/6 md:w-3/6 m-auto">
      <div className="md:w-1/2">
        <img
          className="w-72 rounded-md"
          src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
          alt=""
        />
         <div><Link>
        {like ?   <AiFillHeart className="text-2xl" />:<AiOutlineHeart className="text-2xl"/>}
     </Link> </div>
      </div>
      <div className="md:w-2/3">
        <h1 className="text-5xl w-4/6 mb-6 font-bold" >{movieInfo.title}</h1>
        <div className="mb-5 flex flex-wrap">
          {movieInfo.genres?.map((gen, i) => (
            <span key={i} className="m-2 border-2 rounded-xl px-2 py-1">
              {gen.name}
            </span>
          ))}
        </div>
        <h1 className="text-2xl mt-10">overview</h1>
        <p>{movieInfo.overview}</p>
        <h1 className="mt-10 text-2xl">cast</h1>
        <div className="flex justify-around mt-3">
          {cast.cast?.slice(0, 5)?.map((cas, i) => (
            <div className="w-14 md:w-20"><img key={i} className=" rounded-md " src={`https://image.tmdb.org/t/p/w500${cas.profile_path}`} />
            <div>{cas.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center">
    <div className="h-[200px] md:h-[600px] w-3/6">
    <iframe className="md:w-[100%] md:h-[80%] w-[100%] "  src={`https://www.youtube.com/embed/${Trailer}` }title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <div className="flex w-5/6  movie mb-16 justify-center" onClick={()=>window.location.reload()}>
    {similarMovie.slice(0,7).map((data,i) => (
     <Link  to={`/movieInfo/${data.id}`}  > <img  key={i}
        className=" m-3 w-40  rounded-2xl  "
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt=""
      /></Link>
    ))}
  </div>
    </div>
    </div>
  );
}
