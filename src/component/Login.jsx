import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Login = ()=>{

    let [users,setUsers]=useState("");

    let mail=useRef();
    let pwd = useRef();

useEffect(()=>{
    fetch("http://localhost:4005/users")
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data); setUsers(data)})
},[])

let login=()=>{
   let u = users.find((user)=>{return user.email==mail.current.value })
   console.log(u.email);
}

    return (
        <div id="login">
            <h1>Login</h1>
            <br /> <br />

            <input type="email" placeholder="Enter your email" ref={mail}/><br /><br />
            <input type="password" placeholder="Enter password" id="" ref={pwd}/> <br /> <br />
           <button type="submit" onClick={login}>Login</button>
             <br /> <br />
            <span>Don't have an account  </span><Link to="/signup"> SignUp</Link>
        </div>
    )
}

export default Login;