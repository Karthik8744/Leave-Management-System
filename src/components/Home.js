import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div>
                <h1 className="text-center">Welcome User</h1>
                <br></br>
                <h2>Number of leaves left:</h2>
                <br></br>


            </div>
            <div>
                
                <Link to="/addLeave" className="btn btn-dark  btn-blocky">Apply for a leave</Link>
                <br></br>
                <br></br>
                
                <Link to="/getAll" className="btn btn-dark  btn-blocky">Check for your leaves</Link>
                
            </div>
            </div>
        )
    }

}

export default Home;