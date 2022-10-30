import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import GoogleLogin from "react-google-login"
import PasswordChecklist from "react-password-checklist"
import validator from "validator"
import reward_your_teacher from "./reward_your_teacher.svg";
import help from "./rwt.png"
import { gapi } from 'gapi-script';


const TeacherSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [schoolName, setSchool] = useState("");
  const [yearsOfTeaching, setYearsOfTeaching] = useState("");
  const [subjectTaught, setSubjectTaught] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [about, setAbout] = useState("");
  const [nin, setNin] = useState(null);
  const [position, setPosition] = useState(null);
  const [message,setMessage]= useState("")
  const navigate = useNavigate();
  const [schools, setSchools] = useState([]);

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
    setMessage("");
    } else {
    setMessage("Please, enter valid Email!");
    }
};


// this function is triggered if the postin of data to db is successful
const onSuccess = (res) => {
    res.preventDefault();
    // function principalData is meant to take in details provided by google in JSON Format
    const principalData = {
        email:res.profileObj.email,
        name:res.profileObj.name,
        imageUrl:res.profileObj.imageUrl,
    }
    
    // the axios post method adds data from PrincipalData json to the database
    axios.post('http://localhost:8080/api/v1/user/register/teacher/callback', principalData)
    
    .then((res)=> {
       
        console.log(res);
   
        return res
        
    })
    .catch(function (error) {
        console.log(error);
    });
    Swal.fire({
        title: 'Success!',
        text: "Teacher LogIn Successful",
        icon: 'success',
        confirmButtonText: 'Cool'
        
    })
    
      
};


const onFailure = (err) => {
    console.log('failed:', err);
    Swal.fire({
        title: 'Error!',
        text: "Teacher LogIn/SignUp Failed",
        icon: 'error',
        confirmButtonText: 'Cool'
      
    })
};

    const  getSchools = async()=>{

        const token = localStorage.getItem("token");
        try {
            console.log("getting schools")
            let schoolData = await axios.get(`http://localhost:8080/api/v1/school/retrieve`)
            let scData = schoolData.data.payload
            setSchools(scData)
            console.log(schoolData)
            console.log(schools)
        } catch (error) {

        }
    }

    useEffect(()=>{
        getSchools();
    },[])
// Insert your google clientID u got when you registered
const myclientId = "975396565590-tbh90bv51ftcus3r0q5kocmdbmdictdj.apps.googleusercontent.com";

// A default implementation that was shipped with Google LogIn Component
useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: myclientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
 });

