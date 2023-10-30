import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Earn from './pages/Earn';
import Buy from './pages/Buy';
import Refferals from './pages/Refferals';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/earn' element={<Earn/>}></Route>
        <Route path='/buy' element={<Buy/>}></Route>
        <Route path='/refferals' element={<Refferals/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
