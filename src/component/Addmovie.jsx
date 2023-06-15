import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// this is addmovie component
const Addmovie = ()=> {

 
    let navigate = useNavigate();

    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let yor = useRef();
    let rating = useRef();
    let poster = useRef();
    let trailer = useRef();
    let synopsis = useRef();
// this is addmovie component


    let handleAddMovie = (e)=>{
        e.preventDefault()

        let newMovie = {
            moviename: moviename.current.value,
            hero: hero.current.value,
            heroine: heroine.current.value,
            director: director.current.value,
            languages : [],
            genre: genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: yor.current.value,
            rating: rating.current.value,
            synopsis : synopsis.current.value,
          };


          let options = document.getElementsByName("lang");
          for (let i = 0; i < options.length; i++) 
          {
                if(options[i].checked)
                {
                    newMovie.languages.push(options[i].value)
                }
          }

          fetch("http://localhost:4000/movies" , {
                                                    method : "POST" ,
                                                    headers : { "Content-Type" : "application/json" } ,
                                                    body : JSON.stringify(newMovie)
                                                 })
          .then(()=>{
            alert("New movie added to the database");
            navigate("/");   //redirect to the home page after adding the new movie detai to the database
          })                                       

    }

    return (

        <div id="formback">
        <div id="movieform">
            <h2>***Add New Movie Details*** </h2>
            <br />
            <hr /><br /> 
            <form onSubmit={handleAddMovie}>
                <input type="text" placeholder="Moviename" ref={moviename} /><br /><br />
                <input type="text" placeholder="Hero Name" ref={hero} /> <br /><br />
                <input type="text" placeholder="Heroine Name" ref={heroine} /> <br /><br />
                <input type="text" placeholder="Director Name" ref={director}/> <br /><br />
                
                <fieldset >
                    <legend align="center"> Languages</legend>
                    <input type="checkbox" name="lang" value="Kannada" id="ka"/><label for="ka">Kannada</label>
                    <input type="checkbox" name="lang" value="Hindi" id="hi"/><label for="hi">Hindi</label>
                    <input type="checkbox" name="lang" value="Telugu" id="te"/><label for="te">Telugu</label>
                    <input type="checkbox" name="lang" value="Tamil" id="ta"/><label for="ta">Tamil</label>
                    <input type="checkbox" name="lang" value="Malyalam" id="ma"/><label for="ma">Malyalam</label>
                    </fieldset> <br />

                <input type="text" placeholder="Genre" ref={genre}/> <br /><br />
                <input type="url" name="" id="" placeholder="Poster link" ref={poster}/><br /><br />
                <input type="url" name="" id="" placeholder="Trailer link" ref={trailer}/> <br /><br />
                <input type="number" max="2024" min="1950" placeholder="Release year" ref={yor}/> <br /><br />
                <input type="number" max="10" min="1" step="0.1" placeholder="Rating" ref={rating}/> <br /><br />
                <textarea name="" id="" cols="74.8" rows="5" placeholder="Story line" ref={synopsis}></textarea> <br /><br />
                
                <input type="submit" value="Add" />
            </form>
        </div>
        </div>
    )
}
export default Addmovie;