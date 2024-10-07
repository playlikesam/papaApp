import { Image, ScrollView, Text, View, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import InputField from "@/components/InputField";

const Profile = () => {
  const [isBikeOn, setIsBikeOn] = useState(false);
  const [vehicleImageUrl, setVehicleImageUrl] = useState("https://cdn-icons-png.flaticon.com/128/9983/9983173.png");

  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/64/64572.png",
    plan: "Premium",
    availabilityStatus: "Online",
  };

  const handleSwitchChange = (value: boolean) => {
    setIsBikeOn(value);
    if (value) {
      setVehicleImageUrl("https://cdn-icons-png.flaticon.com/128/9983/9983173.png"); // Bike image URL
      console.log("Switched to Bike");
    } else {
      setVehicleImageUrl("https://cdn-icons-png.flaticon.com/128/3085/3085330.png"); // Car image URL
      console.log("Switched to Car");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView
        className="px-5"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="flex flex-row justify-between items-center my-5">
          <Text className="text-2xl font-JakartaBold">My Profile</Text>
          <Image
            source={{ uri: vehicleImageUrl }}
            style={{ width: 50, height: 50 }}
          />
        </View>

        <View className="flex flex-row justify-between items-center my-5">
          <Text className="text-lg font-JakartaBold">Plan: {user.plan}</Text>
          <Switch
            value={isBikeOn}
            onValueChange={handleSwitchChange}
            thumbColor={isBikeOn ? "#f5dd4b" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>

        <View className="flex items-center justify-center my-5">
          <Image
            source={{ uri: user.imageUrl }}
            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
            className="rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
          />
          <Text className="text-lg font-JakartaBold mt-2">
            {user.availabilityStatus}
          </Text>
        </View>

        <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
          <View className="flex flex-col items-start justify-start w-full">
            <InputField
              label="First name"
              placeholder={user.firstName}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Last name"
              placeholder={user.lastName}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Email"
              placeholder={user.email}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Phone"
              placeholder={user.phone}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
