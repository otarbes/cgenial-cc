import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Calculator from './pages/CalculatorNotion';
import CalculatorTool from './pages/CalculatorTool';
import Extractor from './pages/ExtractorNotion';
import Optimizer from './pages/OptimizerNotion';
import FAQ from './pages/FAQ';

const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-900 antialiased selection:bg-brand-200 selection:text-brand-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/calculator/tool" element={<CalculatorTool />} />
            <Route path="/extractor" element={<Extractor />} />
            <Route path="/optimizer" element={<Optimizer />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;