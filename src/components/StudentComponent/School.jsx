import React, { useEffect, useState, useRef } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios"; 
import "../../../src/styles/School.css";
import { Link, useNavigate } from "react-router-dom";

const Schools = () => {
  const [schools, setSchools] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchKey, setSearchKey] = useState("");

  const navigate = useNavigate()
  const searchRef = useRef(" ");

  const navigateToSearch = () => {
    // 👇️ navigate to /contacts
    navigate("/student/schools/searchTeachers", { state: { searchKey: searchKey } });
    //navigate("/student/schools/searchTeachers" , {state:{ searchKeys:searchKey } });
  };
  const fetchSchools = async () => {
    // const token =
    // "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZWFjaGVyQGdtYWlsLmNvbSIsImV4cCI6MTY2NTI2MjUzMSwiaWF0IjoxNjY1MjQ0NTMxfQ.kjdA_bmF6iKoQWROPLOloxL2w9LFIb2hhfcFlDF13dipkmGaqlz1kM--NBpqFuoXY5YBv3TT3_GNDF0PvX9xjw teacher@gmail.com" 
       try {
      const rawToken = localStorage.getItem("token");
      const tokenSplit = rawToken.split(' ')
      const token = tokenSplit[1]
      console.log(token)
      const response = await axios
        .get(
          `http://localhost:8080/api/v1/school/retrieveSchools/?schoolPage=0&schoolSize=10`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              // Authorization:token
            },
          }
        )
        .then((response) => {
          console.log("myResponse",response );
          const allSchools = response.data.payload.content;
          console.log("huyyyuu", allSchools);
          setSchools(allSchools);
          setTotalPages(response.data.totalPages);

          console.log("there", schools);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const lastPageNum = totalPages - 1;
  console.log("write", lastPageNum);
  const nextPage = () => {
    setPageNumber((prevState) => {
      return prevState + 1;
    });
    console.log("here", pageNumber);
    console.log("nextpage");
  };
  const previousPage = () => {
    setPageNumber((prevState) => {
      return prevState - 1;
    });
    console.log("prevpage");
  };
  useEffect(() => {
    fetchSchools();
  }, [pageNumber, searchKey]);
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setSearchKey(searchRef.current.value);
    console.log("this", searchRef.current.value);
  };


  return (
    <>

    <div className="school">
      <h2>All Schools</h2>
      <div className="schoolList">
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
        <button onClick={navigateToSearch} className="dropbtn">
            Search
            <i>
              <BsFilterLeft />
            </i>
          </button>
        </div>
      </div>
      <div>
        <h3 className="tableHeading">List of Schools</h3>
        {schools.map((school, index) => {
    
          console.log("this is the school data", school);
          return (
            <div className="tableRow" key={school.id}>
              <a className="school_link">
                <span>{school.schoolName + ", " + school.schoolAddress}</span>
                <span>
                  <Link to="/student/schools/teachers/"
                  state={{
                    schoolName: school,
                  }}>
                  <i>
                    <IoIosArrowForward />
                  </i>
                  </Link>
                </span>
              </a>
            </div>
          );
        })}
      </div>
      </div>

      <div className="pagination">
        <a href="#" onClick={previousPage}>
          &laquo;
        </a>
        <a onClick={() => setPageNumber(0)}>
          {" "}
          1{" "}
        </a>
        <a onClick={() => setPageNumber(1)}>
          {" "}
          2{" "}
        </a>
        <a onClick={() => setPageNumber(2)}>
          3
        </a>
        <a onClick={() => setPageNumber(3)}>
          4
        </a>
        <a onClick={() => setPageNumber(4)}>
          5
        </a>
        <a onClick={() => setPageNumber(lastPageNum)}>
          Last
        </a>
        <a onClick={nextPage}>
          &raquo;
        </a>
      </div>
    </div>
    </>
  );
};
export default Schools;