import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Policy from "./components/Policy";
import TermsOfService from "./components/TermsOfService";
import Resume from "./components/Resume";
import WebDesign from "./components/WebDesign"
import FrontendDevelopment from "./components/FrontendDevelopment";  
import BackendDevelopment from "./components/BackendDevelopment";  
import FullStackDevelopment from "./components/FullStackDevelopment";  
import DataAnalysis from "./components/DataAnalysis"; 
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
        <Navbar />
        <main className="pt-4 pb-0">
          <Routes>
            <Route path="/" element={<><Home /><About /><Service /><Projects /><Contact /><Footer /></>}/>
            <Route path="/about" element={<><About /><Footer /></>} />
            <Route path="/services" element={<><Service /><Footer /></>} />
            <Route path="/projects" element={<><Projects /><Footer /></>} />
            <Route path="/contact" element={<><Contact /><Footer /></>} />
            <Route path="/policy" element={<><Policy /><Footer /></>} />
            <Route path="/terms-of-service" element={<><TermsOfService /><Footer /></>} />
            <Route path="/resume" element={<><Resume /><Footer /></>} />
            <Route path="/services/web-design" element={<><WebDesign /><Footer /></>} />
            <Route path="/services/frontend" element={<><FrontendDevelopment /><Footer /></>} />
            <Route path="/services/backend" element={<><BackendDevelopment /><Footer /></>} />
            <Route path="/services/full-stack" element={<><FullStackDevelopment /><Footer /></>} />
            <Route path="/services/data-analysis" element={<><DataAnalysis /><Footer /></>} />
            <Route path="*" element={<><NotFound /></>} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;