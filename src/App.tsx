import GlobalStyle from "styles/globalStyle";
import{BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import Route from "routes";
import { AuthProvider } from "hooks/auth";

function App() {
  return(
    <BrowserRouter>
      <GlobalStyle/>
      <ToastContainer autoClose={3000}/>
      <AuthProvider>
        <Route/>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
