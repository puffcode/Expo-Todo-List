import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  TextInput,
  Button,
} from "react-native";
import { CheckBox } from "@rneui/themed";

export default function App() {
  const [tasks, setTasks] = useState([
    { key: "1", description: "Task 1", completed: false },
    { key: "2", description: "Task 2", completed: false },
    { key: "3", description: "Task 3", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          key: (tasks.length + 1).toString(),
          description: newTask,
          completed: false,
        },
      ]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (key) => {
    setTasks(
      tasks.map((task) =>
        task.key === key ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <CheckBox
        checked={item.completed}
        onPress={() => toggleTaskCompletion(item.key)}
      />
      <Text style={[styles.taskText, item.completed && styles.taskCompleted]}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Task"
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={addTask}
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  taskText: {
    fontSize: 18,
  },
  taskCompleted: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});
