import axios from 'axios'


export const singup =(data)=> axios.post('http://localhost:8000/singup' , data)
export const singin =(data)=> axios.post('http://localhost:8000/singin' , data)
export const users =()=> axios.get('http://localhost:8000/user' )
export const usersUpdate =(data , id)=> axios.put(`http://localhost:8000/user/${id}` , data )
export const like =(data , id)=> axios.put(`http://localhost:8000/user/${id}/like` , data )

// export const forgotPassword = (data)=> axios.post('http://localhost:8000/forgot-password' , data)
export const forgotPassword = (data)=> axios.post('http://localhost:8000/forgot-password' , data)

