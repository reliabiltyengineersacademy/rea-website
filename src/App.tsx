import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Webinars from './pages/Webinars';
import TrainingModules from './pages/TrainingModules';
import TrainingModulesDemo from './pages/TrainingModulesDemo';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Login from './pages/Login';
import CMRPCertification from './pages/certifications/CMRPCertification';
import CMRTCertification from './pages/certifications/CMRTCertification';
import CAMACertification from './pages/certifications/CAMACertification';
import { MembershipProvider } from './context/MembershipContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <MembershipProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/training" element={<TrainingModules />} />
              <Route path="/training-demo" element={<TrainingModulesDemo />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:slug" element={<ArticleDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/programs/cmrp" element={<CMRPCertification />} />
              <Route path="/programs/cmrt" element={<CMRTCertification />} />
              <Route path="/programs/cama" element={<CAMACertification />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </MembershipProvider>
    </AuthProvider>
  );
}

export default App;