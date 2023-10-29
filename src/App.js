import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import OldHtmlPage from './components/OldHtmlPage';
import Memorek from './components/Memorek/Memorek';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/memorek/*' element={<Memorek />} />
        <Route path='/robbo.html' element={<OldHtmlPage iframeSrc='/robbo/robbo.html' title='robbo' />} />
        <Route path='/cryptex.html' element={<OldHtmlPage iframeSrc='/cryptex/cryptex.html' title='cryptex' />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
