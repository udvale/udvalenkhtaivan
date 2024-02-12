import styles from "./App.module.css";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Experience } from "./components/Experience/Experience";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
