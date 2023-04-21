import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home  from './components/Home';
import Login  from './components/Login';
import Navbar  from './components/Navbar';
import './App.css';
import About from './components/About';
import Component  from './components/Component';

function App() {
  return (
    <div className='App'>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>     
        <Route path='/about' element={<About/>}/>  
        <Route path='/generate' element={<Component/>}/>  
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
