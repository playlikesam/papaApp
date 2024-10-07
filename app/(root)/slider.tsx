import React from 'react';
import { View, Image, FlatList, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

// Sample data with dynamic offers for a mechanic store
const data = [
  { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/3407/3407407.png', label: 'Oil Change', description: 'Keep your engine running smoothly', offer: '10% OFF' },
  { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/2202/2202365.png', label: 'Brake Repair', description: 'Ensure your brakes are in top condition', offer: '15% OFF' },
  { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/3392/3392150.png', label: 'Tire Replacement', description: 'Get new tires for a safer drive', offer: '20% OFF' },
  { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/3176/3176318.png', label: 'Battery Check', description: 'Keep your battery in good health', offer: '25% OFF' },
  { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/2916/2916763.png', label: 'Engine Diagnostics', description: 'Diagnose engine issues accurately', offer: '10% OFF' },
  { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/3704/3704204.png', label: 'Transmission Repair', description: 'Smooth shifting and performance', offer: '15% OFF' },
  { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/2925/2925565.png', label: 'AC Servicing', description: 'Keep your car cool in the summer', offer: '20% OFF' },
  { id: '8', icon: 'https://cdn-icons-png.flaticon.com/128/149/149205.png', label: 'Suspension Repair', description: 'Improve your vehicle’s handling', offer: '25% OFF' },
];

const SliderReel = () => {
  const navigation = useNavigation();

  const handleCardPress = (item) => {
    // Navigate to VendorList screen with the selected item
    navigation.navigate('VendorList', { item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.exploreText}>Explore Services</Text>
        <View style={styles.divider} />
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.offer}>{item.offer}</Text>
          </TouchableOpacity>
        )}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:25,
  },
  exploreText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginTop:10,
  },
  card: {
    width: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginBottom: 20,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    marginTop: 4,
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
  offer: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
    color: '#28a745', // Green color for offers
    textAlign: 'center',
  },
});

export default SliderReel;