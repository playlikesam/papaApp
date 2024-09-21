import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for back button
import { useRouter } from 'expo-router';
import { icons } from "@/constants";
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for star icons

const vendors = [
  {
    id: '1',
    name: 'Speedy Auto Service',
    description: 'Reliable and fast auto repair services.',
    profileImage: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Precision Car Care',
    description: 'Expert car care with precision diagnostics.',
    profileImage: 'https://cdn-icons-png.flaticon.com/128/3135/3135716.png',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Quick Fix Mechanics',
    description: 'Quick and efficient mechanic services.',
    profileImage: 'https://cdn-icons-png.flaticon.com/128/3135/3135717.png',
    rating: 4.2,
  }
];

const Servicing: React.FC = () => {
  const router = useRouter();

  // Updated services array with descriptions and offers
  const services = [
    { name: "Oil Change", icon: icons.s1, description: "Quick and efficient oil change.", offer: "10% Off" },
    { name: "Brake Repair", icon: icons.s2, description: "Reliable brake repair service.", offer: "15% Off" },
    { name: "Tire Replacement", icon: icons.s3, description: "High-quality tire replacement.", offer: "20% Off" },
    { name: "Battery Check", icon: icons.s4, description: "Comprehensive battery diagnostics.", offer: "10% Off" },
    { name: "Engine Diagnosis", icon: icons.s5, description: "Thorough engine diagnostics.", offer: "25% Off" },
    { name: "Wheel Alignment", icon: icons.s6, description: "Precision wheel alignment.", offer: "15% Off" },
    { name: "Suspension Repair", icon: icons.s7, description: "Expert suspension repair service.", offer: "10% Off" },
    { name: "Air Conditioning", icon: icons.s8, description: "Efficient air conditioning service.", offer: "20% Off" },
    { name: "Transmission Repair", icon: icons.s9, description: "Reliable transmission repair.", offer: "30% Off" }
  ];

  const handleServicePress = (serviceName: string) => {
    // Navigate to the services.tsx page, passing the selected service name as a parameter
    router.push({
      pathname: '/services',
      params: { service: serviceName },
    });
  };

  const handleVendorPress = (vendorId: string) => {
    // Navigate to the VendorDetail.tsx page, passing the selected vendor ID as a parameter
    router.push({
      pathname: '/VendorDetail',
      params: { vendorId: vendorId },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={30} color="#333" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.heading}>Select a Service</Text>
          <Text style={styles.subheading}>Choose a service to get started</Text> 
        </View>

        <View style={styles.gridContainer}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={styles.serviceBox}
              onPress={() => handleServicePress(service.name)}
            >
              <Image source={service.icon} style={styles.icon} />
              <Text style={styles.serviceText}>{service.name}</Text>
              <Text style={styles.offer}>{service.offer}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Divider Line */}
        <View style={styles.divider} />

        <Text style={styles.vendorsHeading}>Available Vendors</Text>

        <FlatList
          data={vendors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.vendorBox}
              onPress={() => handleVendorPress(item.id)}
            >
              <Image source={{ uri: item.profileImage }} style={styles.vendorImage} />
              <View style={styles.vendorInfo}>
                <Text style={styles.vendorName}>{item.name}</Text>
                <Text style={styles.vendorDescription}>{item.description}</Text>
                <View style={styles.ratingContainer}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesome
                      key={star}
                      name={star <= item.rating ? 'star' : 'star-o'}
                      size={14}
                      color="#FFD700"
                    />
                  ))}
                  <Text style={styles.ratingText}> {item.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    
  },
  scrollContainer: {
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1000,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  subheading: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  serviceBox: {
    width: '30%',
    height: 120,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    width: 36,
    height: 36,
    marginTop: 10,
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
  },
  offer: {
    fontSize: 10,
    color: '#4CAF50',
    fontWeight: '700',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  vendorsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  vendorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  vendorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  vendorInfo: {
    flex: 1,
  },
  vendorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  vendorDescription: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
});

export default Servicing;
