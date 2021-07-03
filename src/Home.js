import React from 'react'
import './Home.css';


function Home() {
    return (
        <div className="namebar" >
            <div>
                <h1 id='myName'>Joseph Panetta</h1>
            </div>

            <div className="slogan">
                <h2>The Cutting Edge Of Web Development!!</h2>
            </div>
            <img id="prof-me" src='https://scontent-ort2-2.xx.fbcdn.net/v/t1.18169-9/535026_10151558887181737_507928077_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=cUqvNV28AVAAX__6IFd&_nc_ht=scontent-ort2-2.xx&oh=fe3da458d102369b7f01b79af33e9f0a&oe=60E52E1B' alt='../public/images/prof-pic.jpg' />
        </div>
    )


}
export default Home;