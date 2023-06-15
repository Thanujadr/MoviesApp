import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Addmovie from './component/Addmovie';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Moviedetails from './component/Moviedetails';
import Favorites from './component/Favorites';
import Signup from './component/Signup';
import Search from './component/Search';
import Profile from './component/Profile';
import Login from './component/Login';
import Editmovie from './component/Editmovie';



function App() {
  //"function component" 
  return (
    <div className="App">


      <BrowserRouter>

      <Navbar/>


      <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/addmovie" element={<Addmovie/>}/>
     <Route path="/moviedetails/:id" element={<Moviedetails/>}/>
     <Route path="/fav" element={<Favorites/>} />
     <Route path="/search/:searchkey" element={<Search/>}/>
     <Route path="/edit/:id" element={<Editmovie/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/profile" element={<Profile/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;