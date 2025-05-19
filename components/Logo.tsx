import { StyleSheet, Text, View } from "react-native";

export default function HackerNewsLogo() {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>HN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: "#FF6600",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logoText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
