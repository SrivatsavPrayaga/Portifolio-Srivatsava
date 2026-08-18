import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Remove background after first interaction
    const handleFirstClick = () => {
      setIsFirstLoad(false);
      document.removeEventListener('click', handleFirstClick);
    };
    
    document.addEventListener('click', handleFirstClick);
    return () => document.removeEventListener('click', handleFirstClick);
  }, []);

  return (
    <main className={isFirstLoad ? 'bg-slate-300/20' : ''}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
