import './registerPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faExclamation } from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2"
import axios from 'axios'
import PasswordChecklist from "react-password-checklist"
import validator from "validator"
import reward_your_teacher from "./reward_your_teacher.svg";
import help from "./rwt.png"

const RegisterPage = () => {
    const[name,setName]= useState("");
    const[password,setPassword]= useState("");
    const[email, setEmail]= useState("");
    const [message, setMessage] = useState('');
    const[schoolName,setSchool]= useState("");

    const navigate = useNavigate();

    const validateEmail = (e) => {
        var email = e.target.value;

        if (validator.isEmail(email)) {
        setMessage("");
        } else {
        setMessage("Please, enter valid Email!");
        }
    };

    async function googleSignIn(){

    }

    async function handleStudentRegister(event){
        event.preventDefault();
       
        try{
           const res=  await axios.post("http://localhost:8080/api/v1/user/register/student",
        {
        name: name,
        email: email,
        password: password,
        schoolName: schoolName
        });
        console.log(res.status) 
       
          if(res.status == 200){
            Swal.fire({
                title: 'Success',
                text: "User Registration Successful",
                icon: 'success',
                // confirmButtonText: 'Cool'
              }) 
        navigate("/login");

            //   window.location.href('/studentlogin')
          }
        // setId("");
        setName("");
        setEmail("");
        setPassword("");
        setSchool("");
       

    }

    
    catch(err){
        Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
            // confirmButtonText: 'Cool'
          })
        console.log(err.response.data);
    }

    }
    async function getAllSchools(event)
    {
        event.preventDefault();
        const res=  await axios.get("http://localhost:8080/api/v1/register/teacher")  

    }

    return (  
        
        <div >
            <span className='fluid-container'>
                
            <span><img className='m-5' src={help}></img></span>
                
            </span>
            
            <div className="container " >
                <div className='card  mt-5 justify-content-center align-items-center' style={{"border":"none"}}>
                   
                    <div className="fluid-container m-2" style={{"width":"60%","backgroundColor":"",border:"1px solid gray"}}>
                    

                        <div className='mx-0'>
                            <h5 className=" mb-3 mx-0 mx-md-4 mt-4 my-sm-1">Sign up as an Old Student</h5>
                        </div>

                        <form className="mx-1 mx-md-4 mx-sm-1 my-sm-.5" style={{}} onSubmit={handleStudentRegister}>
                            <label className="input_labels"  style={{margin:"0px"}}>Name</label>
                            <div className="d-flex flex-row align-items-center mb-4">
                                {/* <FontAwesomeIcon icon={faUser} /> */}
                                
                                <div className="form-outline flex-fill mb-0">
                                    

                                    <input type="text" value={name}  className="form-control" style={{"border-radius":"0px"}} placeholder="Name"
                                    required={true}
                                        onChange={(event)=>
                                        {
                                            setName(event.target.value)
                                            // console.log(event.target.value)
                                        }}
                                        />
                                
                                </div>
                            </div>
                            

                            <label className=""  style={{margin:"0px"}}>Email</label>
                            <div className="d-flex flex-row align-items-center mb-4">
                                {/* <FontAwesomeIcon icon={faExclamation} /> */}
                                <div className="form-outline flex-fill mb-0">
                                <input required type="email" id="form3Example3c" value={email} className="form-control" style={{"border-radius":"0px"}} placeholder="Your Email" 
                                    onChange= {
                                        (e) => {
                                            validateEmail(e)
                                            setEmail(e.target.value)
                                        }
                                    }
                                    
                                    />
                                
                                <span
                                    style={{
                                    fontWeight: "bold",
                                    color: "red"
                                    }}
                                >
                                    {message}
                                </span>
                                </div>
                            </div>
                            <label className=""  style={{margin:"0px"}}>Password</label>
                            <div className="d-flex flex-row align-items-center mb-4">
                                
                                <div className="form-outline flex-fill mb-0">
                                <input type="password" required id="form3Example4c" className="form-control" style={{"border-radius":"0px"}} placeholder="Password"
                                    onChange={(event)=>
                                        {
                                            setPassword(event.target.value)
                                        }}
                                />
                                {/* <label className="form-label" for="form3Example4c">Password</label> */}
                                </div>
                            </div>
                            
                            
                            <label className=""  style={{margin:"0px"}}>School</label>
                            <div className="d-flex flex-row align-items-center mb-4">
                                
                                <div className="form-outline flex-fill mb-0">
                                <select class="form-select" required aria-label="Default select example" 
                                    onChange={(e)=>
                                    {
                                        setSchool(e.target.value)
                                        // console.log(e.target.value);
                                    }}>
                                    <option value=""></option>
                                    <option value="British International School Lagos">British International School Lagos</option>
                                    <option value="Emmanuel International College">Emmanuel International College</option>
                                    <option value="Effective International College">Effective International College</option> 
                                </select>
                                {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                                </div>
                            </div>

                            

                            <div className="d-grid w-100 gap-2 br-0">
                                <button  type="submit"   className="btn btn-success btn-lg" style={{width:"50%"}}>Register</button>
                            </div>
                            <PasswordChecklist
                                rules={["minLength","specialChar","number","capital"]}
                                minLength={8}
                                value={password}
                                
                                onChange={(isValid) => {}}
                                messages={{
                                    minLength: "At least 8 Characters expected",
                                    specialChar: "At leats 1 special character",
                                    number: "At least 1 number needed",
                                    capital: "At least 1 capital letter"
                                    
                                }}
                            />

                        </form>
                        
                        <div className="d-grid w-100 gap-2 br-0">
                            <button  type="submit"   className="btn btn-success btn-lg" style={{width:"50%"}}>Sign Up with Google</button>
                        </div>
                        

                    </div>
                        
                </div>
            </div>
                  
          
        
        </div>
    );
}
 
export default RegisterPage;
