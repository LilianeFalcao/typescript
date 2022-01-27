import styled from "styled-components"
import { colors } from "styles/globalStyle"

export const Main = styled.main`
   min-height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background: url(ff.png);
   background-size: cover;
   form{
    width:320px ;
    height: 420px;
    background: ${colors.F};
    box-shadow: 0 15px 25px ${colors.core};
    color: ${colors.white};
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding: 70px;
    border-radius: 25px ;
   }
   h1{
        margin: 0;
        padding: 0.3rem;
        text-align: center;
        font-size: 21px;
        color: ${colors.white};
   }
   div{
        border: none;
        border-bottom: 1px solid ${colors.fs};
        background: transparent ;
        outline: none;
        height: 40px;
        color: ${colors.white};
        font-size: 16px;
       p{
        margin: 0;
        padding: 0;
        font-weight: bold;
        }
        input{
        width:  100%;
        margin-bottom: 25px;
        }
        input[type= "email"], input[type ="password"]{
        border: none;
        border-bottom: 1px solid #fff;
        background: transparent ;
        outline: none;
        height: 40px;
        color: whitesmoke;
        font-size: 16px;
        }
   }
`