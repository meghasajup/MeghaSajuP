import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/NavBar/Navbar";
import Skills from "./Components/Skill/Skill";
import Work from "./Components/Works/Work";

function App() {
  return (
    <div>
      <Navbar/>
      <Intro />
      <Skills/>
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;