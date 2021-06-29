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
            <img src='https://scontent-ort2-2.xx.fbcdn.net/v/t1.18169-9/535026_10151558887181737_507928077_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=Eoeg8SohjEgAX-pJILu&_nc_ht=scontent-ort2-2.xx&oh=31e8e52c0db61c4349e57fcc005f5806&oe=60DF3F5B' alt='selfie' />
        </div>
    )


}
export default Home;