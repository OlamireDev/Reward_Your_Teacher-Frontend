import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ImageWrapper = styled.div`
    width: 50px;
     height: 50px;
     border-radius: 50%;
       img{
         height: 100%;
         width: 100%;
         border-radius: 50%;
     }
    @media screen and (max-width:768px){
         width: 40px;
         height: 40px;
     }
`;

export const Topbar = styled.div` 
     padding:1% 3%;
     display: flex;
     justify-content: space-between;
     height: 80px;
     box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
     z-index: 1000;
     position: fixed;
     width: 100%;
     background-color: #fff;
`;


export const TopbarLeftSide = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
     h1{
        font-family: 'Inter';
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: #55A630;
        @media screen and (max-width:768px){
            display: none;
        }
    }
      span{
        display: none;
        @media screen and (max-width:768px){
            display: block;
        }
    }
`;

export const TopbarRighttSide = styled.div`
/* border:2px solid red; */
    display: flex;
    align-items: center;
    gap: 0.5rem;
      h3{
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #012A4A;
    }
`;