import {createGlobalStyle} from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

export const colors = {
    blue: "#040e1f",
    white: "whitesmoke",
    bluerg: " rgba(64, 69, 81, 0.83)",
    shadow: " rgba(0, 0, 0, .2)",
    back: " rgba(0, 0, 0, .5)",
    omg: "rgba(46, 50, 63, 0.918)",
    F: " rgba(0, 0, 0, .7)",
    core: "rgba(10, 10, 10, 0.5)",
    fs:"#fff",
    ok:"#2d3e64",
    Silver: "#C0C0C0",
    pretao: "#000000",
    red: "#660000",
    green: "#2c4c40"
}
export default createGlobalStyle`
    *{
        box-sizing: border-box;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        background-color: ${colors.blue};
    }
    body{
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
    }
`