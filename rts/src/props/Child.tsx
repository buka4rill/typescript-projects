interface ChildProps {
    color: string;
    onClick: () => void; // A function whose return type is void
}

export const Child = ({ color, onClick }: ChildProps) => {
    return <div> 
        {color}
        <button onClick={onClick}> Click me</button> 
    </div>
}

// The problem with this is that Typescript doesn't understand 
// that we are defining a React Component.


// Second way of defining Function components in Typescript
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div> 
        {color} 
        <button onClick={onClick}> Click me</button> 
    </div>
    
};

// Properties now available etc ChildAsFC.propTypes, ChildAsFC.displayName