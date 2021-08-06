import { useState,useEffect } from 'react';
import React from 'react'
import axios from "axios";
import Header from './header'

export default function Seafood(){
    const [seafood, setseafood] = useState([]);
    var cost=10;
    useEffect(() => {
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
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
                // cost=cost+10;
                // obj.cost=cost;
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
        }
