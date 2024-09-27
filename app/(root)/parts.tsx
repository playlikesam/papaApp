import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router"; // Import useRouter
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import the icon package

const demoProducts = [
  { id: '1', name: 'Engine Oil', iconUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png', price: '₹500', offer: '20% Off', category: 'engine_parts' },
  { id: '2', name: 'Battery', iconUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png', price: '₹1500', offer: 'Buy 1 Get 1', category: 'electrical' },
  { id: '3', name: 'Brake Pads', iconUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png', price: '₹700', offer: '15% Off', category: 'brakes' },
  { id: '4', name: 'Tire', iconUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png', price: '₹3000', offer: '10% Off', category: 'tires' },
  { id: '5', name: 'Wiper Blades', iconUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png', price: '₹300', offer: '5% Off', category: 'wipers' },
  { id: '6', name: 'Wiper Blades', iconUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png', price: '₹300', offer: '5% Off', category: 'wipers' },
  // Add more demo products as needed...
];

const trendingProducts = [
  { id: '1', name: 'Ciat Tires', iconUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png', price: '₹3000', offer: '5% Off' },
  { id: '2', name: 'Servo Brake Oil', iconUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png', price: '₹600', offer: '10% Off' },
  { id: '3', name: 'Spark Plugs', iconUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png', price: '₹200', offer: '30% Off' },
  { id: '4', name: 'Air Filter', iconUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png', price: '₹400', offer: '15% Off' },
  { id: '5', name: 'Oil Filter', iconUri: 'https://cdn-icons-png.flaticon.com/128/7199/7199770.png', price: '₹150', offer: '20% Off' },
  // Add more trending products as needed...
];

const Parts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter(); // Initialize useRouter

  // Filtering products based on selected category
  const filteredProducts = selectedCategory === "all"
    ? demoProducts
    : demoProducts.filter(product => product.category === selectedCategory);

  const handleProductPress = (product: any) => {
    // Navigate to Part Details when a product card is clicked
    router.push(`/part details?id=${product.id}`);
  };

  const handleTrendingProductPress = () => {
    // Navigate to Cart when a trending product is clicked
    router.push(`/cart`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Heading */}
        <Text style={styles.heading}>Products and Spares</Text>

        {/* Category Dropdown */}
        <Text style={styles.label}>Filter by Category:</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.dropdown}
          >
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Engine Parts" value="engine_parts" />
            <Picker.Item label="Electrical" value="electrical" />
            <Picker.Item label="Brakes" value="brakes" />
            <Picker.Item label="Tires" value="tires" />
            <Picker.Item label="Wipers" value="wipers" />
          </Picker>
        </View>

        {/* Product Listing in a 3x3 Grid */}
        <View style={styles.productGrid}>
          {filteredProducts.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => handleProductPress(product)} // Navigate to part details
            >
              <Image source={{ uri: product.iconUri }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{product.name}</Text>
                {product.offer && <Text style={styles.productOffer}>{product.offer}</Text>}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* Trending Products Section */}
        <Text style={styles.trendingHeading}>Trending Products</Text>
        <View style={styles.trendingProductList}>
          {trendingProducts.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.trendingProductCard}
              onPress={handleTrendingProductPress} // Navigate to cart
            >
              <View style={styles.imageContainer}>
                <Image source={{ uri: product.iconUri }} style={styles.trendingProductImage} />
                {product.offer && (
                  <View style={styles.offerBadge}>
                    <Text style={styles.offerBadgeText}>{product.offer}</Text>
                  </View>
                )}
              </View>
              <View style={styles.trendingProductDetails}>
                <Text style={styles.trendingProductName}>{product.name}</Text>
                <Text style={styles.trendingProductPrice}>{product.price}</Text>
              </View>
              {/* Wishlist Icon */}
              <TouchableOpacity style={styles.wishlistIcon}>
                <Ionicons name="heart-outline" size={24} color="#FF6347" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  dropdown: {
    height: 50,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "30%", // 3 cards in a row
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 2,
  },
  productImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  productDetails: {
    alignItems: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  productOffer: {
    fontSize: 14,
    color: "#FF6347", // Tomato color for offers
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
  trendingHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  trendingProductList: {
    flexDirection: "column",
  },
  trendingProductCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
  },
  imageContainer: {
    position: 'relative', // Make position relative for absolute badge
    alignItems: "center",
  },
  trendingProductImage: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  trendingProductDetails: {
    flex: 1,
    marginLeft: 20,
  },
  trendingProductName: {
    fontSize: 16,
    fontWeight: "600",
  },
  trendingProductPrice: {
    fontSize: 14,
    color: "#888",
  },
  wishlistIcon: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  offerBadge: {
    position: "absolute",
    right: -10,
    top: -10,
    backgroundColor: "#FF6347",
    borderRadius: 10,
    padding: 3,
  },
  offerBadgeText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default Parts;