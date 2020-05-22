import React from 'react';
import './App.css';
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PlantForm from "./components/PlantForm";

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <SignUpForm/>
      <PlantForm/>
    </div>
  );
}

export default App;
