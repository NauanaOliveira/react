import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Nauana", "Rogério", "Harley"]);

    const [users, setUsers] =  useState([
        {id:1, name:"Nauana", age:23},
        {id:2, name:"Rogério", age:24},
        {id:3, name:"Harley", age:56},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() *4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div>
            <ul>
                {list.map((item,i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}> {user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random user</button>
        </div>
    )
};

export default ListRender;