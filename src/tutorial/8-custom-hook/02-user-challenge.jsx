import useFetch from "./useFetch";

const url = "https://api.github.com/users/rggoria";

const UseRefBasics = () => {
  const { isLoading, isError, data: user } = useFetch(url);

  if (isLoading) {
    return <h1>Loading Github User...</h1>;
  }
  if (isError) {
    return <h1>There was an Error...</h1>;
  }

  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <h2>User Challenge</h2>
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
export default UseRefBasics;
