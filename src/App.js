import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import OldHtmlPage from './components/OldHtmlPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/robbo.html' element={<OldHtmlPage iframeSrc='/robbo/robbo.html' />} />
          <Route path='/cryptex.html' element={<OldHtmlPage iframeSrc='/cryptex/cryptex.html' />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
