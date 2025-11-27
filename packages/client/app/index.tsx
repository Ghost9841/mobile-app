import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Link href="/(auth)/login/page" asChild>
        <TouchableOpacity className="mt-4 rounded bg-blue-500 p-4">
          <Text className="text-white text-2xl">Go to Login</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
