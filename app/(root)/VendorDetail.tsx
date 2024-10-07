import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; // For star and tick icons
import Subscription from './subscription';

// Sample data for services and products
const vendorData = [
  {
    id: '1',
    name: 'Speedy Auto Service',
    description: 'Reliable and fast auto repair services. We offer quick fixes and routine maintenance for your vehicle.',
    storeImage: 'https://media.istockphoto.com/id/901074626/photo/bike-shop-owner-with-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=o04w81eV6Pb3OF2C3qI4F6NcuMGMTcxi2YCTV9PMaFE=',
    profileImage: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    offer: '20% Off on First Service',
    isAvailable: true,
    products: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/3812/3812000.png', title: 'Engine Oil', offer: '15% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/964/964728.png', title: 'Brakes', offer: '10% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1046/1046788.png', title: 'Tires', offer: 'Buy 3 Get 1 Free' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Air Filter', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1067/1067513.png', title: 'Battery', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/850/850918.png', title: 'Spark Plugs', offer: 'Buy 4 Get 1 Free' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/892/892655.png', title: 'Coolant', offer: '20% Off' }
    ],
    services: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Oil Change', offer: '20% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/4282/4282723.png', title: 'Brake Repair', offer: '15% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1424/1424851.png', title: 'Tire Replacement', offer: '10% Off' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/3382/3382207.png', title: 'Alignment Check', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1581/1581815.png', title: 'Battery Check', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/3734/3734644.png', title: 'Transmission Service', offer: '15% Off' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/1164/1164455.png', title: 'Fluid Top-Up', offer: '10% Off' }
    ],
    rating: 4.5,
    reviews: [
      'Great service and quick turnaround time.',
      'The staff was very helpful and knowledgeable.'
    ]
  },
  {
    id: '2',
    name: 'Speedy Auto Service',
    description: 'Reliable and fast auto repair services. We offer quick fixes and routine maintenance for your vehicle.',
    storeImage: 'https://media.istockphoto.com/id/901074626/photo/bike-shop-owner-with-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=o04w81eV6Pb3OF2C3qI4F6NcuMGMTcxi2YCTV9PMaFE=',
    profileImage: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    offer: '20% Off on First Service',
    isAvailable: true,
    products: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/3812/3812000.png', title: 'Engine Oil', offer: '15% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/964/964728.png', title: 'Brakes', offer: '10% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1046/1046788.png', title: 'Tires', offer: 'Buy 3 Get 1 Free' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Air Filter', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1067/1067513.png', title: 'Battery', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/850/850918.png', title: 'Spark Plugs', offer: 'Buy 4 Get 1 Free' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/892/892655.png', title: 'Coolant', offer: '20% Off' }
    ],
    services: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Oil Change', offer: '20% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/4282/4282723.png', title: 'Brake Repair', offer: '15% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1424/1424851.png', title: 'Tire Replacement', offer: '10% Off' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/3382/3382207.png', title: 'Alignment Check', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1581/1581815.png', title: 'Battery Check', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/3734/3734644.png', title: 'Transmission Service', offer: '15% Off' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/1164/1164455.png', title: 'Fluid Top-Up', offer: '10% Off' }
    ],
    rating: 4.5,
    reviews: [
      'Great service and quick turnaround time.',
      'The staff was very helpful and knowledgeable.'
    ]
  },
  {
    id: '3',
    name: 'Speedy Auto Service',
    description: 'Reliable and fast auto repair services. We offer quick fixes and routine maintenance for your vehicle.',
    storeImage: 'https://media.istockphoto.com/id/901074626/photo/bike-shop-owner-with-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=o04w81eV6Pb3OF2C3qI4F6NcuMGMTcxi2YCTV9PMaFE=',
    profileImage: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    offer: '20% Off on First Service',
    isAvailable: true,
    products: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/3812/3812000.png', title: 'Engine Oil', offer: '15% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/964/964728.png', title: 'Brakes', offer: '10% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1046/1046788.png', title: 'Tires', offer: 'Buy 3 Get 1 Free' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Air Filter', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1067/1067513.png', title: 'Battery', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/850/850918.png', title: 'Spark Plugs', offer: 'Buy 4 Get 1 Free' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/892/892655.png', title: 'Coolant', offer: '20% Off' }
    ],
    services: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Oil Change', offer: '20% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/4282/4282723.png', title: 'Brake Repair', offer: '15% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1424/1424851.png', title: 'Tire Replacement', offer: '10% Off' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/3382/3382207.png', title: 'Alignment Check', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1581/1581815.png', title: 'Battery Check', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/3734/3734644.png', title: 'Transmission Service', offer: '15% Off' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/1164/1164455.png', title: 'Fluid Top-Up', offer: '10% Off' }
    ],
    rating: 4.5,
    reviews: [
      'Be the first one to rate our services.',
    ]
  },
  {
    id: '4',
    name: 'Speedy Auto Service',
    description: 'Reliable and fast auto repair services. We offer quick fixes and routine maintenance for your vehicle.',
    storeImage: 'https://media.istockphoto.com/id/901074626/photo/bike-shop-owner-with-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=o04w81eV6Pb3OF2C3qI4F6NcuMGMTcxi2YCTV9PMaFE=',
    profileImage: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    offer: '20% Off on First Service',
    isAvailable: true,
    products: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/3812/3812000.png', title: 'Engine Oil', offer: '15% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/964/964728.png', title: 'Brakes', offer: '10% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1046/1046788.png', title: 'Tires', offer: 'Buy 3 Get 1 Free' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Air Filter', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1067/1067513.png', title: 'Battery', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/850/850918.png', title: 'Spark Plugs', offer: 'Buy 4 Get 1 Free' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/892/892655.png', title: 'Coolant', offer: '20% Off' }
    ],
    services: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Oil Change', offer: '20% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/4282/4282723.png', title: 'Brake Repair', offer: '15% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1424/1424851.png', title: 'Tire Replacement', offer: '10% Off' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/3382/3382207.png', title: 'Alignment Check', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1581/1581815.png', title: 'Battery Check', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/3734/3734644.png', title: 'Transmission Service', offer: '15% Off' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/1164/1164455.png', title: 'Fluid Top-Up', offer: '10% Off' }
    ],
    rating: 4.5,
    reviews: [
      'Great service and quick turnaround time.',
      'The staff was very helpful and knowledgeable.'
    ]
  },
  {
    id: '5',
    name: 'Speedy Auto Service',
    description: 'Reliable and fast auto repair services. We offer quick fixes and routine maintenance for your vehicle.',
    storeImage: 'https://media.istockphoto.com/id/901074626/photo/bike-shop-owner-with-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=o04w81eV6Pb3OF2C3qI4F6NcuMGMTcxi2YCTV9PMaFE=',
    profileImage: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    offer: '20% Off on First Service',
    isAvailable: true,
    products: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/3812/3812000.png', title: 'Engine Oil', offer: '15% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/964/964728.png', title: 'Brakes', offer: '10% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1046/1046788.png', title: 'Tires', offer: 'Buy 3 Get 1 Free' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Air Filter', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1067/1067513.png', title: 'Battery', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/850/850918.png', title: 'Spark Plugs', offer: 'Buy 4 Get 1 Free' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/892/892655.png', title: 'Coolant', offer: '20% Off' }
    ],
    services: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Oil Change', offer: '20% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/4282/4282723.png', title: 'Brake Repair', offer: '15% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1424/1424851.png', title: 'Tire Replacement', offer: '10% Off' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/3382/3382207.png', title: 'Alignment Check', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1581/1581815.png', title: 'Battery Check', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/3734/3734644.png', title: 'Transmission Service', offer: '15% Off' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/1164/1164455.png', title: 'Fluid Top-Up', offer: '10% Off' }
    ],
    rating: 4.5,
    reviews: [
      'Great service and quick turnaround time.',
      'The staff was very helpful and knowledgeable.'
    ]
  },
  {
    id: '6',
    name: 'Speedy Auto Service',
    description: 'Reliable and fast auto repair services. We offer quick fixes and routine maintenance for your vehicle.',
    storeImage: 'https://media.istockphoto.com/id/901074626/photo/bike-shop-owner-with-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=o04w81eV6Pb3OF2C3qI4F6NcuMGMTcxi2YCTV9PMaFE=',
    profileImage: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    offer: '20% Off on First Service',
    isAvailable: true,
    products: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/3812/3812000.png', title: 'Engine Oil', offer: '15% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/964/964728.png', title: 'Brakes', offer: '10% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1046/1046788.png', title: 'Tires', offer: 'Buy 3 Get 1 Free' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Air Filter', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1067/1067513.png', title: 'Battery', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/850/850918.png', title: 'Spark Plugs', offer: 'Buy 4 Get 1 Free' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/892/892655.png', title: 'Coolant', offer: '20% Off' }
    ],
    services: [
      { id: '1', icon: 'https://cdn-icons-png.flaticon.com/128/763/763644.png', title: 'Oil Change', offer: '20% Off' },
      { id: '2', icon: 'https://cdn-icons-png.flaticon.com/128/4282/4282723.png', title: 'Brake Repair', offer: '15% Off' },
      { id: '3', icon: 'https://cdn-icons-png.flaticon.com/128/1424/1424851.png', title: 'Tire Replacement', offer: '10% Off' },
      { id: '4', icon: 'https://cdn-icons-png.flaticon.com/128/3382/3382207.png', title: 'Alignment Check', offer: '5% Off' },
      { id: '5', icon: 'https://cdn-icons-png.flaticon.com/128/1581/1581815.png', title: 'Battery Check', offer: '10% Off' },
      { id: '6', icon: 'https://cdn-icons-png.flaticon.com/128/3734/3734644.png', title: 'Transmission Service', offer: '15% Off' },
      { id: '7', icon: 'https://cdn-icons-png.flaticon.com/128/1164/1164455.png', title: 'Fluid Top-Up', offer: '10% Off' }
    ],
    rating: 4.5,
    reviews: [
      'Great service and quick turnaround time.',
      'The staff was very helpful and knowledgeable.'
    ]
  },
  // Add more vendors here...
];

