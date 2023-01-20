import logo from './logo.svg';
import './App.css';
import { useState, createContext } from "react";
import Home from './Home';

export const UserContext = createContext()


function App() {

  const [name,setname] = useState("Emiway")
  return (
    <div className="App">
      <UserContext.Provider value={name}>

      <Home value={name}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
