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
import { icons, images } from "@/constants";

const Parts: React.FC = () => {
  const router = useRouter();

  // State for wishlist
  const [wishlist, setWishlist] = useState<{ [key: string]: boolean }>({});
  const [quantity, setQuantity] = useState<{ [key: string]: number }>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Handle wishlist toggle
  const handleWishlistToggle = (productId: string) => {
    setWishlist((prevWishlist) => {
      const newWishlistState = !prevWishlist[productId];
      setPopupMessage(
        newWishlistState ? 'Item added to wishlist' : 'Item removed from wishlist'
      );
      setModalVisible(true);

      // Hide the popup after 2 seconds
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);

      return { ...prevWishlist, [productId]: newWishlistState };
    });
  };

  // Handle quantity increment
  const handleQuantityIncrement = (productId: string) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 1) + 1,
    }));
  };

  // Handle quantity decrement
  const handleQuantityDecrement = (productId: string) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: Math.max((prevQuantity[productId] || 1) - 1, 1), // Ensure the quantity doesn't go below 1
    }));
  };

  // Handle add to cart
  const handleAddToCart = (productId: string) => {
    // Navigate to cart.tsx with the productId or add the item to cart logic
    router.push('/cart');
  };

  // Render a product card
  const renderProductCard = (
    productId: string,
    productTitle: string,
    productImage: any,
    rating: number,
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
        <Text style={styles.price}>Price: ₹999</Text>

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

        {/* Add to Cart Button */}
        <TouchableOpacity onPress={() => handleAddToCart(productId)} style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Icon and Quantity Section */}
      <View style={styles.iconAndQuantityContainer}>
        {/* Wishlist Icon */}
        <TouchableOpacity
          onPress={() => handleWishlistToggle(productId)}
          style={styles.wishlistIcon}
        >
          <Ionicons
            name={wishlist[productId] ? 'heart' : 'heart-outline'}
            size={30}
            color={wishlist[productId] ? 'red' : '#333'}
          />
        </TouchableOpacity>

        {/* Quantity Section */}
        <View style={styles.quantitySection}>
          <TouchableOpacity onPress={() => handleQuantityDecrement(productId)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityNumber}>{quantity[productId] || 1}</Text>
          <TouchableOpacity onPress={() => handleQuantityIncrement(productId)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
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

        {/* Product Section */}
        <Text style={styles.header}>Accessories & Products</Text>

        <View style={styles.productContainer}>
          {/* Product Cards with Offers */}
          {renderProductCard('1', 'Shell Advance', images.engine_oil, 4.2, '20% Off')}
          {renderProductCard('2', 'Power Line', images.battery, 3.8, 'Buy 1 Get 1 Free')}
        </View>

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
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1000,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  productContainer: {
    flexDirection: 'column',
  },
  productBox: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
    position: 'relative', // For positioning the badge
  },
  offerBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#28a745', // Green background color
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
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 8,
    color: '#333',
  },
  addToCartButton: {
    backgroundColor: '#ff3131',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconAndQuantityContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  wishlistIcon: {
    marginBottom: 10,
    marginTop:45,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: '#ff3131',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityNumber: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Parts;
