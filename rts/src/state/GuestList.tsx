import { useState } from 'react';

// Not receiving any props
const GuestList: React.FC = () => {
    // Track whatever the user types in input
    const [name, setName] = useState('');

    // Typescript infers the type never to guests
    // const [guests, setGuests] = useState([]); 

    // Adding types to state
    const [guests, setGuests] = useState<string[]>([]); // an array of strings

    const onClick = () => {
        
        // Then clear input
        setName('');

        // Take text in input and add to guest array
        setGuests([...guests, name]);
    };
    
    return <div> 
        <h3>Guest List</h3>

        <ul>
            {guests.map(guest => <li key={guest}>{guest}</li>)}
        </ul>

        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Add Guest</button>
    </div>
}

export default GuestList;