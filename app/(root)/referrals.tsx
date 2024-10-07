import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Clipboard from 'expo-clipboard';  // Importing clipboard API for copying text

const referralCode = "ABC123XYZ";  // Example referral code
const referralLink = `https://yourapp.com/referral/${referralCode}`; // Example referral link

const Referrals: React.FC = () => {

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(referralLink);
    Alert.alert("Copied to Clipboard", "Your referral link has been copied to the clipboard.");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <View style={styles.container}>
        {/* Card Container */}
        <View style={styles.card}>
          <Text style={styles.title}>Refer a Friend</Text>
          <Text style={styles.instruction}>
            Share your referral code with your friends and family to earn rewards!
          </Text>
          <View style={styles.referralContainer}>
            <Text style={styles.referralCode}>Referral Code: {referralCode}</Text>
            <TouchableOpacity
              style={styles.copyButton}
              onPress={copyToClipboard}
            >
              <Text style={styles.copyButtonText}>Copy Referral Link</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.link}>Or share this link:</Text>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={copyToClipboard}
          >
            <Text style={styles.shareButtonText}>{referralLink}</Text>
          </TouchableOpacity>

          {/* Social Media Icons */}
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3670/3670051.png' }}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png' }}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3670/3670151.png' }}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/145/145807.png' }}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4138/4138124.png' }}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  // Card Style
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    width: "100%",
    maxWidth: 400,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
    color: "#333",
  },
  referralContainer: {
    marginBottom: 20,
  },
  referralCode: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  copyButton: {
    backgroundColor: "#FF3131",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  copyButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  link: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  shareButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  shareButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  // Icon Styles
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});

export default Referrals;
