import styled from "styled-components"
import { colors } from "styles/globalStyle"

export const Header = styled.header`
    display: flex;
    flex-direction: row ${colors.blue};
    width:100% ;
    picture{
    width: 20%;
        img{
            height: 100px;
            border: 0;
            margin: 0 10%;
            align-items: center;
        }
    }
    h1{
    color: whitesmoke;
    display: flex;
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    }
`