// import React,{useState} from 'react'
// import { useEffect } from 'react';
// import {BrowserRouter as Link} from 'react-router-dom'
// import axios from "axios";
// import order from "./App";



// export default function Order(props) {
//   //category
//   console.log('order=',order)
//   var scategory;
//   var sdish;
//   let link;
 
//   const [meal, setmeal] = useState([]);
//   const [menu, setmenu] = useState([]);
//   const[slink, setslink] = useState([]);
//     useEffect(() => {
//       axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
//     .then((res) => {
//         console.log(res.data);
//         setmeal(res.data.categories)
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, []);


// //meal
    
    

//     const dispmenu = meal.map(data =>{
//       return(<option value={data.strCategory}> 
//         {data.strCategory}
//       </option>
//             )
//           }) 

//           const handleChange=(e)=>{

//             link = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+e.target.value;

//             console.log(link);
//             scategory=e.target.value;

//             // setslink(link);

//             axios.get(link)
//     .then((res) => {
//         console.log('menu=',res.data);
//         setmenu(res.data.meals)
//         })
//         .catch((err) => {
//           console.log(err);
//         });

//     //     useEffect(() => {
//     //       const dishmenu= menu.map(data =>{
//     //         return(<option value={data.strCategory}> 
//     //           {data.strCategory}
//     //         </option>
//     //               )
//     //             })
          
//     //     }, [link]);
//        }

//        const menuHandleChange=(e)=>{
//          sdish=e.target.value;
//        }

//     return (
//         <>

//         <div className='container'>
//             <form>
//   <div className="form-group">
//     <label for="exampleFormControlInput1">Name</label>
//     <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>
//   </div>
//   <div className="form-group">
//     <label for="exampleFormControlSelect1">Select Category</label>
//     <select multiple onChange={handleChange} className="form-control" id="exampleFormControlSelect1">
//       {dispmenu}
      
//     </select>
//   </div>
//   <div className="form-group">
//     <label for="exampleFormControlSelect2">Select Dishes</label>
//     <select multiple className="form-control" id="exampleFormControlSelect2" onChange={menuHandleChange}>
//       { menu && 
//      menu.map(data =>{
//               return(<option value={data.strMeal}> 
//                 {data.strMeal}
//               </option>
//       )})}
//     </select>
//   </div>
//   <div className="form-group">
//     <label for="exampleFormControlTextarea1">Example textarea</label>
//     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//   </div>
//   <a className='btn btn-secondary'>Order</a>
  

//   <br/><br/><br/><br/><br/><br/><br/>
// </form>

//         </div>
        
//     </>)

// }
// <style>
//   .container
//   (width: 320px;
//     padding: 100px;
//     border: 5px solid gray;
//     margin: 0;)
// </style>

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
//import './Order.css';

export default function Order(){

    const [username,setusername]=useState('')
    const [contact,setcontact]=useState('')
    const [order,setorder]=useState('')
    const [price,setprice]=useState('')
    const [allOrders,setallOrders]=useState([])
    
    function handleSelectCategory(event) {
        setCategorySelected(event.target.value)
        console.log("thiss1" + event.target.value)
          

        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+event.target.value)
        .then(res=>{
            console.log(res.data.meals)
            
            if(res.data.meals==null){
                swal("Try Again!")
            }
            else{
                setMeals(res.data.meals)
            }
        })
        .catch(err=>{console.log(err)})
    }

    function handleSelectMeal(event) {
        setorder(event.target.value);
    }


    function createOrder(event){
        event.preventDefault();

        console.log(JSON.parse(localStorage.getItem('mealsPrices')));
        
        var tempPrice=500;

        if((JSON.parse(localStorage.getItem('mealsPrices')))!=null){
            (JSON.parse(localStorage.getItem('mealsPrices'))).map((item)=>{
            console.log(item.name);
            if(item.name==order){
                console.log("Price Found")
                tempPrice = (item.price)
            }
            else{
                console.log("Price Not Found")
            }
        })
        }

        var ordd={name:username,contact:contact,orders:[order],price:tempPrice}
        swal({
            title: "Confirm Order?",
            text: "Order : "+order+"\nAmount : "+tempPrice,
            buttons: true,
            dangerMode: false,
          })
          .then((willDelete) => {
            if (willDelete) {
              setallOrders([...allOrders,ordd])
              swal("Order Confirmed!", {
                icon: "success",
              });
            } else {
              swal("Order Cancelled");
            }
          });
        
        
       
        }
    

        function cancel(){
            swal('Cancelled:(','Your order has been cancelled ','failure')}


    const allOrdersss = allOrders.map((or,index)=>{
        return(
        <tr>
            <td>{index+1}</td>
            <td>{or.name}</td>
            <td>{or.contact}</td>
            <td>{or.orders}</td>
            <td>{or.price}</td>
        </tr>
    )})


    const[category,setCategory]=useState([])
    const[categorySelected,setCategorySelected]=useState('')
    const[meals,setMeals]=useState([])
    
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>{
            setCategory(res.data.categories)
        })
        .catch(err=>{console.log(err)})
    },[]
    )

    const categories = category.map((cat,index)=>{
        if(index==0){
            return(
                <option value={cat.strCategory} selected>{cat.strCategory}</option>
            ) 
        }
        else{
            return(
                <option value={cat.strCategory}>{cat.strCategory}</option>
             )
        }
    })

    const mealss = meals.map((meal,index)=>{
        if(index==0){
            <option value={meal.strMeal} selected>{meal.strMeal}</option>
        }
        else{
            return(
                <option value={meal.strMeal}>{meal.strMeal}</option>
            )
        }
    })

    console.log("1"+JSON.parse(localStorage.getItem('mealsPrices')))

    return(
        
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 style={{margin:"20px",fontWeight:"bold"}}>Order Now!</h1> 
                    <div className="order-form">   
                        <input type="text" placeholder="Name" className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                        <br/>
                        <input type="tel" placeholder="Contact" className='form-control' value={contact} onChange={(e)=>{setcontact(e.target.value)}}/>
                        <br/>
                        <select className="form-select" value={categorySelected} onChange={handleSelectCategory}>
                            <option value="none" selected disabled>
                                Select Category
                            </option>
                            {categories}
                        </select>
                        <br/>
                        <br/>
                        <select className="form-select" value={order} onChange={handleSelectMeal}>
                           <option value="none" selected disabled hidden>
                                Select Meal
                            </option>
                            {mealss}
                        </select>
                    <br/>
                    <br/>
                        <button className="btn btn-lg btn-secondary" onClick={createOrder}>Order</button> 
                        <button className="btn btn-lg btn-neutral" onClick={cancel}>Cancel</button>
                    </div>
                </div>
            
                <div className="col-md-10">
                    <h1 style={{margin:"40px"}}>All Orders</h1>
                    <table className="table  table-stripped table-bordered table-hover">
                        <thead className="thead">
                            <tr>
                                <th>Sr.no.</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Orders</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrdersss}
                        </tbody>
                    </table>
                </div>
            </div>
       
    )
}