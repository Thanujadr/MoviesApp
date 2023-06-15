import { useParams } from "react-router-dom"
import Movieslist from "./Movieslist";
import { useState,useEffect } from "react";


const Search = () => {

    let [movies,setMovies]=useState(null);
    let {searchkey} = useParams();
    let [error,setError]=useState(null);
    


    useEffect(()=>{
        setMovies(null);
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{
                
                let d = data.filter((m)=>{return (m.moviename.toLowerCase().startsWith(searchkey.toLowerCase())) ||
                                                 (m.genre.toLowerCase()===searchkey.toLowerCase())   ||
                                                 (m.languages.includes(searchkey))
                                                  
                })
                
                setMovies(d)})
            .catch((err)=>{setError(err.message) })    
             
        },3000)
    
    },[searchkey])


    return (
        <div>

{movies==null && error==null  && <div style={{backgroundColor:"white"}}><br /><br /> <br /><br /> <br /><img src="https://thumbs.gfycat.com/AdorableMajesticJellyfish-size_restricted.gif" /> <br />  <br /> <br /><br /><br /> <br /><br /><br /><br /><br /><br /> </div>}

           {movies && <Movieslist movies={ movies } title="Search result"/>}

        </div>
    )
}
export default Search;