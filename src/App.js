
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import BoxComponent from './Components/Box';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
      <BoxComponent>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} /> 
        </Routes>
      </BoxComponent>
    </Router>
  );
}

export default App;
