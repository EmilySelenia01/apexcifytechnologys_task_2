import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import SkillsCards from "./pages/SkillsCards";
import EducationExperience from "./pages/EducationExperience";
import ProjectsSection from "./pages/ProjectSection";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main>
        <Hero />
        <About />
        <SkillsCards />
        <EducationExperience />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
