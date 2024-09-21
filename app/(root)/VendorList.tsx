import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Sample vendor data
const vendors = [
  { id: '1', name: 'Baabu Pandey', description: 'Description for Vendor 1', image: 'https://mechbuddy.in/wp-content/uploads/2023/05/blog-s-1-2-1-1.jpg', availability: 'Available' },
  { id: '2', name: 'Golu service', description: 'Description for Vendor 2', image: 'https://mechbuddy.in/wp-content/uploads/2023/05/blog-s-1-2-1-1.jpg', availability: 'Unavailable' },
  { id: '3', name: 'Rahul Gandhi', description: 'Description for Vendor 3', image: 'https://mechbuddy.in/wp-content/uploads/2023/05/blog-s-1-2-1-1.jpg', availability: 'Available' },
];

// Replace with your custom star icon URL
const starIconUrl = 'https://cdn-icons-png.flaticon.com/128/7656/7656139.png';

const VendorList: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = (vendorId: string) => {
    navigation.navigate('VendorDetail', { vendorId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: starIconUrl }} style={styles.starIcon} />
        <Text style={styles.heading}>Top Rated Vendors</Text>
      </View>
      <FlatList
        data={vendors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.vendorItem} onPress={() => handlePress(item.id)}>
            <Image source={{ uri: item.image }} style={styles.vendorImage} />
            <View style={styles.vendorInfo}>
              <Text style={styles.vendorName}>{item.name}</Text>
              <Text style={styles.vendorDescription}>{item.description}</Text>
              <Text style={[styles.vendorAvailability, item.availability === 'Available' ? styles.available : styles.unavailable]}>
                {item.availability}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  starIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  vendorItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#D3D3D3',
    elevation: 3,
  },
  vendorImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  vendorInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  vendorName: {
    fontSize: 18,
    fontWeight: '600',
  },
  vendorDescription: {
    fontSize: 16,
    color: '#555',
  },
  vendorAvailability: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  available: {
    color: '#4CAF50', // Green color for available
  },
  unavailable: {
    color: '#F44336', // Red color for unavailable
  },
});

export default VendorList;