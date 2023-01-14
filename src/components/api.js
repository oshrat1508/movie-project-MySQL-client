import axios from 'axios'


export const singup =(data)=> axios.post('http://localhost:8000/singup' , data)
export const singin =(data)=> axios.post('http://localhost:8000/singin' , data)
export const usersById = (id)=> axios.get(`http://localhost:8000/user/${id}`)
export const users =()=> axios.get('http://localhost:8000/user' )
export const usersUpdate =(data , id)=> axios.put(`http://localhost:8000/user/${id}` , data )
export const like =(data , movieid)=> axios.put(`http://localhost:8000/like/${movieid}` , data )

// export const forgotPassword = (data)=> axios.post('http://localhost:8000/forgot-password' , data)
export const forgotPassword = (data)=> axios.post('http://localhost:8000/forgot-password' , data)

