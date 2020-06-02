import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PlantForm from "./components/PlantForm";
import PlantList from './components/PlantList';
import EditPlant from "./components/EditPlant";
import AccountUpdate from "./components/AccountUpdate";
import {Route} from "react-router-dom";
import axiosWithAuth from "./components/utils/axiosWithAuth"
import {togglePlantform} from "./store/actions";
import {connect} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";




function App(props) {
  const [number, setNumber] = useState(0)
  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);
 

  const [plants, setPlants] = useState([])
  const addPlant=(newPlant) => {
    // setPlants([...plants, newPlant])

    axiosWithAuth()
    .post("/plants", newPlant)
    .then(
      res => console.log(res)
    )
    .catch(
      err => console.log(err)
    )
    fetchPlant();
  }

  const fetchPlant = () => {
    axiosWithAuth()
    .get("/plants")
    .then(
      res => setPlants(res.data)
    )
    .catch(
      err => console.log(err)
    )
  } 
 
  useEffect(() => {
   fetchPlant();
  }, [])

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
      <Navigation/>
      <Router>
      <Route exact path ="/" component={LoginForm}/>
      <Route exact path = "/signup" component={SignUpForm} />
      <PlantForm addPlant={addPlant} modalProp={props.plantFormModalOpen} number={number} setNumber={setNumber}/>
      <Route exact path ="/plantlist" render={()=> <PlantList plants={plants} plantToggle={togglePlantform} fetchPlant={fetchPlant}/>}/>
      <Route exact path="/editplant/:id" render={()=> <EditPlant fetchPlant={fetchPlant}/>}/>
      <Route exact path="/accountupdate" component={AccountUpdate}/>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return({plantFormModalOpen: state.plantFormModalOpen})
}

export default connect(mapStateToProps, {togglePlantform}) (App);
