import { useState } from "react";
import { data } from "../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    console.log("form submitted");
    const fakeId = Date.now();
    // console.log(fakeId);
    const newUser = { id: fakeId, name };
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
    // clear input field
    setName("");
  };

  const removeUser = (id) => {
    const updatedUser = users.filter((user) => user.id !== id);
    setUsers(updatedUser);
  };

  return (
    <div>
      <h2>User Challenge</h2>
      <form onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => removeUser(user.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
