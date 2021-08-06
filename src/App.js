//import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import './App.css';
import React,{useState} from 'react'
import Meals from './meals';
import Seafood from "./seafood";
import Header from './header'
import {Footer} from "./footer.js"
import Home from "./home.js"
import Order from "./order"

import Beef from "./beef"
import Chicken from './chicken';
import Pork from './pork';
import Lamb from './lamb';
import Vegeterian from './vegeterian';
import Pasta from './pasta';
import Side from './side';
import Vegan from './vegan';
import Starter from './starter';
import Goat from './goat';
import Breakfast from './breakfast';
import Miscellaneous from './miscellaneous';
import Dessert from './dessert';
import FoodList from './FoodList';

import Feedback from './feedback';



function App() {

  //const [order,setorder]=useState([]);

  return (
    <div className="App">
      <Router>
     <Header/>
     <Switch>
       <Route path='/home' component={Home}/>
       <Route path='/meals' component={Meals}/>
       <Route path='/seafood' component={Seafood}/>
       <Route path='/beef' component={Beef}/>
       <Route path='/chicken' component={Chicken}/>
       <Route path='/lamb' component={Lamb}/>
       <Route path='/pasta' component={Pasta}/>
       <Route path='/pork' component={Pork}/>
       <Route path='/side' component={Side}/>
       <Route path='/starter' component={Starter}/>
       <Route path='/vegan' component={Vegan}/>
       <Route path='/vegeterian' component={Vegeterian}/>
       <Route path='/breakfast' component={Breakfast}/>
       <Route path='/miscellaneous' component={Miscellaneous}/>
       <Route path='/dessert' component={Dessert}/>
       <Route path='/goat' component={Goat}/>
       <Route path='/FoodList' component={FoodList}/>

       <Route path='/order' component={Order}/>

       <Route path='/feedback' component={Feedback}/>

     
      <Home/>
     <Meals/> 
    <Seafood/>
    </Switch>
    <Footer/> 
    </Router>    
    </div>
  );
}


export default App;