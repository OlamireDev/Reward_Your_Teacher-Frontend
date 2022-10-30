import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
gap: 30px;
background: #E5E5E5;

.img--logo {
    display: flex;
    gap: 10px;
    align-item: center;
    justify-content: center;
}

h2{
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #55A630;
}

`;

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 80px;
gap: 40px;
width: 745px;
height: 641px;
background: #FFFFFF;

.sign--up{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 16px;
border: 1px solid #D9D9D9;
width: 100%;
}
p {
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #21334F;
}

h3 {
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #21334F;
}

a{
    color: #55A630;
    font-weight: 600; 
}
`;

export const Form = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

.form--input{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    
    width: 500px;
    height: 48px;
    
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    
}
.form--header{
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
/* identical to box height */


color: #21334F;
    }

.form--title{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 50px;
    color: #21334F;
    
 }
 #forget--password{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 50px;
    color: #21334F;
 }

 .form--btn{
width: 500px;
height: 48px;
font-weight: 400;
font-size: 12px;
line-height: 15px;
background: #55A630;
text-align: center;
color: #fff;
border: none;
cursor:pointer;
gap: 10px;
 }

`;

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;

.option{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .hr{
        width: 213px;
        height: 1px;
        background-color: #D9D9D9;
    }

}


`


