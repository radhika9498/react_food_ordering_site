// import React, { Component } from 'react';

// export default class FormDataComponent extends Component {


//     userData;

//     constructor(props) {
//         super(props);

//         this.onChangeName = this.onChangeName.bind(this);
//         this.onChangeText = this.onChangeText.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             name: '',
//             text: ''
//         }
//     }

//     // Form Events
//     onChangeName(e) {
//         this.setState({ name: e.target.value })
//     }

//     onChangeEmail(e) {
//         this.setState({ email: e.target.value })
//     }

//     onChangeText(e) {
//         this.setState({ text: e.target.value })
//     }

//     onSubmit(e) {
//         e.preventDefault()

//         this.setState({
//             name: this.state.name,
//             text: this.state.text
//         })
//     }

//     // React Life Cycle
//     componentDidMount() {
//         this.userData = JSON.parse(localStorage.getItem('user'));

//         if (localStorage.getItem('user')) {
//             this.setState({
//                 name: this.userData.name,
//                 email: this.userData.email,
//                 text: this.userData.text
//             })
//         } else {
//             this.setState({
//                 name: '',
//                 email: '',
//                 text: ''
//             })
//         }
//     }

//     componentWillUpdate(nextProps, nextState) {
//         localStorage.setItem('user', JSON.stringify(nextState));
//     }


    



//     render() {
//         return (
//             <div className="container">
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Name</label>
//                         <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
//                     </div>

//                     <div className="form-group">
//                         <label>Text</label>
//                         <textarea type="text" className="form-control" value={this.state.text} onChange={this.onChangeText} rows="3" />
//                     </div>
//                     <button type="submit" className="btn btn-secondary">Submit</button>
//                 </form>



                
//                 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
//             </div>
//         )
//     }
// }

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import swal from 'sweetalert';

export default function Feedback(){

    const [username,setusername]=useState('')
    const [feedback,setfeedback]=useState('')
    const [allfeedbacks,setallFeedBacks]=useState([])

    function submitFeedBack(event){
        event.preventDefault();

        var all = [...allfeedbacks]
        var currFeed = {name:username,feedback:feedback}
        all.push(currFeed)
        setallFeedBacks(all)
        swal('Thank You!','For your valuable Feedback! ','success')

    }

    // function reset(){
    //     setusername('')
    //     setfeedback('')
    // }

    const feed = allfeedbacks.map((fed,index)=>{
        return(
        <tr>
            <td>{index+1}</td>
            <td>{fed.name}</td>
            <td>{fed.feedback}</td>
        </tr>
    )})

    return(
        <div className="container">
            
            <div className="form-group">
            <div  >
            <h2 style={{color:'black'}}>Feedback Form</h2>    
            <input type="text" placeholder="Name" className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
            <br/>
            <textarea placeholder="FeedBack" className='form-control' row="3" value={feedback} onChange={(e)=>{setfeedback(e.target.value)}}/>
            <br/>
            <br/>
            <button className="btn btn-lg btn-secondary" onClick={submitFeedBack}>Submit</button>
            
            
            </div>
            



        
            <div><br/><br/>
                <h2 style={{color:'Black'}}>Feedbacks</h2>
                <table className="table  table-stripped table-bordered table-hover">
                    <thead className="thead">
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feed}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
    }
