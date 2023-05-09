import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <h1>User Management system</h1>
      <h3>Numbers of users: {users.length}</h3>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.id} : {user.name} : {user.email}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
