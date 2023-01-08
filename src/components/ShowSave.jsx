// import React,{useEffect , useState} from 'react'
// import { UserAuth } from '../context/AuthContext'
// import{db} from '../firebase/FireBase'
// import {updateDoc , doc , onSnapshot} from 'firebase/firestore'
// import { Circles } from 'react-loader-spinner'


// export default function ShowSave() {
//     const [ movie , setMovie] = useState(null)
//     console.log(movie);
//     const {user} = UserAuth()
    
//     useEffect(()=>{
//         onSnapshot(doc(db , 'users' , `${user?.email}`),(doc)=>{setMovie(doc.data()?.savedShows)})
//     },[user?.email])

//     const movieRef = doc(db,'users' , `${user?.email}`)
//     const deleteShow = async(passedId)=>{
//   try{
//    const results = movie.filter((item)=>item.id !== passedId)
//    await updateDoc(movieRef , {
//     savedShows:results
//    })
//   }catch(e){
//     console.log(e);
//   }
//     }
//   return (
//    <> {movie ?  <div className=' flex flex-col justify-center items-center h-[100%]'>
//       <h1 className='text-4xl mb-10'>your favorite movie's</h1>
// <div className=' flex flex-wrap  '>
//         {movie?.map((item , id)=>(    <div className='w-60 ml-5'>
//          <img className="w-60 rounded-md"  key={id} src={`https://image.tmdb.org/t/p/w500${item.img}`} alt="" /> 
//                 <div className='relative bottom-[90%] text-center w-7 font-bold bg-black bg-opacity-75 rounded-md cursor-pointer h-7' onClick={()=>deleteShow(item.id)}>X</div>

//        </div> ))}</div> 
//     </div> : <Circles className=''
//   height="500"
//   width="80"
//   color="white"
//   radius="9"
//   ariaLabel="loading"
//   wrapperStyle
//   wrapperClass
// /> }</> 
//   )
// }
