import React, { useEffect, useState, useRef } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import "../../styles/Teachers.css";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";

const Teacher = () => {

    const teachersData = [
    
    ]
    
    
  const [teachers, setTeachers] = useState(teachersData);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(10);
  const [searchKey, setSearchKey] = useState("");
  const searchRef = useRef("");
   const schooName = useLocation().state.schoolName;

   console.log("this is the school id",schooName.id);
   const id = schooName.id;

  
  const fetchTeachers = async () => {
    const token =
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1eWlnZW9yZ2VAbWFpbC5jb20iLCJleHAiOjE2NjUxMDYwMzEsImlhdCI6MTY2NTA4ODAzMX0.JQ1Kf27BBIW406PB9yKwaH8ivkI5iqwOaYeBktdNLYJQLT24LmIaUu9NUlQ5CdAAUXowpoUvaJvQLSx1RmVOPA"    
        try {
      // const token = localStorage.getItem("token");
      const response = await axios
        .get(
          `http://localhost:8080/api/v1/school/${id}/${pageNumber}&${totalPages}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((response) => {
          console.log("teacher page", response);
          const allSchoolTeachers = response.data.payload.content;
          setTeachers(allSchoolTeachers);
          setTotalPages(response.data.totalPages);
          console.log("teacher page", allSchoolTeachers);
          console.log("there", teachers);
        });
    } catch (error) {
      console.log(error);
    }
  };
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
  }, [pageNumber, searchKey]);
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setSearchKey(searchRef.current.value);
    console.log("this", searchRef.current.value);
  };
  return (
    <>
    <Navbar/>
    
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
          <button onClick="myFunction()" className="dropbtn">
            Filter{" "}
            <i>
              <BsFilterLeft />
            </i>
          </button>
        </div>
      </div>
      <div>
        <table className="teacherTable">
          <thead className="tableHeading">
            <tr>
              <th className="tableData">Name</th>
              <th className="tableData">School</th>
              <th className="tableData">Position</th>
              <th className="tableData">Period of Teaching</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => {
              return (
                <tr className="tableRow" key={teacher.email}>
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
    </>
  );
};
export default Teacher; 