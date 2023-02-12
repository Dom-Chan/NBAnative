import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useContext, useEffect } from "react";
import NBAContext from "../context/NBAContext";

const HomeScreen = ({ navigation }) => {
  const { setFreeAgents, setLakers, setMavs, setCeltics } =
    useContext(NBAContext);

  useEffect(() => {
    fetch("http://192.168.1.11:5000/freeAgents")
      .then((res) => res.json())
      .then((players) => setFreeAgents(players))
      .catch((err) => console.log(err));

    fetch("http://192.168.1.11:5000/lakers")
      .then((res) => res.json())
      .then((players) => setLakers(players))
      .catch((err) => console.log(err));

    fetch("http://192.168.1.11:5000/mavs")
      .then((res) => res.json())
      .then((players) => setMavs(players))
      .catch((err) => console.log(err));

    fetch("http://192.168.1.11:5000/celtics")
      .then((res) => res.json())
      .then((players) => setCeltics(players))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate("Team", { teamName: "Lakers" })}
        >
          <Image
            style={styles.tinyLogo}
            source={require("../assets/LAKERS.png")}
          />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate("Team", { teamName: "Mavs" })}
        >
          <Image
            style={styles.tinyLogo}
            source={require("../assets/MAVS.png")}
          />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate("Team", { teamName: "Celtics" })}
        >
          <Image
            style={styles.tinyLogo}
            source={require("../assets/CELTICS.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d428a",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1d428a",
    marginVertical: 10,
  },
  title: {
    color: "white",
  },
  tinyLogo: {
    width: 160,
    height: 160,
    borderRadius: 100,
  },
});

export default HomeScreen;
