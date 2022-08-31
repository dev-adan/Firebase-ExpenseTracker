import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import  Signup  from './pages/Signup';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
