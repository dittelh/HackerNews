import HackerNewsLogo from "@/components/Logo";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <HackerNewsLogo />
      <Text style={styles.heading}>Welcome to Hacker News Reader</Text>
      <Text style={styles.subheading}>Explore the latest tech news here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    marginBottom: 8,
    textAlign: "center",
  },
  subheading: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
