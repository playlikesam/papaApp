import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View, StyleSheet } from "react-native";
import { icons } from "@/constants";

// TabIcon Component with custom styles
const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View style={[styles.iconWrapper, focused ? styles.focusedBackground : null]}>
    <Image
      source={source}
      resizeMode="contain"
      style={[styles.iconImage, focused ? styles.focusedIcon : styles.defaultIcon]}
    />
  </View>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          marginHorizontal: 70,
          marginBottom: 10,
          height: 78,
          borderRadius: 40,
          position: "absolute",
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />

      {/* Chat Tab */}
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.chat} focused={focused} />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

// Styles
const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#444", // Default background
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  focusedBackground: {
    backgroundColor: "#ff3131", // Background color when focused
  },
  defaultIcon: {
    tintColor: "#fff", // Default icon color
  },
  focusedIcon: {
    tintColor: "#fff", // Icon color when focused
  },
});