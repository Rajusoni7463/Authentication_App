import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sign_in from "./pages/Sign_in";
import Sign_up from "./pages/Sign_up";
import Portfolio from "./pages/Portfolio";
import Header from "./components/header";


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign_in" element={<Sign_in />}></Route>
        <Route path="/sign_up" element={<Sign_up />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
};

export default App;
