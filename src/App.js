import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleDeluxe from "./Pages/Rooms/SingleDeluxe";
import Error from "./Pages/Error";
import {Route, Switch} from "react-router-dom"
import NavBar from "./components/NavBar";
import './App.css'
import DoubleDeluxe from "./Pages/Rooms/DoubleDeluxe";
import FamilyDeluxe from "./Pages/Rooms/FamilyDeluxe";
import Presidential from "./Pages/Rooms/Presidential"


function App() {
  return (

      <>
          <NavBar></NavBar>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/rooms" component={Rooms}/>
           <Route exact path="/rooms/single-deluxe" component={SingleDeluxe}/>
           <Route exact path="/rooms/double-deluxe" component={DoubleDeluxe}/>
           <Route exact path="/rooms/family-deluxe" component={FamilyDeluxe}/>
           <Route exact path="/rooms/presidential" component={Presidential}/>
       <Route component={Error}/>
       </Switch>

      </>
  );
}

export default App;
