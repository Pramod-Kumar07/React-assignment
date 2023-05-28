import styles from './App.module.css';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar/Navbar';
import Student from './component/Student/Student';
import Admin from './component/Admin/Admin';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/Admin' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
