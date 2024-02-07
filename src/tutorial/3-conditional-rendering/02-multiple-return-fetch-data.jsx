import { useEffect, useState } from "react";

const url = "https://api.github.com/users/rggoria";

const ConditionalRenderingBasics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h1>Loading Github User...</h1>;
  }
  if (isError) {
    return <h1>There was an Error...</h1>;
  }

  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <h1>Multiple Returns Fetch Data</h1>
      <img
        style={{ width: "150px", height: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h1>Name: {name}</h1>
      <h1>Work At @{company}</h1>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default ConditionalRenderingBasics;
