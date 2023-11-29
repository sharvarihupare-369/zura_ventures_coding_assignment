import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Mainroutes from './pages/Mainroutes';
import HomPage2 from './pages/HomPage2';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SampleProject from './pages/SampleProject';

function App() {
  const location = useLocation();

  return (
    <div className="App">
       {location.pathname === "/projects" || location.pathname==="/widget"  || location.pathname==="/accounts/settings"  ? "" : <Navbar/>}
       <Mainroutes/>
     
    </div>
  );
}

export default App;
