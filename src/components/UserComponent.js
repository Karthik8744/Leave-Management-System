import React from 'react';
import UserService from '../services/UserService'


class UserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        UserService.allAccess().then((response)=>{
            this.setState({users: response.data})
        });
    }
    render(){
        return(
            <div>
                <h1 className="text-center">Leaves List</h1>
                <br></br>
                <br></br>
                <table class="table table-striped">
                    
                        <tr >
                            
                            <td>Employee</td>
                            <td>Description</td>
                            <td>Date</td>
                        </tr>
                    
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                   
                                    <td>{user.username}</td>
                                    <td>{user.des}</td>
                                    <td>{user.dt}</td>
                                </tr>
                            )
                        }
                    </tbody>


                </table>



            </div>
        )
    }
}

export default UserComponent