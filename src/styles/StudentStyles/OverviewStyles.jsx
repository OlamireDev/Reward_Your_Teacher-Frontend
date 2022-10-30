import styled from "styled-components";
export const OverviewWrapper = styled.div`
  padding: 5%;
`
export const TopBoxSection = styled.div`
background-image: url("img/Ellipse 43.png");
background-repeat: no-repeat;
background-position: right;
background-size: contain;
box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
padding: 3% 6%;
display: grid;
margin-bottom: 4%;
/* gap: 2rem; */

 div{
    display: flex;
    justify-content: space-between;
}
  div p{
    padding: 5px;
    background-color: #fff;
    border-radius: 20px;
    justify-content: center;
    flex-direction: row;
    color: #55A630;

}
  div h4{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #55A630;
}
  div h1{
    font-family: 'Inter';
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #03435F;
}
  button{
    width: 30%;
    border: none;
    background-color: #55A630;
    padding: 10px;
    color:#fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    @media screen and (max-width:768px){
        width: 100%;
    }
}
`;


export const BottomBoxSection = styled.div`
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
        padding-bottom: 3%;
        width: 100%;

`;

export const GreenTop = styled.div`
    background-image: url("img/Frame 8697.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 80px;

`;

export const TransactionDetails = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6% 6% 3% 6%;
     h4{
        font-family: 'Inter';
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #03435F;
        
    }
     h1{
        font-family: 'Inter';
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: #03435F;
    }
     p{
        background: rgba(128, 185, 24, 0.1);
        border-radius: 50px;
        text-align: center;
        padding:0px 3px;
        width: 50px;
    }

      div{
        display: grid;
        gap: 1rem;
    }
     span{
        background: rgba(128, 185, 24, 0.1);
        padding: 20px;
        display: flex;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        justify-content: center;

    }


`;
