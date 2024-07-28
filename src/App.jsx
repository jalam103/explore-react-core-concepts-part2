
import './App.css'
import Counter from './Counter';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () =>{
    alert('button clicked2')
  }

  const handleClick4 = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h2>React core concepts explore2</h2>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={() => {alert('button clicked3')}}>Click me3</button>
      <button onClick={() => handleClick4(4)}>Click me4</button>
    </>
  )
}

export default App
