import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import TextField from './components/Navbar/TextField/TextField';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      {/* <TextField/> */}
    </div>
  );
}

export default App;
