import styled from "styled-components";



export const StudentTeacherWrapper = styled.div`
background-color: #FFFFFF !important;
& .teacher{
    min-height: 70vh; 
    background: #FFFFFF; 
    padding: 4rem 4rem; 
}
& .teacher .filterSearch{ 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
& .teacher  .filterSearch input{
    height: 3rem;
    margin: 2rem 0;
    width: 56.875rem;
    padding: 10px;
    font-size: 1.15rem;
}
& .teacher .filterSearch .filter{
    height: 3rem;
    margin: 2rem 0;
    width: 5.875rem;
    text-align: center;
    line-height: 3rem;
    font-size: 1.2rem;
}
/* Dropdown Button */
& .teacher .filterSearch .filter .dropbtn {
    font-size: 1.15rem;
    width: 5.875rem;
    border: none;
    cursor: pointer;
    height: 3rem;
    /* background-color: none; */
    padding: 1px;
    /* border: 1px solid black; */
    border-radius: 2px;
    background-color: white;
  }
& .teacher .tableHeading{
    background: rgba(0, 0, 0, 0.04);
    height: 2.5rem;
    padding: 0 1rem;
    gap: 11.875rem;
    width: 63.75rem;
}
& .table{
    min-height: 50vh;
}
& .teacher .teacherTable .tableRow {
    height: 3.0625rem;
    border-bottom: 1px solid #C4C4C4;
    /* border: 1px solid saddlebrown; */
}
 & .tableData{
    width: 15.9375rem;
    text-align: left;
}
/* Pagination links */
& .teacher .pagination {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
}
& .pagination a {
    color: black;
   
    text-decoration: none;
    transition: background-color .3s;
  }
  /* Style the active/current link */
 & .pagination a.active {
    background-color: dodgerblue;
    color: white;
  }
  /* Add a grey background color on mouse-over */
  & .pagination a:hover:not(.active) {
    background-color: #ddd;
}
`