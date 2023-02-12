import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import { useContext, useEffect, useState } from "react";
import NBAContext from "../context/NBAContext";
import { addLakerPlayer, updatePlayers, addMavPlayer, addCelticPlayer } from "../API/players";

const TeamScreen = ({ navigation, route }) => {
  const {
    freeAgents,
    lakers,
    mavs,
    celtics,
    setFreeAgents,
    setLakers,
    setMavs,
    setCeltics,
  } = useContext(NBAContext);

  const addPlayer = (player) => {
    if (route.params.teamName === "Lakers" && lakers.length < 5) {
      const newFreeAgents = freeAgents.filter(
        (free_agent) => free_agent.name !== player.name
      );
      
      setFreeAgents(newFreeAgents);
      setLakers((prevState) => [...prevState, player]);
      
      // updatePlayers(newFreeAgents)
      // addLakerPlayer([...lakers, player])
    }
    if (route.params.teamName === "Mavs") {
      const newFreeAgents = freeAgents.filter(
        (free_agent) => free_agent.name !== player.name
      );
      setFreeAgents(newFreeAgents);
      setMavs((prevState) => [...prevState, player]);
      // updatePlayers(newFreeAgents)
      // addMavPlayer([...mavs, player])
    }
    if (route.params.teamName === "Celtics") {
      const newFreeAgents = freeAgents.filter(
        (free_agent) => free_agent.name !== player.name
      );
      setFreeAgents(newFreeAgents);
      setCeltics((prevState) => [...prevState, player]);
      // updatePlayers(newFreeAgents)
      // addCelticPlayer([...celtics, player])
    }
  };

  const removePlayer = (player) => {
    if (route.params.teamName === "Lakers") {
      const newLakers = lakers.filter((laker) => laker.name !== player.name);
      setLakers(newLakers);
      setFreeAgents((prevState) => [...prevState, player]);
      // addLakerPlayer([...newLakers])
      // updatePlayers([...freeAgents, player])
    }
    if (route.params.teamName === "Mavs") {
      const newMavs = mavs.filter((mav) => mav.name !== player.name);
      setMavs(newMavs);
      setFreeAgents((prevState) => [...prevState, player]);
      // addMavPlayer([...newMavs])
      // updatePlayers([...freeAgents, player])
    }
    if (route.params.teamName === "Celtics") {
      const newCeltics = celtics.filter((celtic) => celtic.name !== player.name);
      setCeltics(newCeltics);
      setFreeAgents((prevState) => [...prevState, player]);
      // addCelticPlayer([...newCeltics])
      // updatePlayers([...freeAgents, player])
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* free agents area */}
      <SafeAreaView style={styles.freeAgentsContainer}>
        {freeAgents &&
          freeAgents.map((player) => (
            <Pressable key={player.id} onPress={() => addPlayer(player)}>
              <View style={styles.playerContainer}>
                <Image
                  style={styles.freeAgentLogo}
                  source={{ uri: player.pfp }}
                />
              </View>
            </Pressable>
          ))}
      </SafeAreaView>

      <View style={styles.teamLogoContainer}>
        <Image
          style={styles.teamLogo}
          source={
            route.params.teamName === "Lakers"
              ? require("../assets/LAKERS.png")
              : route.params.teamName === "Mavs"
              ? require("../assets/MAVS.png")
              : require("../assets/CELTICS.png")
          }
        />
      </View>

      {/* Team players area */}
      <View
        style={
          route.params.teamName === "Lakers"
            ? styles.teamContainer_Lakers
            : route.params.teamName === "Mavs"
            ? styles.teamContainer_Mavs
            : styles.teamContainer_Celtics
        }
      >
        {(route.params.teamName === "Lakers" && lakers)
          ? lakers.map((player) => (
              <Pressable key={player.id} onPress={() => removePlayer(player)}>
                <View style={styles.playerContainer}>
                  <Image
                    style={styles.playerLogo}
                    source={{ uri: player.pfp }}
                  />
                </View>
              </Pressable>
            ))
          : (route.params.teamName === "Mavs" && mavs)
          ? mavs.map((player) => (
              <Pressable key={player.id} onPress={() => removePlayer(player)}>
                <View style={styles.playerContainer}>
                  <Image
                    style={styles.playerLogo}
                    source={{ uri: player.pfp }}
                  />
                </View>
              </Pressable>
            ))
          : celtics.map((player) => (
              <Pressable key={player.id} onPress={() => removePlayer(player)}>
                <View style={styles.playerContainer}>
                  <Image
                    style={styles.playerLogo}
                    source={{ uri: player.pfp }}
                  />
                </View>
              </Pressable>
            ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  freeAgentsContainer: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "80%"
  },
  teamLogoContainer: {
    flex: 1,
  },
  teamContainer_Lakers: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDB927",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    width: "100%",
  },
  teamContainer_Mavs: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#002B5E",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    width: "100%",
  },
  teamContainer_Celtics: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007A33",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    width: "100%",
  },
  playerContainer: {
    margin: 5,
  },
  freeAgentLogo: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 100,
  },
  playerLogo: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "white"
  },
  teamLogo: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: 25,
  },
});

export default TeamScreen;
