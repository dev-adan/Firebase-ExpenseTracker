import "./App.css";
import { Routes, Route,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import PrivateRoute from "./pages/PrivateRoute";

function App() {

  const { authIsReady,user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Home/> : <Navigate to='/login'/>}    />
            <Route path="/login" element={user ? <Navigate to='/'/> : <Login/>} />
            <Route path="/signup" element={user ? <Navigate to='/' /> : <Signup/>} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
