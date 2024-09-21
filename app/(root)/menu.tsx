import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons'; // Cross icon for close button
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Icons for menu items

const Menu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Services */}
      <TouchableOpacity onPress={() => router.push('/services')} style={styles.menuItem}>
        <FontAwesome name="cogs" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.menuText}>Services</Text>
      </TouchableOpacity>

      {/* About Us */}
      <TouchableOpacity onPress={() => router.push('/about')} style={styles.menuItem}>
        <FontAwesome name="info-circle" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.menuText}>About Us</Text>
      </TouchableOpacity>

      {/* Contact */}
      <TouchableOpacity onPress={() => router.push('/contact')} style={styles.menuItem}>
        <MaterialIcons name="contacts" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.menuText}>Contact</Text>
      </TouchableOpacity>

      {/* Cart */}
      <TouchableOpacity onPress={() => router.push('/cart')} style={styles.menuItem}>
        <FontAwesome name="shopping-cart" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.menuText}>Cart</Text>
      </TouchableOpacity>

      {/* Vendor */}
      <TouchableOpacity onPress={() => router.push('/VendorList')} style={styles.menuItem}>
        <FontAwesome name="building" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.menuText}>Vendor</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e', // Modern dark background
    paddingTop: 80,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2e',
    borderRadius: 20,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#dddd',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  menuText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    marginLeft: 20,
  },
  icon: {
    marginRight: 10,
  },
});

export default Menu;