import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator, ScrollView, Animated, TextComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { useUser, useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

import GoogleTextInput from "@/components/GoogleTextInput";
import Map from "@/components/Map";
import RideCard from "@/components/RideCard";
import { icons, images } from "@/constants";
import { useFetch } from "@/lib/fetch";
import { useLocationStore } from "@/store";
import { Ride } from "@/types/type";

import Carousel from '@/app/(root)/Carousel';
import Menu from '@/app/(root)/menu';
import AdvertisementStrip from "@/app/(root)/advertisementStrip";
import Bell from "@/app/(root)/subscription";
import Subscription from "@/app/(root)/subscription";
import Referrals from "@/app/(root)/referrals";
import VendorList from '@/app/(root)/VendorList';
import VendorDetail from '@/app/(root)/VendorDetail';
import Slider from "@/app/(root)/slider";

const Home: React.FC = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const { setUserLocation, setDestinationLocation } = useLocationStore();
  const [hasPermission, setHasPermission] = React.useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuAnimation] = useState(new Animated.Value(-250)); // Menu hidden initially
  const router = useRouter();
  const servicingIconUrl = 'https://cdn-icons-png.flaticon.com/128/3631/3631163.png';
const partsIconUrl = 'https://cdn-icons-png.flaticon.com/128/9759/9759984.png';

  const {
    data: recentRides,
    loading,
    error,
  } = useFetch<Ride[]>(`/(api)/ride/${user?.id}`);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setHasPermission(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });

      setUserLocation({
        latitude: location.coords?.latitude,
        longitude: location.coords?.longitude,
        address: `${address[0].name}, ${address[0].region}`,
      });
    })();
  }, []);
  
  const handleDestinationPress = (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    setDestinationLocation(location);
    router.push("/find-ride");
  };

  const handleSignOut = () => {
    signOut();
    router.replace("/sign-in");
  };

  const navigateToServices = () => {
    router.push("/services");
  };

  const navigateToServicing = () => {
    router.push("/servicing");
  };
  
  const navigateToParts = () => {
    router.push("/parts");
  };

  const handleAddToCart = () => {
    router.push('/cart'); // Redirect to Cart page
  };

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(menuAnimation, {
        toValue: 250,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(menuAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
      

      {/* Logo at the top left */}
      <View style={{ flexDirection: "row", justifyContent: "flex-start", padding: 0 }}>
        <View
      style={{
        padding: 10, // Add padding around the image
        alignItems: 'center', // Center the image horizontally
        justifyContent: 'center', // Center the image vertically
      }}
    >
      <Image
        source={require("@/assets/icons/logo.png")}
        style={{
          width: 35,
          height: 35,
          resizeMode: 'contain', // Ensure the logo maintains its aspect ratio
        }}
      />
    </View>

        {/* Advertisement Strip */}
        <AdvertisementStrip />

        {/* Bell Icon */}
        <TouchableOpacity 
  onPress={() => router.push("/notifications")} 
  style={{ 
    position: "absolute",     
    right: 65, 
    zIndex: 100, // Ensure it's on top of other elements
    padding: 10 // Increase the touchable area
  }}
>
  <Image  
    source={icons.bell} 
    style={{ 
      width: 38, 
      height: 38, 
      tintColor: "#FF3131", 
    }} 
  />
</TouchableOpacity>

        <TouchableOpacity
          onPress={toggleMenu}
          style={{
            backgroundColor: "#FF3131",
            padding: 12,
            borderRadius: 50,
            position: "absolute",
            right: 20,
            top:10,
          }}
        >
          <Image source={icons.menu} style={{ width: 14, height: 14, tintColor: "#FFF" }} />
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <Animated.View
          style={{
          position: "absolute",
          top: 40,
          right: 0, // Positioning the menu on the right
          width: 250,
          height: "60%",
          backgroundColor: "#FFF",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          transform: [{ translateX: menuAnimation }],
          zIndex: 1000,
          }}
        >
          <Menu onClose={toggleMenu} />
          <TouchableOpacity
            onPress={toggleMenu}
            style={{
              position: "absolute",
              top: 35,
              right: 20,
              backgroundColor: "#000",
              padding: 10,
              borderRadius: 50,
            }}
          >
            <Image source={icons.right} style={{ width: 24, height: 24, tintColor: "#FFF" }} />
          </TouchableOpacity>
        </Animated.View>
      )}

      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 20 }}
        ListEmptyComponent={() => (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {!loading ? (
              <>
                <Image source={images.noResult} style={{ width: 160, height: 160 }} resizeMode="contain" />
                <Text style={{ fontSize: 14 }}>No recent Mechanics found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={
          <>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>Welcome {user?.firstName}👋</Text>
              <TouchableOpacity
                onPress={handleSignOut}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#FFF",
                }}
              >
                <Image source={icons.out} style={{ width: 16, height: 16 }} />
              </TouchableOpacity>
            </View>

            {/* <GoogleTextInput
              icon={icons.search}
              containerStyle={{ backgroundColor: "#FFF", shadowColor: "#D3D3D3", elevation: 3 }}
              handlePress={handleDestinationPress}
            /> */}

            {/* Carousel Section */}
            <View style={{right:15}}>
              <Carousel />
            </View>

            {/* Map Section */}
            {/* <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10 }}>
              Your current location
            </Text>
            <View style={{ height: 300, backgroundColor: "transparent" }}>
              <Map />
            </View> */}

            {/* Services Section */}
<View>
  {/* Buttons Section */}
<View style={{ padding: 10 }}>
      {/* Services Heading */}
      <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 20, marginBottom: 10 }}>
        Our Services
      </Text>

      {/* Buttons Section */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {/* Servicing Button */}
        <TouchableOpacity
          onPress={navigateToServicing}
          style={{
            width: '48%', // Adjust width for 2x2 grid
            padding: 20,
            marginBottom: 16,
            backgroundColor: '#fff',
            borderRadius: 8,
            elevation: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={{ uri: servicingIconUrl }}
            style={{ width: 50, height: 50, marginBottom: 10, marginTop: 10 }}
          />
          <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }}>Servicing</Text>
          <Text style={{ fontSize: 14, color: '#888', textAlign: 'center', marginVertical: 5 }}>
            Quality servicing for all vehicle types.
          </Text>
          <Text style={{ fontSize: 14, color: '#4CAF50', fontWeight: '700' }}>
            10% Off
          </Text>
        </TouchableOpacity>

        {/* Parts Button */}
        <TouchableOpacity
          onPress={navigateToParts}
          style={{
            width: '48%', // Adjust width for 2x2 grid
            padding: 20,
            marginBottom: 16,
            backgroundColor: '#fff',
            borderRadius: 8,
            elevation: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={{ uri: partsIconUrl }}
            style={{ width: 50, height: 50, marginBottom: 10 }}
          />
          <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }}>Parts</Text>
          <Text style={{ fontSize: 14, color: '#888', textAlign: 'center', marginVertical: 5 }}>
            High-quality parts for all vehicles.
          </Text>
          <Text style={{ fontSize: 14, color: '#4CAF50', fontWeight: '700' }}>
            15% Off
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  {/* Divider Line */}
  <View style={{
    height: 1,
    backgroundColor: "#D3D3D3",
    marginVertical: 20
  }} />

  {/* Modification Services */}
  <View style={{ padding: 10 }}>
      {/* Modification Services Heading */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#000' }}>
        Modification Services
      </Text>

      {/* Grid of services */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {[{
          name: 'Custom Exhaust',
          icon: icons.s10,
          description: 'Enhance your vehicle’s performance and sound.',
          offer: '10% Off'
        },
        {
          name: 'Body Kits',
          icon: icons.s11,
          description: 'Upgrade your vehicle’s appearance with style.',
          offer: '15% Off'
        },
        {
          name: 'Performance Tuning',
          icon: icons.s12,
          description: 'Maximize your vehicle’s engine performance.',
          offer: '20% Off'
        },
        {
          name: 'Spoilers',
          icon: icons.s13,
          description: 'Improve aerodynamics and look cool.',
          offer: '5% Off'
        }].map((service, index) => (
          <TouchableOpacity
            key={index}
            onPress={navigateToServices}
            style={{
              width: '48%', // Adjusted width for a 2x2 grid
              padding: 20,
              marginBottom: 16,
              backgroundColor: '#FFF',
              borderRadius: 8,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 2 },
              elevation: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={service.icon}
              style={{
                width: 40,
                height: 40,
                marginBottom: 8,
              }}
            />
            <Text style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#555',
              textAlign: 'center',
            }}>
              {service.name}
            </Text>
            <Text style={{
              fontSize: 12,
              color: '#888',
              textAlign: 'center',
              marginVertical: 6,
            }}>
              {service.description}
            </Text>
            <Text style={{
              fontSize: 14,
              color: '#4CAF50', // Green color for offers
              fontWeight: '700',
              textAlign: 'center',
            }}>
              {service.offer}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>

      {/* Slider */}
      <View>
        <Slider/>
      </View>
</View>

            {/* Subscription card */}
            <View>
              <Subscription/>
            </View>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}>
        {/* top rated vendors */}
        <View>
          <VendorList/>
        </View>

        {/* Referrals */}
        <View>
          <Referrals/>
        </View>
      </ScrollView>
          </>
        }
      />
    </SafeAreaView>
  );
};
export default Home;