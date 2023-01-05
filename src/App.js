import "./App.css";
import Footer from "./component/Footer";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Content from "./component/Content";
import Error from "./component/error";
import Home from "./component/Home";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error/>} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
