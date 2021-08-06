import React,{useEffect,useState} from 'react';
import axios from 'axios';

const FoodList=(props)=>{
        function addtocart(obj,price){
            obj.price= price
        let cart=JSON.parse(localStorage.getItem('cart'));
            if(cart==null)
            {
                localStorage.setItem('cart',JSON.stringify([]))
            }
            else{
            cart=[...cart,obj]
            console.log(cart)
            localStorage.setItem('cart',JSON.stringify(cart))
    
        }}
        const[foodData,setfoodData]=useState([]);
        //for retreving food list from category
     
            let link = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+props.data;
            useEffect(()=>{
                axios.get(link).then(res=>{
                    setfoodData(res.data.meals);
                })
                .catch(err=>{console.log(err)})
            },[]
            )

        var c;

    return(
        <div className="row">
            
            {
            foodData.map((food)=>(
                <div className="col-md-4">
                <div class="card carding" style={{width:"400px"}}>
                <div class="card-body">
                <div className="overflow-auto" style={{height:'50px'}}> 
                {food.strMeal}
                </div>
                
                <p style={{color:"red"}}>Rs {c = Math.floor((Math.random() * 100) + 100)}</p>
                <button class="btn btn-warning" 
                        onClick={()=>{addtocart(food,c)
                       }}
                >Order Now</button>
                </div>
                <img  class="card-img-bottom" src={food.strMealThumb}  style={{width:"100%"}} />
                </div>
                </div>
            ))
            }
            </div>
        
    )
}

export default FoodList;