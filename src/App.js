import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Skills' element={<Skills/>} />
        <Route path='/Contact' element={<Contacts/>} />
        <Route path='/Project' element={<Projects/>} />
        <Route path='/Resume' element={<Resume/>} />
      </Routes>
    </div>
  );
}

export default App;
