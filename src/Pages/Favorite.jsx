import React ,{useState,useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { Circles , Puff } from 'react-loader-spinner'


export default function Favorite() {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState();
  const [filteredTv, setFilteredTv] = useState();
  const user = JSON.parse(localStorage.getItem('user')).data
  const get_all_movies = async () => {
    const { data } = await axios.get("https://oshratproject.onrender.com/chillTime/movie");
    setMovies(data); 
     setFilteredMovies(updateedMovies)

  };

  const get_all_Tv = async () => {
    const { data } = await axios.get("https://oshratproject.onrender.com/chillTime/tv");
    setTv(data); 
    setFilteredTv(updateedTv)
  };

    const updateedMovies= user.like.map(like => movies.find(movie=> movie.id == like))
    const updateedTv= user.like.map(like => tv.find(tv=> tv.id == like))

  get_all_movies();
  get_all_Tv()
 
  


   
  return (
    <div className='flex flex-col items-center '>
          <h1 className="text-4xl mb-9">Favorite</h1>
          <div>
            <h1 className='text-3xl mb-3'>Movies</h1>
            <div className='flex flex-wrap w-[100vw] md:w-[80vw] justify-evenly'>{
              filteredMovies ?       
          filteredMovies.map((movie , i)=>(
            movie ?
              <Link key={i} to={`/movieInfo/${movie?.id}`}>
                    <div className="  hover:scale-110 md:mx-1 mb-1">
                    <img className="rounded-t-xl md:w-72 w-36 mb-2 md:mb-4 hover:duration-200" src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt="" />
                    <div className="md:relative  md:h-10 md:w-72 w-36 md:bottom-14 text-white md:bg-black md:bg-opacity-70 md:p-2">{movie?.title}</div>
                </div></Link> : null  
           
          )) :   < Puff
          height="80"
          width="80"
          radius="9"
          color="black"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        /> }
</div></div>
<div>
            <h1 className='text-3xl mb-3'>Tv show</h1>
            <div className='flex flex-wrap w-[100vw] md:w-[80vw] justify-evenly'>
              {filteredTv ?
          filteredTv.map((tv , i)=>(
            tv &&
              <Link key={i} to={`/tvInfo/${tv?.id}`}>
                    <div className="  hover:scale-110 md:mx-1 mb-1 ">
                    <img className="rounded-t-xl md:w-72 w-36 mb-2 md:mb-4 hover:duration-200" src={`https://image.tmdb.org/t/p/w500${tv?.backdrop_path}`} alt="" />
                    <div className="md:relative  md:h-10 md:w-72 w-36 md:bottom-14 text-white md:bg-black md:bg-opacity-70 md:p-2">{tv?.title}</div>
                </div></Link>   
           
          ))  :  <Puff
          height="80"
          width="80"
          color="black"
          radius="9"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        /> }
</div></div>
    </div>
  )
}
