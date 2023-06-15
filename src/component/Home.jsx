import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Home = () => {

let [movies,setMovies]=useState(null);
let [error,setError]=useState(null);


 useEffect(() => {

    if( localStorage.getItem("fav")==null )
    {
        localStorage.setItem("fav" , "[]")
    }

    setTimeout(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{setMovies(data)})
        .catch((err)=>{setError(err.message) })
    },2000)

} , [])

    return (
        <div className="home">
             {movies==null && error==null  && <div style={{backgroundColor:"white"}}><br /><br /> <br /><br /> <br /><div className="load" ></div>  <br /> <br /><br /><br /> <br /><br /><br /><br /><br /><br /> </div>}

            
             {error && <h1>{error}</h1>}

             {movies &&  <Movieslist movies={movies} title="All movies"/> }

             {movies &&  <Movieslist movies={movies.filter((m)=>{return m.genre.includes("Action")})} title="Action movies"/> }

             {movies &&  <Movieslist movies={movies.filter((m)=>{return m.rating >= 8.5})} title="Top rated movies"/> }

        </div>
    )
}

export default Home;