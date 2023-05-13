import TodoList from './component/organism/TodoList';
import styles from './App.module.css';

function App() {
  return (    
      <div className={styles.main}>
        <TodoList/>
      </div>    
  );
}

export default App;
