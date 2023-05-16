import Header from './component/header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Projects from './component/Projects/Projects';
import Videos from './component/Videos/Videos';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="App">      
      <Header />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Videos' element={<Videos/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
