import logo from './logo.svg';
import './App.css';
import { Invitation } from './Component/Invitation';

function App() {
  const subject = "Birthaday party Invitation"
  const to = "jaGdish@gmail.com"
  const name1 = "jaGdish"
  const birthdayParty = "birthday party"
  const namesAll = " Ritu , Saurabh , Kartik ."
  const GreenField = "Green field Avenue"
  const name2 = "JaGdish"

  return (
    <div>
      <Invitation  subject={subject} to={to} name1={name1} birthdayParty={birthdayParty} namesAll={namesAll} GreenField={GreenField} name2={name2}/>
    </div>
  );
}

export default App;
