import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

const Payment: React.FC = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleConfirmPress = () => {
    if (!selectedOption) {
      Alert.alert("Oops!", "Please pick a payment method 😊");
    } else {
      Alert.alert("Thank You!", `Payment with ${selectedOption} confirmed! 🎉`);
    }
  };

  // Example items in the cart (Engine Oil and Battery)
  const items = [
    {
      name: "Shell Advance",
      price: "₹500",
      quantity: 1,
      image: "data:image/jpeg;base64,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", // Engine Oil image
    },
    {
      name: "Power Line Battery",
      price: "₹4000",
      quantity: 1,
      image: "data:image/jpeg;base64,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", // Battery image
    },
  ];

  const paymentOptions = [
    { name: "Cash on Delivery (COD)", icon: "https://cdn-icons-png.flaticon.com/128/5359/5359689.png" },
    { name: "Credit/Debit Card", icon: "https://cdn-icons-png.flaticon.com/128/311/311147.png" },
    { name: "Net Banking", icon: "https://cdn-icons-png.flaticon.com/128/11494/11494910.png" },
    { name: "PayPal", icon: "https://cdn-icons-png.flaticon.com/128/174/174861.png" },
  ];

  const calculateTotal = () => {
    return items.reduce((total, item) => total + parseInt(item.price.replace("₹", "")) * item.quantity, 0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
     

      {/* Payment Title */}
      <Text style={styles.title}>Payment Options</Text>

      {/* Item Summary Section */}
      <Text style={styles.sectionTitle}>Item Summary</Text>
      <View style={styles.summaryContainer}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Price: {item.price}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Total Price */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ₹{calculateTotal()}</Text>
      </View>

      {/* Payment Options */}
      <Text style={styles.sectionTitle}>Select Payment Method</Text>
      {paymentOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedOption(option.name)}
          style={[
            styles.optionContainer,
            selectedOption === option.name && styles.selectedOption, // Apply blue border if selected
          ]}
        >
          <Image source={{ uri: option.icon }} style={styles.optionImage} />
          <Text style={styles.optionText}>{option.name}</Text>
        </TouchableOpacity>
      ))}

      {/* Confirm Button */}
      <TouchableOpacity onPress={handleConfirmPress} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
  summaryContainer: {
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
  },
  itemPrice: {
    fontSize: 14,
    marginTop: 5,
  },
  itemQuantity: {
    fontSize: 14,
    marginTop: 5,
  },
  totalContainer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#f0f0f0", // Default border color
  },
  selectedOption: {
    backgroundColor: "#C9E5EF", // Blue border color for selected option
  },
  optionImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: "#ff3131",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Payment;