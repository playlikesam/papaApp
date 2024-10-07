import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Image} from 'react-native';
import { icons } from '@/constants/index';
import { SafeAreaView } from 'react-native-safe-area-context';
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
        <View style={styles.header}>
            <View style={styles.imageContainer}>
              <Image
              source={icons.aam} // Use the icon from the imported index.ts
              style={styles.image}
              resizeMode="cover"
              />
            </View>
        </View>

        <View style={styles.card}>
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Send us a Message</Text>
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
        </View>
        <View style={styles.card}>
          <View style={styles.contactInfo}>
            <Text style={styles.infoTitle}>Contact Details</Text>
            <View style={styles.infoRow}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5616/5616461.png' }} // Replace with your icon URL
                style={styles.icon}
              />
              <Text style={styles.infoText}>Jabalpur Incubation Centre, 3rd Floor, MIC Colony Katanga, Jabalpur, M.P (482001)</Text>
            </View>
            <View style={styles.infoRow}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/455/455705.png' }} // Replace with your icon URL
                style={styles.icon}
              />
              <Text style={styles.infoText}>+91 84357 76053</Text>
            </View>
            <View style={styles.infoRow}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3178/3178158.png' }} // Replace with your icon URL
                style={styles.icon}
              />
              <Text style={styles.infoText}>connect@mechbuddy.in</Text>
            </View>
          </View>
          <View style={styles.socialContainer}>
            <Text style={styles.infoTitle}>Follow Us</Text>
            <View style={styles.socialRow}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3670/3670051.png' }} // Replace with your WhatsApp icon URL
                style={styles.icon}
              />
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png' }} // Replace with your Facebook icon URL
                style={styles.icon}
              />
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3670/3670151.png' }} // Replace with your Instagram icon URL
                style={styles.icon}
              />
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/145/145807.png' }} // Replace with your LinkedIn icon URL
                style={styles.icon}
              />
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4138/4138124.png' }} // Replace with your Twitter icon URL
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contactInfo: {
    marginBottom: 20,
    padding:20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    flex: 1,
    textAlign: 'justify',
  },
  formContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  textArea: {
    backgroundColor: '#FFF',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    minHeight: 100,
  },
  button: {
    backgroundColor: '#ff3131',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
  socialContainer: {
    marginBottom : 20,
    paddingLeft:20,
    paddingRight:20,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Contact;
