import styled from "styled-components"
import { colors } from "styles/globalStyle"

export const Main = styled.main`
    form{
        margin: 1rem 0;
        padding: 0.4rem;
        color: ${colors.white};
        background-color: ${colors.white};
        a{
        outline: 0.2rem outset ${colors.ok};
        padding: 0.5rem;
        border-radius: 0.2rem ;
        color: ${colors.white};
        text-decoration: none;
        font-weight: bold;
        background-color: ${colors.ok};
        }
        div {
        margin: 1rem 0;
        display: grid;
        grid-template-columns: 5rem auto;
        background-color: ${colors.white};
        label{
            background-color: ${colors.white};
            color: ${colors.pretao};
        }
        textarea {
            padding: 0.4rem;
            border-radius: 0.5rem;
            height: 10rem;
            background-color: ${colors.white};
      }
    }
`