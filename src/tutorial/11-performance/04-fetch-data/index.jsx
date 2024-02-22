import { useCallback, useEffect, useState } from "react";

const url = "https://api.github.com/users";

const LowerState = () => {
  const [users, setUsers] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      console.log(users);
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section>
      <h1>Fetch Data</h1>
      <h3>Github Users</h3>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <div key={id}>
            <a href={html_url} target="blank" className="users">
              <div className="users-img">
                <img src={avatar_url} alt="" />
              </div>
              <div className="users-info">
                <h2>Name: {login}</h2>
                <h4>ID no: {id}</h4>
              </div>
            </a>
          </div>
        );
      })}
    </section>
  );
};
export default LowerState;
