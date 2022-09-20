import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Contact from "./Pages/Contact"
import "./style.css";
import GitCalender from "./Components/GitCalender/GitCalender";
function App() {

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <GitCalender/>
      <Contact />
      
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
