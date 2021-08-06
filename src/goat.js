import { useState,useEffect } from 'react';
import React from 'react'
import axios from "axios";
import Header from './header'

export default function Goat(){
    const [seafood, setseafood] = useState([]);

    useEffect(() => {
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=goat")
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