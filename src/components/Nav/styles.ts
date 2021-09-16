import styled from "styled-components"
import { colors } from "styles/globalStyle"

export const Nav = styled.nav`
    display: flex;
    flex-direction: column ${colors.blue};
    width: 100%;
    margin: 0 3%;
    div{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    }
    div h3{
    background-color:${colors.bluerg};
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-family: Sawarabi Gothic;
    font-size: 1rem;
    color: ${colors.white};
    width: 70%;
    }
    div ul{
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${colors.white};
    }
    div li{
    list-style: none;
    padding: 1rem;
    }
    a{
    text-decoration: none;
    color: ${colors.white};
    }
    h2{
    background-color: ${colors.bluerg};
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-family: Sawarabi Gothic;
    font-size: 1.3rem;
    color: ${colors.white};
    width: 70%;
    }
    ul{
    display: flex;
    flex-direction: row;
    width: 100%;
    color: ${colors.white};
    list-style: none;
    padding: 1rem;
    }
`
