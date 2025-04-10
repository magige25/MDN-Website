import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Policy from "./components/Policy";
import TermsOfService from "./components/TermsOfService";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Navbar />
        <main className="pt-16 pb-20">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Service />
                  <Projects />
                  <Contact />
                  <Footer /> {/* Footer now includes the non-sticky part */}
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Service />
                  <Footer />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <Projects />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="/policy"
              element={
                <>
                  <Policy />
                  <Footer />
                </>
              }
            />
            <Route
              path="/terms-of-service"
              element={
                <>
                  <TermsOfService />
                  <Footer />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;