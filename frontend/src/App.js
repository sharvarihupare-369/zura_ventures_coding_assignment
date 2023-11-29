import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Mainroutes from './pages/Mainroutes';
import HomPage2 from './pages/HomPage2';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Mainroutes/>
       {/* <HomPage2/> */}
    </div>
  );
}

export default App;
