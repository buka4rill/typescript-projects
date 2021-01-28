import { useState } from 'react';

// Not receiving any props
const GuestList: React.FC = () => {
    // Track whatever the user types in input
    const [name, setName] = useState('');
    
    return <div> 
        <h3>Guest List</h3>

        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>Add Guest</button>
    </div>
}

export default GuestList;