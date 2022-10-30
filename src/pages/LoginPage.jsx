import React, {useState} from "react";
import Logo from "../assets/RYTLogo.svg";
import GoogleIcon from "../assets/GoogleIcon.svg";
import { FormWrapper, Wrapper, Form , Info} from "../styles/StudentStyles/LoginPageStyles";
// import axios from "/Users/decagon/Downloads/reward-your-teacher/src/api/axios.js";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";


const LoginPage = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");

        const handleEmail = (e) => {
          e.preventDefault();
          setEmail(e.target.value);
        };

        const handlePassword = (e) => {
          e.preventDefault();
          setPassword(e.target.value);
        };

        const navigate = useNavigate();

  
        async function handleSubmit(e){
          e.preventDefault();
          const data = {  email,  password};
          console.log(data)
          try{
             const res=  await axios.post("http://localhost:8080/api/v1/user/login", data);
          console.log(res) 
          localStorage.setItem("token", res.data.payload.token)
            if(res.data.success == true){
              Swal.fire({
                  title: 'Success',
                  text: "Login Successful",
                  icon: 'success',
                  // confirmButtonText: 'Cool'
                }) 
                if(res.data.payload.role === "TEACHER"){
                  localStorage.setItem("isTeacher", res.data.payload.id)
                  navigate('/teacher')
                }else if(res.data.payload.role === "STUDENT"){
                  localStorage.setItem("isStudent", res.data.payload.id)
                  navigate('/student')
                }
                
               
         
              console.log(res)
            }else{
              Swal.fire({
                title: 'Error!',
                text:"User Data not found, please register",
                icon: 'error',
                confirmButtonText: 'Cool'
              })
            }
          // setId("");
          setEmail("");
          setPassword("");
         
  
      }
  
      
      catch(err){
          Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          console.log(err);
      }
  
      }

         return (
        <Wrapper>
            <div className="img--logo">
            <img src={Logo} alt="Logo" />
            <h2>Reward your Teacher</h2>
            </div>
          <FormWrapper>
         
             <Form>
             {/* <h3 className="form--header">Login as an old student</h3> */}
             <form onSubmit={handleSubmit}>
               <div>
                 <p className="form--title">Email</p>
                 <input type= "email" placeholder="Enter your email" name="email" className="form--input" onChange={(e)=>setEmail(e.target.value)}/>
               </div>
               <div>
                 <p className="form--title">Password</p>
                 <input type= "password" placeholder="Enter your password" name="password" className="form--input" onChange={(e)=>setPassword(e.target.value)} />
               </div>
               <div>
                <p className="form--title"><a href= "" id="forget--password"> Forget Password?</a></p>
                </div>
                <div>
                    <button className="form--btn" type="submit">Login</button>
                    <div className="error">{error && <p>{error}</p>}</div>
                </div>
      
                </form>
             </Form>
             <Info>
               <div className="option">
               <div className="hr"></div>
                    <h3> Or </h3>
                    <div className="hr"></div>
                </div>
                
                <div className="sign--up">
                  <img src={GoogleIcon} alt="" />
                  <p>Sign Up with Google</p>
                </div>
               <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:"5%"}}>
                <p>Don't have an account? <Link to="/studentsignup">Create Account as Student? </Link></p>
                <p><Link to="/teachersignup">Create Account as Teacher? </Link></p>
               </div>
               </Info>
          </FormWrapper>
        </Wrapper>
    )
}

export default LoginPage;