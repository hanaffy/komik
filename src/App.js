import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import TheWorldAfterFall from './pages/The-World-After-Fall';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/The-World-After-Fall' element={<TheWorldAfterFall />} />
        </Routes>
      </Router>
  );
};

export default App;