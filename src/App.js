import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
