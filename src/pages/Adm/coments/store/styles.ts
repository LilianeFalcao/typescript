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
        div{
            margin: 2rem 0 ;
            display: flex;
            grid-template-columns: 10rem auto;
            label{
                background-color: ${colors.white};
                color: ${colors.pretao};
            }
            textarea{
                padding: 0.4rem;
                height: 5rem;
                background-color: ${colors.white};
            }
        }
    }
`