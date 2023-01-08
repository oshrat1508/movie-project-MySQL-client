import React from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import TV from "./Pages/Tv";
import Movie from "./Pages/Movie";
import MovieInfo from "./components/MovieInfo";
import TvInfo from "./components/TvInfo";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import SingUp from "./Pages/SingUp";
// import LogIn from "./Pages/LogIn";
import Account from "./Pages/Account";
import ProtectedRouter from "./components/ProtectedRouter";

export default function App() {
  return (
    <div className=" text-slate-200">
      <AuthContextProvider>
        <Navbar className=" z-0" />
      
        <Routes >
          <Route path="/" element={<Home className='z-10' />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movieInfo/:id" element={<MovieInfo />} />
          <Route path="/tvInfo/:id" element={<TvInfo />} />
          {/* <Route path="/singUp" element={<SingUp />} />
          <Route path="/logIn" element={<LogIn/>} /> */}
          <Route path="/account" element={<ProtectedRouter > <Account/></ProtectedRouter>} />

        </Routes>
      </AuthContextProvider>
      <Footer />
    </div>
  );
}
