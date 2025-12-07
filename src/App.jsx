import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Ministries from './pages/Ministries';
import Events from './pages/Events';
import Progress from './pages/Progress';
import About from './pages/About';
import FirstTimers from './pages/FirstTimers';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import StructuredData from './components/StructuredData';

const PageTransition = ({ children }) => (
  <motion.div
    className="min-h-full"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/ministries" element={<PageTransition><Ministries /></PageTransition>} />
        <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
        <Route path="/progress" element={<PageTransition><Progress /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/first-timers" element={<PageTransition><FirstTimers /></PageTransition>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <StructuredData />
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main id="main-content" className="flex-grow overflow-hidden">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App
