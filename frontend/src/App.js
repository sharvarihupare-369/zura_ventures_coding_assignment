import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Mainroutes from './pages/Mainroutes';
import HomPage2 from './pages/HomPage2';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SampleProject from './pages/SampleProject';
import EditTranscript from './pages/EditTranscript';

function App() {
  const location = useLocation();
  const isEditTranscript = location.pathname.startsWith("/edit/transcript");

  return (
    <div className="App">
       {location.pathname === "/uploads" || location.pathname==="/widgets"  || location.pathname==="/accounts/settings" || isEditTranscript  ?  "" : <Navbar/>}
       <Mainroutes/>
    </div>
  );
}

export default App;
