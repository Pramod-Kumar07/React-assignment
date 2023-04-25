import CTP from './Component/Lift_State_up';
import './App.css';

function App() {
  function handleClick(data){
    alert(data.color);
      }
  return (
    <div className="App">
      <CTP click={handleClick}/>
    </div>
  );
}

export default App;


// Lifting State Up is a way to pass data from child to parent using call back function