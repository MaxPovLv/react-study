import {useEffect, useState} from "react";
import {postService} from "../../services";
import {UserDetails} from "../../components";
import {useLocation, useParams} from "react-router-dom";

const SingleUserPage = () => {
    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {idUser} = useParams();
    useEffect(() => {
        if (!state) {
            postService.getById(idUser).then(({data}) => setUser(data))
        } else {
            setUser(state)
        }
    }, [idUser,state])
    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export {SingleUserPage};