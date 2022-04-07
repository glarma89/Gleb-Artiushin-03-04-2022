import React from 'react';
import { Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import { Button } from 'react-bootstrap';



function App() {
  return (
    <>    
    <Link to="/"><Button>Home</Button></Link>
    <Link to="/favorites"><Button>Favorites</Button></Link>
    
    
    <Routes>      
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>      
    </Routes>
    
    </>
  );
}

export default App;
