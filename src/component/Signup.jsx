import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const { useRef } = require("react")

const Signup = ()=>{

    let navigate = useNavigate();

    let name = useRef();
    let email = useRef();
    let phone = useRef();
    let age = useRef();
    let pwd = useRef();

    let handleuser =(e)=>
    {
        e.preventDefault();

        let newuser ={
            name : name.current.value,
            email : email.current.value,
            phoneno : phone.current.value,
            age : age.current.value,
            password : pwd.current.value
        }

        fetch("  http://localhost:4005/users",{
                                                    method : "POST" ,
                                                    headers : { "Content-Type" : "application/json" } ,
                                                    body : JSON.stringify(newuser)
                                                })
        .then(()=>{ alert("New user added to the database");
                     navigate("/"); })

    }


    return (

        <div id="signup">
            <br />
     <form onSubmit={handleuser} >

        <h2>Sign Up</h2> <br />
    
    <input type="text" placeholder="Enter your name" ref={name}/><br /> <br />
    <input type="email" placeholder="Enter your email" ref={email}/><br /> <br />
    <input type="text" placeholder="Enter your phone Number" ref={phone}/><br /> <br />
    <input type="number" min="18" max="100" placeholder="Enter your age" ref={age}/> <br /> <br />
    <input type="password" placeholder="Enter password" ref={pwd}/> <br /> <br />

     <button id="sub">Submit</button>
     <br /> <br />

     <span>Already have an account </span>  <Link to="/login"> Login</Link>

    </form>

        </div>
    )
}
   
export default Signup;