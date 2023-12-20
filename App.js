import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signin from "./components/signin/signin";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Signin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;