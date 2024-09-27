import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For heart, back, and star icons
import { useNavigation } from '@react-navigation/native'; // For navigation

// Sample Data for Wishlist using images from cart.tsx
const initialWishlistData = [
  {
    id: '1',
    name: 'Oil Change Service',
    description: 'Quick and reliable oil change for your car.',
    image: 'https://cdn-icons-png.flaticon.com/128/992/992700.png',
    price: '₹50',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Brake Repair Service',
    description: 'Fix worn-out brakes and ensure safety.',
    image: 'https://cdn-icons-png.flaticon.com/128/992/992716.png',
    price: '₹120',
    rating: 4.0,
  },
  {
    id: '3',
    name: 'Tire Replacement',
    description: 'Get new tires installed and your car ready for the road.',
    image: 'https://cdn-icons-png.flaticon.com/128/992/992728.png',
    price: '₹200',
    rating: 4.8,
  },
];

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState(initialWishlistData);
  const [isModalVisible, setModalVisible] = useState(false);
  const [removedItem, setRemovedItem] = useState('');
  const navigation = useNavigation();

  const removeFromWishlist = (itemId: string) => {
    const updatedWishlist = wishlist.filter(item => item.id !== itemId);
    const removedItem = wishlist.find(item => item.id === itemId)?.name || '';
    setWishlist(updatedWishlist);
    setRemovedItem(removedItem);
    toggleModal();
  };

  const addToCart = (item: any) => {
    // Navigate to the cart screen
    navigation.navigate('cart'); // Ensure 'Cart' is the correct name for the cart screen in your navigation setup
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name="star"
          size={16}
          color={i <= rating ? '#FFD700' : '#D3D3D3'}
        />
      );
    }
    return stars;
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <View style={styles.ratingContainer}>{renderStars(item.rating)}</View>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => removeFromWishlist(item.id)}>
          <FontAwesome name="heart" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addToCart(item)} style={styles.cartButton}>
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Wishlist</Text>
      {wishlist.length > 0 ? (
        <FlatList
          data={wishlist}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.emptyText}>Your wishlist is empty.</Text>
      )}

      {/* Modal for item removal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Removed "{removedItem}" from wishlist!</Text>
            <Pressable style={styles.modalButton} onPress={toggleModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  backIcon: {
    marginBottom: 10,
    paddingLeft: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  cartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Wishlist;