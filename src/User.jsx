export default function User({man}){
  const {name, email, username} = man;
  return (
    <div className="box">
      <h3>Name:{name}</h3>
      <p>Email:{email}</p>
      <p>Username:{username}</p>
    </div>
  )
}