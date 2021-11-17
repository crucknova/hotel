import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import {Route, Switch} from "react-router-dom"
import NavBar from "./components/NavBar";
import './App.css'
import DoubleDeluxe from "./Pages/DoubleDeluxe";


function App() {
  return (

      <>
          <NavBar></NavBar>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/rooms" component={Rooms}/>
       <Route exact path="/rooms/double-deluxe" component={DoubleDeluxe}/>
       <Route component={Error}/>
       </Switch>

      </>
  );
}

export default App;
