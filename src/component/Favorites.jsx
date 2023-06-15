import { useState , useEffect } from "react"
import Movieslist from "./Movieslist";
// import Movieslist from "./Movieslist";

const Favorites = () => {


    let [favoriteMovies , setFav] = useState(null);

    useEffect(()=>{
        setFav(JSON.parse(localStorage.getItem("fav")))
    } , [favoriteMovies])

    return (

        <div>
            {favoriteMovies &&  <Movieslist movies={favoriteMovies} title="Favorite List" />}
        </div>
    )
}

export default Favorites;