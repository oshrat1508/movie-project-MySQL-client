import React ,{useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { UserAuth } from '../context//AuthContext'

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [erorr, setErorr] = useState('');
  const { logIn, user } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErorr('')
    try {
      await logIn(email, password);
      navigate('/')
    } catch (e) {
      console.log(e);
      setErorr(e.message)
    }
  };
    return (
      <>
      <div className="w-full justify-center items-center flex flex-col">
        <h1 className="text-5xl text-white font-bold mt-20">Log In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-10 ">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="email"
            className="mb-5 p-2 rounded-sm outline-none text-black"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            className="mb-5 p-2 rounded-sm outline-none text-black"
          />

          <button className="border-stone-500 border-4 rounded-md w-1/2 m-auto p-1 mb-7 ">Log In</button>
         
          <p>
           
            <span>already subscribed to chiltime</span>
            <Link to="/singUp " className="text-blue-900"> Sing Up</Link>
          </p>
        </form>
      </div>
    </>
      )
    }
