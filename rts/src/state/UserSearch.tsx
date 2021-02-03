import { useState } from 'react';

const users = [
    { name: 'Adam', age: 20 },
    { name: 'Eve', age: 20 },
    { name: 'Abraham', age: 20 }
]

const UserSearch: React.FC = () => {

    const [name, setName] = useState(''); // Typescript inferred types

    const [user, setUser] = useState<{ name: string, age: number} | undefined>(); // Type of object or undefined

    const onClick = () => {
        const foundUser = users.find(user => user.name === name);

        setUser(foundUser);
    };

    return <div> 
        User Search
        <input value={name} onChange={e => setName(e.target.value)} /> 
        <button onClick={onClick}> Find User </button>
        <div> 
            {user && user.name}
            {user && user.age}
        </div>
    </div>;
};

export default UserSearch;