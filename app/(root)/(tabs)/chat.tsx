import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";
import Parts from "@/app/(root)/parts";

const Chat = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Parts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;