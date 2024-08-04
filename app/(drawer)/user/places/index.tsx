import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/src/styles";
import PlaceCard from "@/components/PlaceCard";

export default function Places() {
  return (
    <SafeAreaView>
    <Text style={globalStyles.topLabel} >Places</Text>
    <View style={globalStyles.container}>
      <PlaceCard place={{
        id: "1",
        name: "Place 1",
        owner: "Emiliano"
      }}/>
    </View>
    </SafeAreaView>
  )
}