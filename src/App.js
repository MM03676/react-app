import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import Signing from './pages/signingpage/Signing';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/sign" element={<Signing />}/>
      </Routes>
    </div>
  );
}

export default App;
