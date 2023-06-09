import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import Footer from "./components/Footer";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";

function App() {
  return <div>
    
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      <Footer/>
    </Router>
    
  </div>;
}

export default App;
