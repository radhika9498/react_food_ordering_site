import React,{useEffect,useState} from 'react';
import axios from 'axios';
import FoodList from './foodList';
import { func } from 'prop-types';

const Categories=(props)=>{
   
    const[catData,setcatData]=useState([]);
    const[displayName,setdisplayName]=useState('');
    const[foodFlag,setfoodFlag]=useState(false);
    const[catFlag,setcatFlag]=useState(true);
    
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(res=>{
            console.log(res.data);
            setcatData(res.data.categories);

        
        })
        .catch(err=>{console.log(err)})
    },[]
    )

    const fetchData = catData.map(obj =>{
        return <tr>
            <td>{obj.idCategory}</td>
            <td><img src={obj.strCategoryThumb}></img></td>
            <td>{obj.strCategory}</td>
            
            <td>{obj.strCategoryDescription}</td>
            </tr>
 });


    return(

        <div className="row">
            {!catFlag && <button className="btn btn-dark goBack" onClick={()=>{setcatFlag(true); setfoodFlag(false)}}>Go Back</button>}
            {catFlag &&
            catData.map((food)=>(
                <div className="col-md-4">
                <div class="card carding" style={{width:"400px"}}>
                <div class="card-body">
                <h4 class="card-title">{food.strCategory} Food</h4>
                
                <div className="overflow-auto" style={{height:'100px'}}> 
                {food.strCategoryDescription}
                </div>
                
                <button class="btn btn-primary" 
                 onClick={()=>{setdisplayName(food.strCategory);
                                setfoodFlag(true);
                                setcatFlag(false)}}
                >Check It</button>
                </div>
                <img class="card-img-bottom" src={food.strCategoryThumb}  style={{width:"100%"}} />
                </div>
                </div>
            ))
            }
        {foodFlag && <FoodList data = {displayName}/>}
        </div>
        
    )
}

export default Categories;