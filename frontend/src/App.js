import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Mainroutes from './pages/Mainroutes';
import HomPage2 from './pages/HomPage2';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="App">
       {location.pathname === "/projects" ? "" : <Navbar/>}
       <Mainroutes/>
       {/* <HomPage2/> */}
    </div>
  );
}

export default App;
