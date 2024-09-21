import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { images } from "@/constants";

const Cart: React.FC = () => {
  const router = useRouter();

  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Sample data for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'Shell Advance',
      image: images.engine_oil,
      rating: 4.2,
      price: 999,
      offer: '20% Off',
    },
    {
      id: '2',
      title: 'Power Line',
      image: images.battery,
      rating: 3.8,
      price: 1299,
      offer: '25% Off',
    },
  ]);

  // Handle quantity increment
  const handleQuantityIncrement = (productId: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  };

  // Handle quantity decrement
  const handleQuantityDecrement = (productId: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) - 1, 1),
    }));
  };

  // Handle remove from cart
  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(item => item.id !== productId);
      setPopupMessage('Item removed from cart');
      setModalVisible(true);

      // Hide the popup after 2 seconds
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);

      return updatedItems;
    });
  };

  // Handle buy now
  const handleBuyNow = () => {
    router.push('/payment');
  };

  // Navigate to Wishlist screen
  const handleNavigateToWishlist = () => {
    router.push('/wishlist');
  };

  // Render a cart item
  const renderCartItem = (
    productId: string,
    productTitle: string,
    productImage: any,
    rating: number,
    price: number,
    offer?: string
  ) => (
    <View style={styles.productBox} key={productId}>
      {offer && <View style={styles.offerBadge}><Text style={styles.offerBadgeText}>{offer}</Text></View>}
      <Image source={productImage} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{productTitle}</Text>
        <Text style={styles.productDescription}>
          High quality product description goes here. Perfect for your car!
        </Text>

        {/* Price */}
        <Text style={styles.price}>Price: ₹{price}</Text>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons
              key={star}
              name={star <= rating ? 'star' : 'star-outline'}
              size={20}
              color={star <= rating ? 'gold' : '#ccc'}
            />
          ))}
          <Text style={styles.ratingText}>({rating.toFixed(1)})</Text>
        </View>

        {/* Remove from Cart Button */}
        <TouchableOpacity onPress={() => handleRemoveFromCart(productId)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove from Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Quantity Section */}
      <View style={styles.quantitySection}>
        <TouchableOpacity onPress={() => handleQuantityDecrement(productId)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityNumber}>{quantities[productId] || 1}</Text>
        <TouchableOpacity onPress={() => handleQuantityIncrement(productId)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="#333" />
        </TouchableOpacity>

        {/* Wishlist Icon (Top Right) */}
        <TouchableOpacity style={styles.wishlistButton} onPress={handleNavigateToWishlist}>
          <Ionicons name="heart" size={30} color="#333" />
        </TouchableOpacity>

        {/* Cart Header */}
        <Text style={styles.header}>Your Cart</Text>

        {/* Cart Items */}
        <View style={styles.productContainer}>
          {cartItems.length > 0 ? (
            cartItems.map((item) =>
              renderCartItem(
                item.id,
                item.title,
                item.image,
                item.rating,
                item.price,
                item.offer
              )
            )
          ) : (
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
          )}
        </View>

        {/* Buy Now Button */}
        {cartItems.length > 0 && (
          <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
            <Text style={styles.buyNowButtonText}>Buy Now</Text>
          </TouchableOpacity>
        )}

        {/* Popup Modal */}
        <Modal visible={modalVisible} transparent={true} animationType="fade">
          <View style={styles.modalBackground}>
            <View style={styles.popup}>
              <Text style={styles.popupText}>{popupMessage}</Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom: 80,
  },
  content: {
    padding: 20,
    paddingTop: 80,
    paddingBottom: 100,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1000,
  },
  wishlistButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1000,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  productContainer: {
    flexDirection: 'column',
  },
  productBox: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
    position: 'relative',
  },
  offerBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#28a745',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    zIndex: 1000,
  },
  offerBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 8,
    color: '#666',
  },
  removeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ff3131',
    borderRadius: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
  },
  quantityButton: {
    paddingHorizontal: 12,
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityNumber: {
    fontSize: 16,
    paddingHorizontal: 12,
  },
  emptyCartText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
  },
  buyNowButton: {
    padding: 16,
    backgroundColor: '#ff3131',
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buyNowButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popup: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cart;