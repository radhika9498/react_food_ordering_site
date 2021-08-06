import React from "react"
import {Link,useHistory} from "react-router-dom"
export default function AddPhoto(props){
    let history = useHistory();
    return(
        <div className="form">
            <h1>Add Photo</h1>
            <form onSubmit={(e)=>{props.addPhoto(e);history.push('/')}}>
                    <input name="link" type="text" placeholder="Paste Image Link"/>
                    <input name="caption" type="text" placeholder="Add Caption"/>
                    <button>Submit</button>
            </form>
        </div>
    )
}