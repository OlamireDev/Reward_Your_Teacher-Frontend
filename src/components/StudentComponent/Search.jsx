
import React, { useEffect, useState, useRef } from "react";
import { BsFilterLeft } from "react-icons/bs";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import { StudentTeacherWrapper } from "../../styles/StudentStyles/StudentTeacher";
import TeacherProfile from "./TeacherProfileModal";
import TransferModal  from "./TeacherTransfer";


const Search = () => {
  const teachersData = []
  const [teacherprofiletoggle, setTeacherprofiletoggle] = useState(false);
  const [teacherPayemntToggle, setTeacherPaymentToggle] = useState(false);
  const [teachers, setTeachers] = useState(teachersData);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(10);
  const [searchKey, setSearchKey] = useState("");
  const searchRef = useRef("");
  const navigate = useNavigate()
  const [teacherDetail, setTeacherDetail] =useState({})
  const search  = useLocation().state.searchKey;

  const navigateToSearch = () => {
    // 👇️ navigate to /contacts
    navigate("/student/schools/searchTeachers", { state: { searchKey: searchKey } });
  };

  const fetchTeachers = async () => {
    // const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1eWlnZW9yZ2VAbWFpbC5jb20iLCJleHAiOjE2NjUyNjQxMTcsImlhdCI6MTY2NTI0NjExN30.kWt7rCpZ0yTQPD5oAcYeoybsUdrRyPFRUscAy7grGY5f57qZHAVlyy0INID56l-4ObbN8_Wwz-ZI5a4DAjA2IQ"
    const rawToken = localStorage.getItem("token");
    const tokenSplit = rawToken.split(' ')
    const token = tokenSplit[1]
    try {
    //    const token = localStorage.getItem("token");
      console.log(search + ' how fa')
      await axios
        .get(
            `http://localhost:8080/api/v1/teacher/search/${search}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
       
        .then((response) => {
          console.log(response)
          const allSchoolTeachers = response.data.payload;
          console.log(allSchoolTeachers);
          setTeachers(allSchoolTeachers);
          console.log("teacher page", allSchoolTeachers);
          console.log("there", teachers);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTeacherInfo = async (teacher) => {
      setTeacherprofiletoggle(true)
      setTeacherPaymentToggle(false)
      setTeacherDetail(teacher)
      console.log(teacher)
  }
  const lastPageNum = totalPages - 1;
  console.log("lastpage number is: ", lastPageNum);
  const nextPage = () => {
    setPageNumber((prevState) => {
      return prevState + 1;
    });
    console.log("pagenumber is: ", pageNumber);
    console.log("nextpage");
  };
  const previousPage = () => {
    setPageNumber((prevState) => {
      return prevState - 1;
    });
    console.log("prevpage");
  };
  useEffect(() => {
    fetchTeachers();
  }, []);
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setSearchKey(searchRef.current.value);
    console.log("this", searchRef.current.value);
  };
  return (
    <StudentTeacherWrapper>
    <div className="teacher">
      <h2>All Teachers</h2>
      <div className="filterSearch">
        <input
          className="search"
          type="text"
          ref={searchRef}
          onChange={handleChange}
          placeholder="Search"
          value={searchKey.searchTerm}
          name="searchTerm"
        ></input>
        <div className="filter">
          <button onClick = {navigateToSearch} className="dropbtn">
            Search
            <i>
              <BsFilterLeft />
            </i>
          </button>
        </div>
      </div>
      <div className="table">
        <table className="teacherTable">
          <thead className="tableHeading">
            <tr>
              <th className="tableData">Name</th>
              <th className="tableData">School</th>
              <th className="tableData">Position</th>
              <th className="tableData">Years of Teaching</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => {
              return (
                <tr className="tableRow" key={teacher.email} onClick= {()=>{fetchTeacherInfo(teacher)}} style={{cursor:"pointer"}}>
                  <td className="tableData">{teacher.name}</td>
                  <td className="tableData">{teacher.schoolName}</td>
                  <td className="tableData">{teacher.position}</td>
                  <td className="tableData">{teacher.yearsOfTeaching}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <a href="#" onClick={previousPage}>
          {" "}
          &laquo;
        </a>
        <a href="#" onClick={() => setPageNumber(0)}>
          {" "}
          1{" "}
        </a>
        <a href="#" onClick={() => setPageNumber(1)}>
          {" "}
          2{" "}
        </a>
        <a href="#" onClick={() => setPageNumber(2)}>
          {" "}
          3
        </a>
        <a href="#" onClick={() => setPageNumber(3)}>
          4{" "}
        </a>
        <a href="#" onClick={() => setPageNumber(4)}>
          5
        </a>
        <a href="#" onClick={() => setPageNumber(lastPageNum)}>
          Last{" "}
        </a>
        <a href="#" onClick={nextPage}>
          {" "}
          &raquo;
        </a>
      </div>
    </div>
    { teacherprofiletoggle &&
    <TeacherProfile
    setTeacherprofiletoggle = {setTeacherprofiletoggle}
    setTeacherPaymentToggle = {setTeacherPaymentToggle}
    teacherDetail = {teacherDetail} 
    setTeacherDetail = {setTeacherDetail}
    />
    }
    {teacherPayemntToggle &&
    <TransferModal
      setTeacherprofiletoggle ={setTeacherprofiletoggle} 
      setTeacherPaymentToggle ={setTeacherPaymentToggle}
      teacherDetail ={teacherDetail} />}
    </StudentTeacherWrapper>
  );
};


export default Search;