async function handleTeacherRegister(event){
    event.preventDefault();

    try{
       const res=  await axios.post("http://localhost:8080/api/v1/user/register/teacher",
    {
    name: name,
    email: email,
    password: password,
    schoolName: schoolName,
    yearsOfTeaching:yearsOfTeaching,
    subjectTaught:subjectTaught,
    phoneNumber:phoneNumber,
    status:status,
    about:about,
    position:position
    });
    console.log(res)
    console.log(schoolName)
    if(res.data.success === true){
    Swal.fire({
        title: 'Success',
        text: "Teacher Registration Successful",
        icon: 'success',
        
      })
    
    
    setName("");
    setEmail("");
    setPassword("");
    setSchool("");
    setYearsOfTeaching("");
    setSubjectTaught("");
    setPhoneNumber("");
    setStatus("");
    setAbout("");

    setPosition("");
    navigate('/login')
    }

}


catch(err){
    Swal.fire({
        title: 'Error!',
        text: err.response.data.message,
        icon: 'error',
        // confirmButtonText: 'Cool'
      })
    console.log(err.response.data.message);
}

}
    
  const handleFileSelect = (event) => {
    setNin(event.target.files[0]);
  };

  return(
    <div>

<span className='fluid-container'>
                
                <span><img className='m-5' src={help}></img></span>
                    
                </span>
                
                <div className="container " >
                    <div className='card  mt-5 justify-content-center align-items-center' style={{"border":"none"}}>
                        
                        <div className="fluid-container m-2" style={{"width":"60%","backgroundColor":"",border:"1px solid gray"}}>
                        
    
                            <div className='mx-0'>
                                <h5 className=" mb-3 mx-0 mx-md-4 mt-4 my-sm-1">Sign up as an Old Student</h5>
                            </div>
    
                            <form className="mx-1 mx-md-4 mx-sm-1 my-sm-.5" style={{}} onSubmit={handleTeacherRegister}>
                                <label className="input_labels"  style={{margin:"0px"}}>Name</label>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    {/* <FontAwesomeIcon icon={faUser} /> */}
                                    
                                    <div className="form-outline flex-fill mb-0">
                                        
    
                                        <input type="text" value={name}  className="form-control" style={{"border-radius":"0px"}} placeholder="Name"
                                        required={true}
                                            onChange={(event)=>
                                            {
                                                setName(event.target.value)
                                                console.log(event.target.value)
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

                                <label className=""  style={{margin:"0px"}}>Contact</label>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="text" required id="form3Example4c" className="form-control" style={{"border-radius":"0px"}} placeholder="Phone Number"
                                        onChange={(event)=>
                                            {
                                                setPhoneNumber(event.target.value)
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
                                            console.log(e.target.value);
                                        }}    
                                    >
                                        <option value=""></option>
                                        {schools.map((school, index) => {
                                            return (
                                        <option value={school.id}>{school.schoolName}</option>
                                        );
                                        })}
                                        </select>
                                    {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                                    </div>
                                </div>
                                
                                <label className=""  style={{margin:"0px"}}>Years Of Teaching</label>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="text" required id="form3Example4c" className="form-control" style={{"border-radius":"0px"}} placeholder="e.g 1993-2000"
                                        onChange={(event)=>
                                            {
                                                setYearsOfTeaching(event.target.value)
                                            }}
                                    />
                                    {/* <label className="form-label" for="form3Example4c">Password</label> */}
                                    </div>
                                </div>

                                <label className=""  style={{margin:"0px"}}>Subjects Taught</label>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    
                                    <div className="form-outline flex-fill mb-0">
                                    <select class="form-select" required aria-label="Default select example" 
                                        onChange={(e)=>
                                        {
                                            setSubjectTaught(e.target.value)
                                            console.log(e.target.value);
                                        }}    
                                    >
                                        <option value=""></option>
                                        <option value="Mathematics">Mathematics</option>
                                        <option value="English">English</option>
                                        <option value="Chemistry">Chemistry</option> 
                                        <option value="Physics">Physics</option>
                                        <option value="Yoruba">Yoruba</option>
                                        <option value="Integrated Science">Integrated Science</option>
                                        <option value="Foods and Nuts">Foods and Nuts</option>
                                        <option value="Social Studies">Social Studies</option>
                                    </select>
                                    {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                                    </div>
                                </div>
                                <label className=""  style={{margin:"0px"}}>About</label>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    
                                    <div className="form-outline flex-fill mb-0">
                                    <textarea type="text" rows="5" required id="form3Example4c" className="form-control" style={{"border-radius":"0px"}} placeholder="Describe yourself"
                                        onChange={(event)=>
                                            {
                                                setAbout(event.target.value)
                                            }}
                                    >
                                    </textarea>
                                    {/* <label className="form-label" for="form3Example4c">Password</label> */}
                                    </div>
                                </div>

                                <label className=""  style={{margin:"0px"}}>Status</label>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    
                                    <div className="form-outline flex-fill mb-0">
                                    <select class="form-select" required aria-label="Default select example"
                                        onChange={(e)=>
                                        {
                                            setStatus(e.target.value)
                                            console.log(e.target.value);
                                        }}    
                                    >
                                        <option value=""></option>
                                        <option value="Active">Active</option>
                                        <option value="Retired">Retired</option>
                                        
                                    </select>
                                    {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                                    </div>
                                </div>

                                <label className=""  style={{margin:"0px"}}>Position</label>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    
                                    <div className="form-outline flex-fill mb-0">
                                    <select class="form-select" required aria-label="Default select example"
                                        onChange={(e)=>
                                        {
                                            setPosition(e.target.value)
                                            console.log(e.target.value);
                                        }}    
                                    >
                                        <option value=""></option>
                                        <option value="Class Teacher">Class Teacher</option>
                                        <option value="RPrincipal">Principal</option>
                                        <option value="Vice-Principal">VicePrincipal</option>
                                        
                                    </select>
                                    {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                                    </div>
                                </div>

    
                                <div className="d-grid gap-2 br-0">
                                    <button  type="submit"   className="btn btn-success btn-lg" style={{"border-radius":"0px"}}>Register</button>
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
                            
                            <div className="d-grid gap-2 br-0">
                                {/* //  GoogleLogin */}
                            <GoogleLogin
                                clientId={myclientId}
                                buttonText="Sign In with Google"
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                                backgroundColor="#A31515"
                            />
                                {/* <button  type="submit"   className="btn btn-success btn-lg" style={{"border-radius":"0px"}}>Sign Up with Google</button> */}
                            </div>
                            
    
                        </div>
                            
                    </div>
                </div>
    </div>
  )
  
}

export default TeacherSignUp