import { useEffect, useState } from "react"
import User from "./User";
import './User.css'
export default function Users(){
  const [friends, setFriends] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data));
  }, [])
  return (
    <div>
      <h4>Friend: {friends.length}</h4>
      {
        friends.map(friend => <User man={friend}></User>)
      }
    </div>
  )
}
/**
 * 1. declare a state to hold data
 * 2. use useEffect with dependency array 
 * 3. use fetch to hold data
 * 4. set loaded data to state
 */