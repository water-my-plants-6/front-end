import React from 'react';
import './App.css';
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm"

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <SignUpForm/>
    </div>
  );
}

export default App;
