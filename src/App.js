
import './App.css';
import Invitation from './component/invitation';

function App() {
  return (
    <div className="App">      
      <Invitation 
      invite="Birthday party Invitation"
      email="jaGdish@gmail.com"
      name="jaGdish"
      title="birthday party"
      invitee="Ritu , Saurabh , Kartik"
      venue="Green field Avenue"/>      
    </div>
  );
}

export default App;
