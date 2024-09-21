import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const subscriptionPlans = [
  {
    id: "1",
    name: "Basic Plan",
    price: "$5/month",
    description: "Get access to limited services with standard support.",
    icon: "https://cdn-icons-png.flaticon.com/128/2921/2921203.png", // Use relevant image links
  },
  {
    id: "2",
    name: "Standard Plan",
    price: "$10/month",
    description: "Access to most services and priority support.",
    icon: "https://cdn-icons-png.flaticon.com/128/2921/2921225.png",
  },
  {
    id: "3",
    name: "Premium Plan",
    price: "$20/month",
    description: "Enjoy unlimited services with premium support.",
    icon: "https://cdn-icons-png.flaticon.com/128/2921/2921210.png",
  },
];

const Subscription: React.FC = () => {
  const router = useRouter();

  const handleSubscribe = (planId: string) => {
    // Add your subscription logic here, e.g., redirect to payment page
    console.log(`Subscribed to plan: ${planId}`);
    router.push(`/payment?plan=${planId}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Subscription Plans</Text>

        <FlatList
          data={subscriptionPlans}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.planContainer}>
              <Image source={{ uri: item.icon }} style={styles.icon} />
              <View style={styles.planDetails}>
                <Text style={styles.planName}>{item.name}</Text>
                <Text style={styles.planPrice}>{item.price}</Text>
                <Text style={styles.planDescription}>{item.description}</Text>
                <TouchableOpacity
                  style={styles.subscribeButton}
                  onPress={() => handleSubscribe(item.id)}
                >
                  <Text style={styles.subscribeButtonText}>Subscribe</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  planContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  planDetails: {
    flex: 1,
  },
  planName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  planPrice: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  planDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  subscribeButton: {
    backgroundColor: "#FF3131",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  subscribeButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Subscription;