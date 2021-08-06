import { useState,useEffect } from 'react';
import {BrowserRouter as Link} from 'react-router-dom'
import React from 'react'
import axios from "axios";
import './index.css';


export default function Meals(){
    const [meal, setmeal] = useState([]);
    useEffect(() => {
      axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => {
        console.log(res.data);
        setmeal(res.data.categories)
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    const dispmenu = meal.map(data =>{
        return(<tr>
                  <td><img src={data.strCategoryThumb} width='250' height='200'/></td>
                  <td>{data.strCategory}</td>
                  <td class="scroll">{data.strCategoryDescription}</td>
                  <td><Link><a className='btn btn-secondary'  href={data.strCategory}>Show More</a></Link></td>
              </tr>
              )
            })  


    return(
        <>
        <div>
        <div className={"row justify-content-center"} >
      <div className="col-md-10">
      <h1>Menu</h1>
      <table class="table table-bordered table-dark">
      <thead >
        <tr>
            <td>Image</td>
            <td>Category</td>
            <td>Description</td>
            <td>Dishes</td>
        </tr>
      </thead>
   
      <tbody>
          {dispmenu}
   </tbody>
        </table>

      </div>
      
    </div>
    </div>

 </>
        
)
}