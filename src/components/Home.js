import React from 'react'
import './Home.css';
import pic from '../images/prof-pic.jpg'

function Home() {
    return (
        <div className="namebar" >
            <div>
                <h1 id='myName'>Joseph Panetta</h1>
            </div>

            <div className="slogan">
                <h2>The Cutting Edge Of Web Development!!</h2>
            </div>
            <img id="prof-me" src={pic} alt='me' />
        </div>
    )


}
export default Home;