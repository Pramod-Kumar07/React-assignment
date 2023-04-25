import CTP from './Component/Lift_State_up';
import CssProps from './Component/CssProp';
import './App.css';

function App() {
  const obj={
    name: "Pramod",
    color: "red"
  }
  function handleClick(data){
    alert(data.color);
      }
  return (
    <div className="App">
      <CTP click={handleClick}/>
      <CssProps name={obj.name} mycolor={obj.color}/>
    </div>
  );
}

export default App;


// Lifting State Up is a way to pass data from child to parent using call back function