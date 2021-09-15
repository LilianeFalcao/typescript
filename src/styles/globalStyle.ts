import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
    }
    body{
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
    }
`
export const colors = {
    blue: "#040e1f",
    white: "whitesmoke",
    bluerg: " rgba(64, 69, 81, 0.83)",
    shadow: " rgba(0, 0, 0, .2)",
    back: " rgba(0, 0, 0, .5)",
    omg: "rgba(46, 50, 63, 0.918)"
}