import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Et from './components/pages/Et';
import Home from './components/pages/Home';
import Telephone from './components/pages/Telephone';


function App() {
  return (
    <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/et">ET</Link></li>
            <li><Link to="/telephone">Telephone</Link></li>
        </ul>
        <Routes>
            <Route exact path='/' element={<Home/>}> </Route>
            <Route path='/et' element={<Et/>}> </Route>
            <Route path='/telephone' element={<Telephone/>}> </Route>
        </Routes>
    </Router>

)}

export default App;
