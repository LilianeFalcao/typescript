import GlobalStyle from "styles/globalStyle";
import{BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import Route from "routes";

function App() {
  return(
    <BrowserRouter>
      <GlobalStyle/>
      <ToastContainer autoClose={3000}/>
      <Route/>
    </BrowserRouter>
  )
}

export default App;
