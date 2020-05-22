import React, {useState} from 'react';
import './App.css';
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PlantForm from "./components/PlantForm";
import PlantList from './components/PlantList';

function App() {
  const [plants, setPlants] = useState([])
  const addPlant=(newPlant) => {
    setPlants([...plants, newPlant])
  }
  return (
    <div className="App">
      <LoginForm/>
      <SignUpForm />
      <PlantForm addPlant={addPlant}/>
      <PlantList plants={plants}/>
    </div>
  );
}

export default App;
