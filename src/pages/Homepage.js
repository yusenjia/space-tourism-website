import React from "react"
import {Link} from "react-router-dom"

function Homepage(){
    return(
        <div className="homepage-container">
            <div>
                <h1 className="homepage-title"> So, you want to travel to <span>space</span></h1>
                <p className="homepage-content">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <Link to ="/destination"> <button className="mainpage-btn">Explore</button></Link>
        </div>
    )
}

export default Homepage