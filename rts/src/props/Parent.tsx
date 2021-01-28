import { ChildAsFC } from './Child';

// ChildAsFC allows for the children props, but Child doesn't

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
        lnionnl
    </ChildAsFC> 
};

export default Parent;