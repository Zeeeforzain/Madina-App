
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Home from './Home';
import Login from './Login';
import Admin from './Admin';
import News from './News';
import NewsForm from './Components/NewsForm';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Home />} /> 
          <Route path="/admin" element={<Admin/>} /> 
          <Route path="/news" element={<News/>} /> 
          <Route path="/newsform" element={<NewsForm/>} /> 
        </Routes>
    </Router>
    
  );
}

export default App;
