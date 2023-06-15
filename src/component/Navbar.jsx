import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


    let [searchword , setSearchWord] = useState("");
    let [movienames,setMovienames] = useState([]);
    let [menu,setMenu] = useState(false);


    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{
            let names = data.map((m)=>{return {moviename : m.moviename , id : m.id}});
            let filternames = names.filter((movie)=>{return movie.moviename.toLowerCase().includes(searchword.toLowerCase())});
            setMovienames(filternames);
        })
    },[searchword] )

    return (
        <nav>
            <div id="logo">
               <Link to="/" id="lnk"> <h1>Movies 🕷 </h1></Link>    
            </div>
            <div id="search-bar">
                <input type="text" placeholder="search for movies" value={searchword} 
                onChange={(e)=>{setSearchWord(e.target.value)}}/>
                  <Link to={`/search/${searchword}`}><button onClick={()=>{setSearchWord("")}}>Search</button></Link>
            </div>

            <div id="fav-movie">
           <a href="/fav"> <i class='bx bxs-heart' style={{color:"white" ,fontWeight:"bold",fontSize:"20px"}} ></i></a>
            </div>

            <div id="add-movie">
                <Link to="/addmovie">Add Movie</Link>
            </div>

            <div id="add-movie"> 
            <Link to="/signup">Signup</Link>
            </div>

            <div id="hamberger">
                <span onClick={()=>{setMenu(!menu)}}>
                  { menu == false ? <i class='bx bx-menu'> </i> :<i class='bx bx-menu-alt-right'></i>}
                </span>
                <div>
                            <div id="fav-movie">
                    <a href="/fav"> <i class='bx bxs-heart' style={{color:"white" ,fontWeight:"bold",fontSize:"20px"}} ></i></a>
                        </div>

                        <div id="add-movie">
                            <Link to="/addmovie">Add Movie</Link>
                        </div>

                        <div id="add-movie"> 
                        <Link to="/signup">Signup</Link>
                        </div>

                </div>
            </div>

           { searchword!="" && <div id="suggestion-box">
                <ul>
                      {movienames.map((movie)=>{return (<Link to={`/moviedetails/${movie.id}`} onClick={()=>{setSearchWord("")}}><li>{movie.moviename}</li></Link>)})}
                </ul>
            </div>}

        </nav>
    )
}

export default Navbar;