import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Link to='/Home'></Link>
        <Link to='/About'></Link>

        <Routes>
        <Route path='/WordCounter' element={<Home />} />
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About'  element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
