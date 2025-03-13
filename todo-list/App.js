import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { CheckBox } from "@rneui/themed";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
