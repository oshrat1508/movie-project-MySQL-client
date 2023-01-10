import React  from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import TV from "./Pages/Tv";
import Movie from "./Pages/Movie";
import MovieInfo from "./components/MovieInfo";
import TvInfo from "./components/TvInfo";
import Footer from "./components/Footer";
// import Account from "./Pages/Account";
// import ProtectedRouter from "./components/ProtectedRouter";
import Auth from "./Pages/Auth";
import {  Provider } from 'react-redux'
import { createStore } from 'redux'
import {authReducer} from './redux/reducer'

export default function App() {
const store = createStore(authReducer)

  return (
    <div className=" text-slate-200">
      <Provider store={store}>
        <Navbar className=" z-0" />
        <Routes >
          <Route path="/" element={<Home className='z-10' />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movieInfo/:id" element={<MovieInfo />} />
          <Route path="/tvInfo/:id" element={<TvInfo />} />
           <Route path="/auth" element={<Auth />} />
          {/* <Route path="/logIn" element={<LogIn/>} /> */}
                    {/* <Route path="/account" element={<ProtectedRouter > <Account/></ProtectedRouter>} /> */}

        </Routes>
      <Footer />
      </Provider>
    </div>
  );
}
