import React, {useState} from 'react';
import './App.css';
import NavigationLogin from "./components/NavigationLogin";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PlantForm from "./components/PlantForm";
import PlantList from './components/PlantList';
import EditPlant from "./components/EditPlant";
import AccountUpdate from "./components/AccountUpdate";
import {Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";





function App() {
  const [number, setNumber] = useState(0)
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
 

  const [plants, setPlants] = useState([])
  const addPlant=(newPlant) => {
    setPlants([...plants, newPlant])
  }

  const addEdit=(newEdit) => {
    setPlants(plants.map(plant =>{
      if (newEdit.id ===plant.id) {
        return(newEdit) 
      }
        else {
          return(plant)
        }
      
    }))
  }
  
  return (
    <div className="App">
      <Route exact path ="/" component={NavigationLogin}/>
      <Route exact path ="/" component={LoginForm}/>
      <Route exact path = "/signup" component={SignUpForm}/>
      <PlantForm addPlant={addPlant} modalProp={modal} modalToggle={toggle} number={number} setNumber={setNumber}/>
      <Route exact path = "/plantlist" render={Navigation}/>
      <Route exact path ="/plantlist" render={()=> <PlantList plants={plants} plantToggle={toggle} setPlants={setPlants}/>}/>
      <Route exact path = "/editplant/:id" render={Navigation}/>
      <Route exact path="/editplant/:id" render={()=> <EditPlant addEdit={addEdit}/>}/>
      <Route exact path = "/accountupdate" render={Navigation}/>
      <Route exact path="/accountupdate" component={AccountUpdate}/>
    </div>
  );
}

export default App;
