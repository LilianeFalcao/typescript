import GlobalStyle from "styles/globalStyle";
import{BrowserRouter} from "react-router-dom";
import Route from "routes";

function App() {
  return(
    <BrowserRouter>
      <GlobalStyle/>
      <Route/>
    </BrowserRouter>
  )
}

export default App;
