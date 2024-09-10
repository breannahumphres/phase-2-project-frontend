import './App.css';
import {Outlet} from "react-router-dom";
import NavBar from './NavBar';

function App() {


  return (
    
    <div>
<NavBar/>
<Outlet/>
<footer>2024 Bre Humphres</footer>
    </div>

      
    
  );
}

export default App;
