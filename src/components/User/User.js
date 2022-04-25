import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            {id} - {name} <Button to={`${id}`} state={user} >get Details</Button>
        </div>
    );
};

export {User};