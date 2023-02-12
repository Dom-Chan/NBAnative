import free_agents from "../model/players.json" assert { type: "json" };
import lakers from "../model/lakers.json" assert { type: "json" };
import mavs from "../model/mavs.json" assert { type: "json" };
import celtics from "../model/celtics.json" assert { type: "json" };
import * as fs from "fs";

export const getFreeAgents = async (req, res) => {
  try {
    console.log(free_agents);
    res.status(200).json(free_agents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLakers = async (req, res) => {
  try {
    console.log("HELLO");
    res.status(200).json(lakers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMavs = async (req, res) => {
  try {
    console.log(free_agents);
    res.status(200).json(mavs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCeltics = async (req, res) => {
  try {
    console.log(free_agents);
    res.status(200).json(celtics);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const updateFreeAgents = async (req, res) => {
  console.log(`REQ RECEIVED`);
  try {
    const json = JSON.stringify(req.body);
    fs.writeFile(
      "C:/Users/domin/Documents/CS PROJECTS/Native/NBATeamBuilder/server/model/players.json",
      json,
      function (err) {
        if (err) throw err;
        console.log(`updated free agents`);
      }
    );
  } catch (error) {
    // );
    res.status(404).json({ message: error.message });
  }
};

export const addLaker = async (req, res) => {
  console.log(`REQ RECEIVED`);
  try {
    const json = JSON.stringify(req.body);
    fs.writeFile(
      "C:/Users/domin/Documents/CS PROJECTS/Native/NBATeamBuilder/server/model/lakers.json",
      json,
      function (err) {
        if (err) throw err;
        console.log(`added to Lakers`);
      }
    );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addMav = async (req, res) => {
  console.log(`REQ RECEIVED`);
  try {
    const json = JSON.stringify(req.body);
    fs.writeFile(
      "C:/Users/domin/Documents/CS PROJECTS/Native/NBATeamBuilder/server/model/mavs.json",
      json,
      function (err) {
        if (err) throw err;
        console.log(`added to Mavs`);
      }
    );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addCeltic = async (req, res) => {
  console.log(`REQ RECEIVED`);
  try {
    const json = JSON.stringify(req.body);
    fs.writeFile(
      "C:/Users/domin/Documents/CS PROJECTS/Native/NBATeamBuilder/server/model/celtics.json",
      json,
      function (err) {
        if (err) throw err;
        console.log(`added to Celtics`);
      }
    );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
