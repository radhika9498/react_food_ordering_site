import { useState,useEffect } from 'react';
import React from 'react'
import axios from "axios";
import Header from './header'
//import order,{setorder} from './App'


// function addtocart(e){
//     console.log("asda",e.target.value)
// }

export default function Beef(){
    const [seafood, setseafood] = useState([]);
    const [order,setorder]=useState([]);
    var price=10;
    useEffect(() => {
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=beef")
    .then((res) => {
        console.log(res.data);
        setseafood(res.data.meals)
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return(
        
        <div className="row">
            {seafood.map((obj)=>{
                price=price+10;
                obj.price=price;

                return (
                    <div className="col-sm-3">
                    <div className="card mt-4">
                        <img className="card-img-top" src={obj.strMealThumb} />
                        <div className="card-body">
                        <p>{obj.idMeal}</p>    
                        <p>{obj.strMeal}</p> 
                        </div>
                    </div>
                    </div>
                )
                
            })}
        </div>
        
    )
    console.log('asdadasd=',order)}