import { useState } from "react"

export default function Counter(){
  const [count, setCount] = useState(0)

  const handleAdd = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleRemove = () =>{
    // const newCount = count -1;
    // setCount(newCount);
    setCount(count -1);
  }

  return (
    <div style={{border: '2px solid yellow', padding: '10px', margin: '10px', borderRadius: '15px'}}>
      <h2>Counter: {count} </h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}