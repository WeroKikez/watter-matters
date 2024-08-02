import { Tabs } from "expo-router";

export default function DrawerLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{ title: "Consumption"}} />
        <Tabs.Screen name="people" options={{ title: "People"}}/>
    </Tabs>
  );
}
