import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LeftSideBar = styled.div`
min-height: 100vh;
    padding-top: 10rem;
    @media screen and (min-width:768px){
    /* padding: 30px 2rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    position: fixed;
    /* height: calc(100% - 80px); */
    width: 300px; 
    }
      
      /* background-color: #fff; */
  
        ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
        ul li{
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 15px 15px;  
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #03435F;
        :hover{
            color: white;
            background-color: #55A630;
        }
      }
       button{
        display: flex;
        align-items: center;
        width: 100%;
        background: rgba(128, 185, 24, 0.1);
        color:#55A630;
        border:none;
        padding:10px;
        font-family: 'Product Sans';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
       }
`;

export const SideBarLink = styled(NavLink)`
      text-decoration: none;
      justify-content: left;
        align-items: center;
        display: flex;
        margin-right:10% ;
        padding: 0 5%;
        cursor: pointer;

        text-decoration: none;
        color: black;

        & i:hover{
          color: #fff !important;
        }
      li{
        
      }
       :hover{
         color: white;
         background-color: #55A630;
        text-decoration: none;

     }
      & .active{
         color: white;
         background-color: #55A630; 
    }
`;
