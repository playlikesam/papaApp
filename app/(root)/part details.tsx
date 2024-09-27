import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter

const demoPartDetails = {
  id: '1', // Example ID
  name: 'Engine Oil',
  description: 'High-quality engine oil for smooth performance.',
  imageUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png',
  variety: [
    { id: '1', name: 'Synthetic Oil', price: '₹600', offer: '10% Off', imageUri: 'https://example.com/synthetic-oil.png' },
    { id: '2', name: 'Mineral Oil', price: '₹500', offer: '5% Off', imageUri: 'https://example.com/mineral-oil.png' },
    { id: '3', name: 'Semi-Synthetic Oil', price: '₹550', offer: '15% Off', imageUri: 'https://example.com/semi-synthetic-oil.png' },
    // Add more varieties as needed...
  ],
};

const PartDetails: React.FC = () => {
  const router = useRouter(); // Initialize useRouter

  const handleBackPress = () => {
    router.back(); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Part Details */}
        <Image source={{ uri: demoPartDetails.imageUri }} style={styles.partImage} />
        <Text style={styles.partName}>{demoPartDetails.name}</Text>
        <Text style={styles.partDescription}>{demoPartDetails.description}</Text>

        {/* Varieties Section */}
        <Text style={styles.varietiesHeading}>Available Varieties</Text>
        {demoPartDetails.variety.map((item) => (
          <View key={item.id} style={styles.varietyCard}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.imageUri }} style={styles.varietyImage} />
              {item.offer && (
                <View style={styles.offerBadge}>
                  <Text style={styles.offerText}>{item.offer}</Text>
                </View>
              )}
            </View>
            <View style={styles.varietyInfo}>
              <Text style={styles.varietyName}>{item.name}</Text>
              <Text style={styles.varietyPrice}>{item.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  backButton: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  partImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  partName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  partDescription: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
  varietiesHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  varietyCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    marginRight: 15,
  },
  varietyImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  offerBadge: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#FF6347", // Tomato color for offers
    borderRadius: 5,
    padding: 5,
  },
  offerText: {
    color: "#fff",
    fontSize: 12,
  },
  varietyInfo: {
    flex: 1,
  },
  varietyName: {
    fontSize: 18,
    fontWeight: "600",
  },
  varietyPrice: {
    fontSize: 16,
    color: "#4CAF50", // Green color for price
  },
});

export default PartDetails;