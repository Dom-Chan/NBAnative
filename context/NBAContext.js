import { createContext, useState } from "react";

const NBAContext = createContext();

export const NBAProvider = ({ children }) => {
  const [freeAgents, setFreeAgents] = useState(['lebron','luka','tatum']);
  const [lakers, setLakers] = useState([]);
  const [mavs, setMavs] = useState([]);
  const [celtics, setCeltics] = useState([]);

  // const addToFreeAgents = (player) => {
  //   setFreeAgents((prevState) => [...prevState, player]);
  // };

  // const removeFromFreeAgents = (player) => {
  //   const free_agents = freeAgents.filter(
  //     (agent) => agent.name !== player.name
  //   );
  //   setFreeAgents(free_agents);
  // };

  // const addToLakers = (player) => {
  //   setLakers((prevState) => [...prevState, player]);
  // };

  // const removeFromLakers = (player) => {
  //   const new_lakers = lakers.filter((agent) => agent.name !== player.name);
  //   setLakers(new_lakers);
  // };

  // const addToMavs = (player) => {
  //   setMavs((prevState) => [...prevState, player]);
  // };

  // const removeFromMavs = (player) => {
  //   const new_mavs = mavs.filter((agent) => agent.name !== player.name);
  //   setMavs(new_mavs);
  // };

  // const addToCeltics = (player) => {
  //   setCeltics((prevState) => [...prevState, player]);
  // };

  // const removeFromCeltics = (player) => {
  //   const new_celtics = celtics.filter((agent) => agent.name !== player.name);
  //   setCeltics(new_lakers);
  // };

  return (
    <NBAContext.Provider
      value={{
        freeAgents,
        lakers,
        mavs,
        celtics,
        setFreeAgents,
        setLakers,
        setMavs,
        setCeltics
      }}
    >
      {children}
    </NBAContext.Provider>
  );
};

export default NBAContext
