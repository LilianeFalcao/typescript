import styled from "styled-components";
import { colors } from "./globalStyle";

const Button = styled.button`
    outline: none;
    border: none;
    height: 40px;
    background: ${colors.ok};
    border-radius: 20px ;
    color: ${colors.white};
    font-size: 18px;
`
export default Button;