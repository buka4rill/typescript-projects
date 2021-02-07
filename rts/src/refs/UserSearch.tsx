import { useState, useRef, useEffect } from 'react';

const users = [
    { name: 'Adam', age: 20 },
    { name: 'Eve', age: 20 },
    { name: 'Abraham', age: 20 }
]

const UserSearch: React.FC = () => {

    const inputRef = useRef<HTMLInputElement | null>(null); // Might be of type null or HTMLInputElement

    const [name, setName] = useState(''); // Typescript inferred types

    const [user, setUser] = useState<{ name: string, age: number} | undefined>(); // Type of object or undefined

    useEffect(() => {
        if (!inputRef.current) return;

        inputRef.current.focus();
    }, []) // only invoked one time

    const onClick = () => {
        const foundUser = users.find(user => user.name === name);

        setUser(foundUser);
    };

    return <div> 
        User Search
        <input 
            value={name} 
            ref={inputRef} 
            onChange={e => setName(e.target.value)} 
        /> 
        <button onClick={onClick}> Find User </button>
        <div> 
            {user && user.name}
            {user && user.age}
        </div>
    </div>;
};

export default UserSearch;