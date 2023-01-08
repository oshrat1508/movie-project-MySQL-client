import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import "./home.css";
import ShowImage from "../components/ShowImage";
import "swiper/css/bundle";
import "../App.css";

export default function Home() {
  const [dataPupolar, setdataPupolar] = useState([]);
  const [dataUpconing, setdataUpconing] = useState([]);
  const [dataTopRate, setdataTopRate] = useState([]);
  const [dataAiring_today, setdataAiring_today] = useState([]);

  const get_popular_movie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=698c26f192e68da611452c5592599ea2`
    );
    setdataPupolar(data.results);
  };

  const get_upcomung_movie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=698c26f192e68da611452c5592599ea2`
    );
    setdataUpconing(data.results);
  };

  const get_Top_Rate = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=698c26f192e68da611452c5592599ea2`
    );
    setdataTopRate(data.results);
  };

  const get_Airing_today = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=698c26f192e68da611452c5592599ea2`
    );
    setdataAiring_today(data.results);
  };

  useEffect(() => {
    get_Airing_today();
    get_Top_Rate();
    get_upcomung_movie();
    get_popular_movie();
  }, []);
  return (
<>

    <div className=" homeContainer justify-around flex flex-col mt-40">
    <ShowImage  arr={dataAiring_today} path='/tvInfo/' title='Airing today tv show' />
    <ShowImage arr={dataPupolar} path='/movieInfo/' title='popular movies' />
    <ShowImage arr={dataTopRate} path='/tvInfo/' title='top rated tv show' />
    <ShowImage arr={dataUpconing} path='/movieInfo/' title=' up coming movies' />

      
      
    </div></>
  );
}
