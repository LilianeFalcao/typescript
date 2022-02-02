import styled from "styled-components"
import { colors } from "styles/globalStyle"

export const Main = styled.main`
    div{
        display: block;
        width: 3rem;
        margin: 0.5rem 0;
    }
    table{
        margin-bottom: 3rem;
        width: 100%;
        border-collapse: collapse;
        tr, td, th{
            border: 1px solid ${colors.pretao};
            padding: 0.5rem;
            color: ${colors.pretao};
            background-color: ${colors.Silver};
        }
    }
`