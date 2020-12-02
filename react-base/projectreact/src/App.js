import React, {useState} from 'react';
import Tweet from "./Tweet";

function App() {
  const [users, setUsers] = useState([
    {name: 'Ed', message: 'Hello there'},
    {name: 'John', message: 'I am John'},
    {name: 'traversy', message: 'awesome'}
  ]);

  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;