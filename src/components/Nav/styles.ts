import styled from "styled-components"
import { colors } from "styles/globalStyle"

export const Nav = styled.nav`
    display: flex;
    flex-direction: column ${colors.blue};
    width: 100%;
    div{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items:flex-end;
    }
    div ul{
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${colors.white};
    }
    div li{
    margin-top: 15px;
    list-style: none;
    display: inline-block;
    padding: 1rem;
    }
    a{
    text-decoration: none;
    color: ${colors.white};
    }
    ul{
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 1.2rem;
    width: 100%;
    color: ${colors.white};
    }

    & div.anime{
    height: 100vh;
    }
`
export const loginReg = styled.div`
    margin: 0;
    padding: 0;
    background: url(ff.png);
    background-size: cover;
    h1{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 21px;
    p{
    margin: 0;
    padding: 0;
    font-weight: bold;
    input{
    width:  100%;
    margin-bottom: 25px;
    }
    input{
    border: none;
    border-bottom: 1px solid  color: ${colors.F};
    background: transparent ;
    outline: none;
    height: 40px;
    color: ${colors.white}
    font-size: 16px;
    input[type="submit"]{
    outline: none;
    border: none;
    height: 40px;
    background: #2d3e64;
    border-radius: 20px ;
    color: ${colors.white}
    font-size: 18px;
    }
    input[type="submit"]:hover{
    cursor: pointer;
    background: ${colors.core};
    color: ${colors.white}
    }
    a{
    text-decoration: none;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.white}
    }
`