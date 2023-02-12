export const addLakerPlayer = (new_lakers) => {
  fetch(`http://192.168.1.11:5000/addToLakers`, {
    method: "POST",
    body: JSON.stringify(new_lakers),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => console.log(error));
  console.log("REQUEST ADD LAKER")
};

export const addMavPlayer = (new_mavs) => {
  fetch(`http://192.168.1.11:5000/addToMavs`, {
    method: "POST",
    body: JSON.stringify(new_mavs),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => console.log(error));
  console.log("REQUEST ADD MAV")
};

export const addCelticPlayer = (new_celtics) => {
  fetch(`http://192.168.1.11:5000/addToCeltics`, {
    method: "POST",
    body: JSON.stringify(new_celtics),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => console.log(error));

  console.log("REQUEST ADD CELT")
};

export const updatePlayers = (updated_agents) => {
  fetch(`http://192.168.1.11:5000/updateFreeAgents`, {
    method: "POST",
    body: JSON.stringify(updated_agents),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => console.log(error));
};
