import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function App() {
  const [date, setDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const getDateOfBirth = () => {
    let newDate = new Date(date).toLocaleDateString();
    return date !== "" ? newDate : "";
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Date Picker with Text Input</Text>
      <TextInput
        style={styles.textInput}
        value={getDateOfBirth()}
        placeholder="Select Date of Birth"
      />
      <TouchableOpacity
        onPress={showDatePicker}
        style={styles.buttonContainer}
        activeOpacity={0.8}
      >
        <Text>Select Date of Birth</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
  buttonContainer: {
    backgroundColor: "#00bfff",
    paddingVertical: 15,
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
    padding: 10,
    width: 300,
  },
});
