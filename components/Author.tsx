import { AuthorDetails, AuthorProps } from "@/utils/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Author({ authorName }: AuthorProps) {
  const [authorDetails, setAuthorDetails] = useState<AuthorDetails>();

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/user/${authorName}.json?print=pretty`
        );
        const data = await response.json();
        setAuthorDetails(data);
      } catch (error) {
        console.error("Error fetching author details:", error);
      }
    };

    fetchAuthorDetails();
  }, []);

  if (!authorDetails) {
    return <Text style={styles.loading}>Loading author details...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Ionicons name="person" color="#FF6600" size={16} />
        <Text style={styles.label}> Author Info:</Text>
      </View>
      <Text style={styles.text}>Karma: {authorDetails.karma}</Text>
      <Text style={styles.text}>
        Joined: {new Date(authorDetails.created * 1000).toLocaleDateString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  loading: {
    fontSize: 14,
    color: "#888",
  },
  labelContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  label: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 4,
    color: "#444",
  },
  text: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
});
