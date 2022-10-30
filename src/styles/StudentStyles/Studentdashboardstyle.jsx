import styled from "styled-components";
import { Link } from 'react-router-dom';

export const DashboardContainer = styled.div`
   width: 100%;
   background-color: #fff;
   /* position: relative; */
   display: flex;
   flex-direction: row;
   /* top: 80px; */
min-height: 100vh;
   
`;

export const DashboardMainBody = styled.div`
        margin-left: 300px;
         margin-top: 5rem;
         width: 100%;
        /* display: grid;
        gap: 2rem;
        width: 100%;
        padding: 5% 10% 0% 7%; 
        @media screen and (max-width:768px){
            min-width: 100vw;
            margin-left: 0; */

         /* display: grid;
        gap: 2rem;
        min-width: calc(100vw - 300px);
        /* margin-left: 300px; 
        position: relative;
        padding: 5% 7%;
        @media screen and (max-width:768px){
        min-width: 100vw;
        margin-left: 0; 
          
        } */
        background-color: #fff;

         h2{
            font-family: 'Inter';
            font-weight: 600;
            font-size: 32px;
            line-height: 39px;
            color: #03435F;
        }
        
`;



