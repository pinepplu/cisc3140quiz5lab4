import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Get from './pages/Get';
import GetAll from './pages/GetAll';
import Delete from './pages/Delete';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/get' element={<Get />}/>
          <Route path='/getall' element={<GetAll />}/>
          <Route path='/delete' element={<Delete />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
