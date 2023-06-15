import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movieslist = ({movies,title}) => {

   let [altered,setaltered] = useState(0);

   let [favid , setFavid] = useState(null);

   useEffect(()=>{
    let fav = JSON.parse(localStorage.getItem("fav"));
    
    setFavid(fav.map((m)=>{return m.id}));
    console.log("useeffect");

   },[altered]);


    let addfav = (movie) =>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        fav = JSON.stringify(fav);
        localStorage.setItem("fav" , fav);
        setaltered(altered+1);
    }

   let removefav = (id) => {

            let fav = JSON.parse(localStorage.getItem("fav"));
            fav =  fav.filter((m)=>{return m.id != id});
            localStorage.setItem("fav" , JSON.stringify(fav));
            setaltered(altered+1);
   }

   


    return (
        <div>

        <h1 id="title">{title}</h1>
          
            <div className="movies">
                            {movies.map((movie)=>{ 
                                return(
                                  <div className="movie">


                                   { (favid && favid.includes(movie.id)) ?
                                     <button onClick={()=>{removefav(movie.id)}} id="remove-btn"><i class='bx bxs-heart'></i></button>
                                    : <button onClick={()=>{ addfav(movie) }} id="add-btn"> <i class='bx bx-heart'></i></button>
                                  }

                                     <Link to={`/moviedetails/${movie.id}`} id="detaillink">   
                                        <img src={movie.poster} width="250px" height="300px" />
                                        <h2> {movie.moviename}</h2>
                                        <h3>{movie.genre}.</h3>
                                     </Link> 
                                    </div>
                                )
                            })}
                        </div>

        </div>

    )
}

export default Movieslist;