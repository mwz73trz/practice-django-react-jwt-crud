const getTeams = async () => {
  let res = await fetch("http://localhost:8000/favorites/teams/");
  let data = await res.json();
  console.log(data);
  return data;
};

export { getTeams };
