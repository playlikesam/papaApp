import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { Picker } from "@react-native-picker/picker"; // Import Picker component

const Services: React.FC = () => {
  const navigation = useNavigation(); // Get navigation prop
  const [selectedService, setSelectedService] = useState("service1"); // State for selected service

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Back Button */}
        

        {/* Heading */}
        <Text style={styles.heading}>Choose Services</Text>

        {/* Form */}
        <View style={styles.form}>
          {/* Service Selection Dropdown */}
          <Text style={styles.label}>Select Service:</Text>
          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={selectedService}
              onValueChange={(itemValue) => setSelectedService(itemValue)}
              style={styles.dropdown}
            >
              <Picker.Item label="Service 1" value="service1" />
              <Picker.Item label="Service 2" value="service2" />
              <Picker.Item label="Service 3" value="service3" />
              <Picker.Item label="Service 4" value="service4" />
              <Picker.Item label="Service 5" value="service5" />
              <Picker.Item label="Service 6" value="service6" />
              <Picker.Item label="Service 7" value="service7" />
            </Picker>
          </View>

          <Text style={styles.label}>Vehicle Type:</Text>
          <TextInput style={styles.input} placeholder="Enter vehicle type" />

          <Text style={styles.label}>Location:</Text>
          <TextInput style={styles.input} placeholder="Enter your location" />

          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Describe the issue"
            multiline
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    padding: 20,
  },
  form: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#D3D3D3",
    elevation: 3,
    paddingBottom:120,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FF3131",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
    overflow: "hidden",
  },
  dropdown: {
    height: 50,
    width: "100%",
  },
});

export default Services;
