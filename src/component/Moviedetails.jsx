import Relevant from "./Relevant";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const Moviedetails = () => {

    let {id} = useParams();

    let navigate = useNavigate();

    let [movie,setMovie]=useState(null);
let [error,setError]=useState(null);



 useEffect(()=>{
    setMovie(null);
    setTimeout(()=>{
        fetch("http://localhost:4000/movies/" + id)
        .then((res)=>{return res.json()})
        .then((data)=>{setMovie(data)})
        .catch((err)=>{setError(err.message) })
    },3000)

} , [id])

let deleteMovie = ()=>{
    fetch("http://localhost:4000/movies/" + id , { method : "DELETE"})
    .then(()=>{ navigate("/")})
}

    return (
            <div className="movie-details">
            

             {movie==null && error==null  && <div style={{backgroundColor:"white"}}><br /><br /> <br /><br /> <br /><img src="https://thumbs.gfycat.com/AdorableMajesticJellyfish-size_restricted.gif" /> <br />  <br /> <br /><br /><br /> <br /><br /><br /><br /><br /><br /> </div>}

             {error && <h1>{error}</h1>}

             {movie &&  <div id="detail">
             
             
             <img src={movie.poster} alt="poster" />
        
             {/* <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

             
                <div id="trail">
               <h1>{movie.moviename}</h1> <br />
                <h3>Actor : {movie.hero} ,{movie.heroine}.</h3>
               <b>Director : </b> <span> {movie.director}.</span> <br />
               <b>Languages : </b> <span>{movie.languages.join(" , ")}.</span> <br />
                <b>Genre : </b><span>{movie.genre}</span> <br />
                <b>Release Date : </b> <span>{movie.release}</span> <br />
                <b>Rating : </b> <span>{movie.rating}</span> <br />
                <b>Trailer Link : </b><a href={movie.trailer}>{movie.trailer}</a>
                <h3>Story line : </h3>
                <p>{movie.synopsis}</p>
                <br />
                <br />
                <br />
                <br />
                <div id="trailer">
             <iframe width="430" height="280" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             
             <button onClick={deleteMovie} id="delete">DELETE</button>

             <Link to={`/edit/${movie.id}`}> <button id="update">Update</button> </Link> 
             

             </div>
             <br /><br /><br /> <br /><br /><br />
                </div>
              

             </div> }
            
            {movie && <Relevant genre={movie.genre}/>}


        </div>
           
    )
}

export default Moviedetails;