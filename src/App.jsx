import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ContactUs from './pages/ContactUs';
import Privacy_Policy from './pages/Privacy_Policy';
import Terms_Services from './pages/Terms_Services';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/terms" element={<Terms_Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;