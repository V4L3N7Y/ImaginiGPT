import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home  from './components/Home';
import Login  from './components/Login';
import Navbar  from './components/Navbar';
import './App.css';
import About from './components/About';
import Component  from './components/Component';
import { useState } from 'react';
import Menu from './components/Menu'




function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
   };

  return (

    <div>
    
  <BrowserRouter>
    <Navbar theme={theme} toggleTheme={toggleTheme}/>
    <main className={`${theme}`}>
     <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>     
        <Route path='/about' element={<About/>}/>  
        <Route path='/generate' element={<Component/>}/>  
      </Routes>
    </main> 
  </BrowserRouter>
    
    </div>
  );
}

export default App;
