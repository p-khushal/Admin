import './App.css';
import Dashboard from './Components/index/Dashboard';
import { Routes, Route } from "react-router-dom"
import Admin from './Components/Login/Admin';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/Admin" element={  <Admin /> } />
        <Route path="/Admin/Dashboard" element={<Dashboard/> } />
      </Routes>
    </div>
  );
}

export default App;
