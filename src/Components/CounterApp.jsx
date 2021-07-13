import React,{useState} from 'react';
export default function CounterApp(){
    const [Count,setCount]=useState(0);
    return (
        <>
        <h3 >Counter App</h3>
        <span>{Count}</span>
        <div>
            <button onClick={()=>setCount(Count+1)}>+</button>
            <button onClick={()=>setCount(Count-1)}>-</button>
            </div>
        </>
    )
}