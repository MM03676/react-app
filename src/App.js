import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import './App.css';

const Hats = ()=>{
  return (
    <div>
      <h1>Hats</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/hats" element={<Hats />}/>
      </Routes>
    </div>
  );
}

export default App;
