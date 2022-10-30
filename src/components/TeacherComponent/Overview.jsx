import axios from 'axios'
import React from 'react'
import { useState, useEffect  } from 'react'
import CurrencyFormat from 'react-currency-format'
import { BottomBoxSection,  OverviewWrapper, TopBoxSection, TransactionDetails } from '../../styles/TeacherStyles/OverviewStyles'
import StudentProfile from "../TeacherComponent/StudentProfileModal";



const Overview = ({teacherDetails}) => {
  console.log(teacherDetails)
const [transactionState, setTransactionState] = useState({})
const [studentprofileToggle, setStudentprofiletoggle] = useState(false);
const [studentDetail, setStudentDetail] = useState(null);
const[id, setId] = useState(0);

  const TransactionHistory = async() =>{

    try{
    const token = localStorage.getItem("token")
    console.log("token . got")
   const transaction =await axios.get('http://localhost:8080/api/v1/authUser/transaction-history', {
      headers:{
        Authorization: token
      }
    })
  console.log(transaction.data.payload)
  setTransactionState(transaction.data.payload)
  console.log((transactionState));
    }catch (error){
      alert('an error occured')
      console.log(error)
    }

  
  }

  useEffect(()=>{
    TransactionHistory()
  },[])

    async function getStudentDetail(e){
        console.log('React tire me')
        await  axios.get(`http://localhost:8080/api/v1/student/${e}`,  {
            headers:{Authorization: localStorage.getItem("token")}

        }).then((responses)=>{
            console.log(responses)
            if(responses.data.message ===
                "Request Successful"){
            let details = responses.data.payload
            setStudentDetail(details);
            setStudentprofiletoggle(true);
            }
        })
    }

  return (
    <OverviewWrapper>
      <h2>My Dashboard</h2>
      <TopBoxSection>
        <div>
          <h4>My Wallet Balance</h4>
          <p>Account is active</p>
        </div>
        <h1>&#8358;<CurrencyFormat value={teacherDetails.wallet} displayType={'text'} thousandSeparator={true} /></h1>
       <div>
       Total money received
       </div>
      </TopBoxSection>
      <BottomBoxSection>
        <TransactionDetails > 

              <table >
                      <tr>
                          <th>Most recent</th>
                          <th><div>New</div></th>
                      </tr>
                      { transactionState.length > 0 ? transactionState.map((item, index) => (
                      <tr>
                          <td>
                            <h4>{item.sender.name} sent you N{item.amount}</h4>
                            <h6>{item.date}</h6>
                          </td>
                          <td><button onClick={()=>getStudentDetail(item.sender.id)}>View student</button></td>
                      </tr>)
                      ):<></>}
              </table>
        </TransactionDetails>
      </BottomBoxSection>
        { studentprofileToggle &&
            <StudentProfile
                setStudentprofiletoggle = {setStudentprofiletoggle}
                studentDetail = {studentDetail}
                setStudentDetail = {setStudentDetail}
            />
        }
    </OverviewWrapper>
  )
}

export default Overview