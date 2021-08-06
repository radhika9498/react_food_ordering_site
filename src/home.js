// import React from 'react'
// import { BrowserRouter as Link } from 'react-router-dom'

// export default function Home(props){
//     return (
//         <div className={(props.active=="Home"?"":"mealsdisable")}>
//         <div className="row justify-content-center">
//         <div className="logo">
//             <h1>Welcome To The FoodiE!</h1>
//           <img src=" https://d2w1ef2ao9g8r9.cloudfront.net/images/_sameSizeHero/floorplan.png?mtime=20200424135830&focal=none&tmtime=20210630085907"width="800" height="500" />
//         </div>
//       </div>
//       <Link><a className="btn btn-primary" href='./seafood'>Check Seafood</a></Link>
//       </div>

//     )
// }

import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

export default function Home(){
    return (
        <div>
        <div className="row justify-content-center">
        <div className="logo">
            <h1>Welcome To FoodiE</h1>
            <img src=" https://d2w1ef2ao9g8r9.cloudfront.net/images/_sameSizeHero/floorplan.png?mtime=20200424135830&focal=none&tmtime=20210630085907"width="800" height="500" />
        </div>
        <br/>
        <br/>
  <div className='container'>
  <div className="card">
  <div className="card-body">
    <h5 className="card-title" style={{color:'white'}}>Hello User!</h5>
    <h4 className="card-text">Checkout our seafood!</h4>
    <Link><a className="btn btn-lg btn-secondary" href='/seafood'>Check Seafood</a></Link>
  </div>
  </div>
  </div>  
      </div>
      </div>

    )
}