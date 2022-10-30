
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const DashboardContainer = styled.div`
    width: calc(100% - 300px); 
   // width: 100%;
    //z-index: -1;
    background-color: #fff;
    position: relative;
    display: flex;
    top: 80px;
   
 `;

export const DashboardMainBody = styled.div`

      display: grid;

       gap: 2rem;

       min-width: calc(100vw - 300px);

       width: 100%;

       margin-left: 300px;

       position: relative; 

       padding: 5% 7%; 

       @media screen and (max-width:768px){

        min-width: 100vw;

           margin-left: 0;
            

        }

         h2{

            font-family: 'Inter';
           font-weight: 600;

           font-size: 32px;

           line-height: 39px;

           color: #03435F;

        }
        
`;