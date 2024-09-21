import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const About: React.FC = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); // Navigates back to the previous screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="arrow-back-ios" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Us</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Hero Image */}
        <Image
          style={styles.heroImage}
          source={{ uri: 'https://your-image-url.com/hero-image.jpg' }} // Replace with your image URL
        />

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Welcome to Mech Buddy</Text>
          <Text style={styles.description}>
            Mech Buddy is your trusted partner for all your mechanical needs. We offer top-notch services to ensure your vehicle is always in perfect condition.
          </Text>
        </View>

        {/* Mission Section */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Our Mission</Text>
          <Text style={styles.text}>
            Our mission is to provide reliable and efficient mechanical services that exceed our customers' expectations.
          </Text>
        </View>

        {/* Vision Section */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Our Vision</Text>
          <Text style={styles.text}>
            To become the leading provider of mechanical solutions through innovative practices and customer-first values.
          </Text>
        </View>

        {/* Values Section */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Our Values</Text>
          <View style={styles.valuesList}>
            <View style={styles.valueItem}>
              <Icon name="check-circle" size={20} color="#FF6347" style={styles.valueIcon} />
              <Text style={styles.valueText}>Quality Service</Text>
            </View>
            <View style={styles.valueItem}>
              <Icon name="check-circle" size={20} color="#FF6347" style={styles.valueIcon} />
              <Text style={styles.valueText}>Customer Satisfaction</Text>
            </View>
            <View style={styles.valueItem}>
              <Icon name="check-circle" size={20} color="#FF6347" style={styles.valueIcon} />
              <Text style={styles.valueText}>Integrity</Text>
            </View>
            <View style={styles.valueItem}>
              <Icon name="check-circle" size={20} color="#FF6347" style={styles.valueIcon} />
              <Text style={styles.valueText}>Innovation</Text>
            </View>
          </View>
        </View>

        {/* Team Section */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Meet the Team</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Team Member 1 */}
            <View style={styles.teamMember}>
              <Image
                style={styles.teamImage}
                source={{ uri: 'https://your-image-url.com/team-member-1.jpg' }} // Replace with your image URL
              />
              <Text style={styles.teamName}>John Doe</Text>
              <Text style={styles.teamRole}>Founder & CEO</Text>
            </View>
            {/* Team Member 2 */}
            <View style={styles.teamMember}>
              <Image
                style={styles.teamImage}
                source={{ uri: 'https://your-image-url.com/team-member-2.jpg' }} // Replace with your image URL
              />
              <Text style={styles.teamName}>Jane Smith</Text>
              <Text style={styles.teamRole}>Head Mechanic</Text>
            </View>
            {/* Add more team members as needed */}
          </ScrollView>
        </View>

        {/* Contact Us Button */}
        <TouchableOpacity style={styles.contactButton} onPress={() => navigation.navigate('/contact')}>
          <Text style={styles.contactButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingBottom:80,
  },
  header: {
    backgroundColor: '#ff3131',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  backButton: {
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    padding: 20,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  section: {
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#ff3131',
    lineHeight: 24,
    textAlign: 'justify',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3131',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'justify',
  },
  valuesList: {
    marginLeft: 10,
  },
  valueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  valueIcon: {
    marginRight: 10,
    color: '#FF3131',
  },
  valueText: {
    fontSize: 16,
    color: '#555',
  },
  teamMember: {
    alignItems: 'center',
    marginRight: 20,
  },
  teamImage: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    marginBottom: 10,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  teamRole: {
    fontSize: 14,
    color: '#777',
  },
  contactButton: {
    backgroundColor: '#ff3131',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default About;
