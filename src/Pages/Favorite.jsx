import React ,{useState,useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { Circles , MutatingDots } from 'react-loader-spinner'


export default function Favorite() {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState();
  const [filteredTv, setFilteredTv] = useState();
  const user = JSON.parse(localStorage.getItem('user')).data
  const get_all_movies = async () => {
    const { data } = await axios.get("http://localhost:8000/chilTime/movie");
    setMovies(data); 
     setFilteredMovies(updateedMovies)

  };

  const get_all_Tv = async () => {
    const { data } = await axios.get("http://localhost:8000/chilTime/tv");
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
            <div className='flex flex-wrap w-[80vw]'>{
              filteredMovies ?       
          filteredMovies.map((movie , i)=>(
            movie ?
              <Link key={i} to={`/movieInfo/${movie?.id}`}>
                    <div className=" hover:scale-110 mx-1 ">
                    <img className="rounded-t-xl md:w-72 w-40 mb-4  hover:duration-200" src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt="" />
                    <div className="relative h-10 md:w-72 w-40  bottom-14 text-white bg-black bg-opacity-70 p-2">{movie?.title}</div>
                </div></Link> : null  
           
          )) :   < MutatingDots
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        /> }
</div></div>
<div>
            <h1 className='text-3xl mb-3'>Tv show</h1>
            <div className='flex flex-wrap w-[80vw]'>
              {filteredTv ?
          filteredTv.map((tv , i)=>(
            tv &&
              <Link key={i} to={`/tvInfo/${tv?.id}`}>
                    <div className=" hover:scale-110 mx-1 ">
                    <img className="rounded-t-xl md:w-72 w-40 mb-4  hover:duration-200" src={`https://image.tmdb.org/t/p/w500${tv?.backdrop_path}`} alt="" />
                    <div className="relative h-10 md:w-72 w-40  bottom-14 text-white bg-black bg-opacity-70 p-2">{tv?.title}</div>
                </div></Link>   
           
          ))  :  <MutatingDots
          height="500"
          width="80"
          color="white"
          radius="9"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        /> }
</div></div>
    </div>
  )
}
