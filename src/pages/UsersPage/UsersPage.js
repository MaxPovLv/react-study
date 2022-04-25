import {useEffect, useState} from "react";
import {userService} from "../../services";
import {Outlet} from "react-router-dom";
import {User} from "../../components/User/User";

const UsersPage = () => {
    const[users, setUsers]= useState([]);

    useEffect(()=>{
        userService.getAll().then(({data})=> setUsers(data))
    },[])
    return (
        <div>
            <div style={{display:'flex'}}>
                <div>{users.map(user => <User key={user.id} user={user}/>)}</div>
                <div><Outlet/></div>
            </div>
        </div>
    );
};

export {UsersPage};