import styles from './App.module.css';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <TextEditor/>
    </div>
  );
}

export default App;
