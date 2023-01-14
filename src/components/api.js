import axios from 'axios'


export const singup =(data)=> axios.post('https://oshratproject.onrender.com//singup' , data)
export const singin =(data)=> axios.post('https://oshratproject.onrender.com//singin' , data)
export const usersById = (id)=> axios.get(`https://oshratproject.onrender.com//users/${id}`)
export const users =()=> axios.get('https://oshratproject.onrender.com//users' )
export const usersUpdate =(data , id)=> axios.put(`https://oshratproject.onrender.com//users/${id}` , data )
export const like =(data , movieid)=> axios.put(`https://oshratproject.onrender.com//like/${movieid}` , data )

export const forgotPassword = (data)=> axios.post('https://oshratproject.onrender.com//forgot-password' , data)

