import styles from './App.module.css';
import { provider } from 'react-redux';
import store from './component/store/store';
import todoList from './component/todoList/todoList';

function App() {
  return (
    <provider store={store}>
    <div className={styles.App}>
      <todoList/>
    </div>
    </provider>
  );
}

export default App;
