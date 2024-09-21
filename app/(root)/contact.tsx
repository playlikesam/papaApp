import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for back button
import { useRouter } from 'expo-router';

const Contact: React.FC = () => {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    // Handle form submission (e.g., send to server or email)
    Alert.alert('Success', 'Your message has been sent!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="#333" />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.title}>Contact Mech Buddy</Text>
          <Text style={styles.subtitle}>We'd love to hear from you!</Text>
        </View>

        <View style={styles.contactInfo}>
          <Text style={styles.infoTitle}>Contact Details</Text>
          <Text style={styles.infoText}>📍 Address: 123 Mechanic Lane, Auto City, AC 45678</Text>
          <Text style={styles.infoText}>📞 Phone: +123 456 7890</Text>
          <Text style={styles.infoText}>✉️ Email: support@mechbuddy.com</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Send Us a Message</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.textArea}
            placeholder="Your Message"
            multiline
            numberOfLines={4}
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom:80,
  },
  content: {
    padding: 20,
    paddingTop: 80, // Added padding at the top to accommodate the back button
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1000,
  },
  header: {
    marginBottom: 20,
  },
 
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  contactInfo: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  formContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 20,
    elevation: 3,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  textArea: {
    backgroundColor: '#FFF',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    minHeight: 100,
  },
  button: {
    backgroundColor: '#ff3131',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Contact;
