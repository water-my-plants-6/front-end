import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PlantForm from "./components/PlantForm";
import PlantList from './components/PlantList';
import EditPlant from "./components/EditPlant";
import AccountUpdate from "./components/AccountUpdate";
import {Route} from "react-router-dom";

function App() {
  const [plants, setPlants] = useState([])
  const addPlant=(newPlant) => {
    setPlants([...plants, newPlant])
  }
  const [editPlants, setEditPlants] = useState([])
  const addEdit=(newEdit) => {
    setEditPlants([...editPlants, newEdit])
  }
  const [plantList, setPlantList] = useState([])
  const addList=(newList)=> {
    setPlantList([...plantList, newList])
  }
  return (
    <div className="App">
      <Navigation/>
      <Route exact path ="/" component={LoginForm}/>
      <Route exact path = "/signup" component={SignUpForm} />
      {/* <Route exact path ="/addplant" render={()=> <PlantForm addPlant={addPlant}/>}/> */}
      <Route exact path ="/plantlist" render={()=> <PlantList plants={plants}/>}/>
      <Route exact path="/editplant" render={()=> <EditPlant addEdit={addEdit}/>}/>
      <Route exact path="/accountupdate" component={AccountUpdate}/>
    </div>
  );
}

export default App;
