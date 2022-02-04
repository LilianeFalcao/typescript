import { ButtonProps } from "interface/style.interface";
import styled, { css } from "styled-components";
import { colors } from "./globalStyle";

const colorsVariation = {
    default: css`
    background-color: ${colors.ok} ;
    outline: 0.2rem outset ${colors.ok};
    `,
    edit: css`
    background-color: ${colors.green} ;
    outline: 0.2rem outset ${colors.green};
    `,
    remove:css`
    background-color: ${colors.red} ;
    outline: 0.2rem outset ${colors.red};
    `,
}

const Button = styled.button<ButtonProps>`
    outline: none;
    border: none;
    height: 40px;
    background: ${colors.ok};
    border-radius: 20px ;
    color: ${colors.white};
    font-size: 18px;
    cursor: pointer;
    svg{
        width: 2rem;
        height: 2rem;
    }

    ${(props) => colorsVariation[props.bgcolor || "default"]}
`
export default Button;