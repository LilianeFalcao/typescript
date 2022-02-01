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