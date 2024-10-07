import React from "react";
import { Image, ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const partsData = [
  {
    id: 1,
    title: "Brake Pads",
    description: "High-quality brake pads for all car models.",
    priceRange: "$20 - $50",
    image: { uri: "https://example.com/images/brakePads.jpg" },
    vendor: "AutoZone",
  },
  {
    id: 2,
    title: "Oil Filter",
    description: "Durable oil filters to keep your engine clean.",
    priceRange: "$10 - $30",
    image: { uri: "https://example.com/images/oilFilter.jpg" },
    vendor: "NAPA Auto Parts",
  },
  // Add more parts as needed
];

const productTypes = [
  { id: 1, name: "Brakes", icon: { uri: "https://example.com/icons/brakes.png" } },
  { id: 2, name: "Filters", icon: { uri: "https://example.com/icons/filters.png" } },
  { id: 3, name: "Batteries", icon: { uri: "https://example.com/icons/batteries.png" } },
  { id: 4, name: "Lights", icon: { uri: "https://example.com/icons/lights.png" } },
  { id: 5, name: "Tires", icon: { uri: "https://example.com/icons/tires.png" } },
  { id: 6, name: "Wipers", icon: { uri: "https://example.com/icons/wipers.png" } },
  { id: 7, name: "Engine Parts", icon: { uri: "https://example.com/icons/engineParts.png" } },
  { id: 8, name: "Suspension", icon: { uri: "https://example.com/icons/suspension.png" } },
  { id: 9, name: "Exhaust", icon: { uri: "https://example.com/icons/exhaust.png" } },
];

const PartItem = ({ part }) => (
  <View style={styles.partContainer}>
    <Image source={part.image} style={styles.partImage} />
    <View style={styles.partDetails}>
      <Text style={styles.partTitle}>{part.title}</Text>
      <Text style={styles.partDescription}>{part.description}</Text>
      <Text style={styles.partPrice}>{part.priceRange}</Text>
      <Text style={styles.partVendor}>Available at: {part.vendor}</Text>
    </View>
  </View>
);

const ProductTypeItem = ({ type }) => (
  <View style={styles.productTypeContainer}>
    <Image source={type.icon} style={styles.productTypeIcon} />
    <Text style={styles.productTypeText}>{type.name}</Text>
  </View>
);

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Store</Text>
      <FlatList
        data={productTypes}
        renderItem={({ item }) => <ProductTypeItem type={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.gridContainer}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {partsData.map((part) => (
          <PartItem key={part.id} part={part} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  gridContainer: {
    marginBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  productTypeContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
  },
  productTypeIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  productTypeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollView: {
    flexGrow: 1,
  },
  partContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  partImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  partDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  partTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  partDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  partPrice: {
    fontSize: 16,
    color: "#333",
  },
  partVendor: {
    fontSize: 14,
    color: "#888",
  },
});

export default Chat;