import styles from './App.module.css';
import Products from './component/Movies';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        {/* <Route path='/Favourites' element={}/> */}
      </Routes>
    </div>
  );
}

export default App;
