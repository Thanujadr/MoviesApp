import { Link } from "react-router-dom";

const Profile = ()=> {
    return (

        <div id="profile">
            <h1>Welcome To My Movies</h1>  <br /> <br />
           <Link to="/signup"> <button className="btn">SignUp</button></Link>
           <Link to="/login">   <button className="btn">Login</button></Link>
        </div>
    )
}

export default Profile;