const VendorDetail: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { vendorId } = route.params as { vendorId: string };

  // Find the vendor based on the vendorId
  const vendor = vendorData.find(v => v.id === vendorId);

  if (!vendor) {
    return (
      <View style={styles.container}>
        <Text>Vendor not found</Text>
      </View>
    );
  }

  const handleCardPress = (itemId: string, type: 'product' | 'service') => {
    navigation.navigate('services', { itemId, type });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* Store Image */}
      <View style={styles.storeImageContainer}>
        <Image source={{ uri: vendor.storeImage }} style={styles.storeImage} />
        <View style={styles.badgeContainer}>
          <Text style={styles.badge}>{vendor.offer}</Text>
        </View>
      </View>

      {/* Vendor Profile */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: vendor.profileImage }} style={styles.profileImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.vendorName}>{vendor.name}</Text>
          <View style={styles.availabilityContainer}>
            {vendor.isAvailable ? (
              <AntDesign name="checkcircle" size={20} color="green" />
            ) : (
              <AntDesign name="closecircle" size={20} color="red" />
            )}
            <Text style={[styles.availabilityText, { color: vendor.isAvailable ? 'green' : 'red' }]}>
              {vendor.isAvailable ? 'Available' : 'Not Available'}
            </Text>
          </View>
          <Text style={styles.description}>{vendor.description}</Text>
        </View>
      </View>

      {/* Quick Services */}
      <View style={styles.cardsContainer}>
        <Text style={styles.sectionHeading}>Quick Services</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollCards}>
          {vendor.services.map((service) => (
            <TouchableOpacity key={service.id} style={styles.card} onPress={() => handleCardPress(service.id, 'service')}>
              <Image source={{ uri: service.icon }} style={styles.icon} />
              <Text style={styles.cardTitle}>{service.title}</Text>
              <Text style={styles.cardOffer}>{service.offer}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Subscription/>
      </View>
            
      {/* Subscription */}

      {/* Ratings & Reviews */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionHeading}>Ratings & Reviews</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesome
              key={star}
              name={star <= vendor.rating ? 'star' : 'star-o'}
              size={20}
              color="#FFD700"
            />
          ))}
          <Text style={styles.ratingText}> {vendor.rating}</Text>
        </View>
        {vendor.reviews.map((review, index) => (
          <Text key={index} style={styles.reviewText}>• {review}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 120,
  },
  storeImageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  storeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  badgeContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#F74D00',
    padding: 5,
    borderRadius: 5,
  },
  badge: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  vendorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  availabilityText: {
    marginLeft: 5,
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  cardsContainer: {
    marginBottom: 30,
  },
  scrollCards: {
    flexDirection: 'row',
  },
  card: {
    width: 120,
    height: 120,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardOffer: {
    fontSize: 12,
    color: 'green',
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  detailsContainer: {
    marginTop: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  backButton: {
    backgroundColor: '#FF4500',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VendorDetail;
