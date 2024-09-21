import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const AdvertisementStrip: React.FC = () => {
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start the scrolling animation
    Animated.loop(
      Animated.timing(scrollAnim, {
        toValue: -width, // Scroll off the screen
        duration: 3000, // 3 seconds scroll duration
        useNativeDriver: true,
      })
    ).start();

    // Hide the advertisement after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // Hide the strip after 3 seconds

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.adStrip,
          {
            transform: [
              {
                translateX: scrollAnim,
              },
            ],
          },
        ]}
      >
        <Text style={styles.adText}>Special Offer: Get 50% off on your first service!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    overflow: "hidden",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  adStrip: {
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
  adText: {
    fontSize: 16,
    color: "#ff3131",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default AdvertisementStrip;