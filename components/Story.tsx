import { StoryProps } from "@/utils/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Author from "./Author";

export default function Story({ story }: StoryProps) {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  if (!story) {
    return <Text>Loading...</Text>;
  }

  const openUrl = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (!supported) {
      Alert.alert("Cannot open the link:", url);
      return;
    }

    Alert.alert(
      "Open Link",
      "Are you sure you want to open this link?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Open",
          onPress: async () => {
            await Linking.openURL(url);
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setIsDetailsVisible(!isDetailsVisible)}
      style={styles.container}
    >
      <View style={styles.cardView}>
        <View style={styles.titleAndScoreContainer}>
          <View>
            <Text style={styles.title}>{story.title}</Text>
          </View>

          <View style={styles.scoreContainer}>
            <Text style={styles.score}>Score: {story.score}</Text>
            <Ionicons
              name="star"
              color="#FFD250"
              size={16}
              style={styles.icon}
            />
          </View>
        </View>
        <Ionicons
          name={isDetailsVisible ? "chevron-up" : "chevron-down"}
          size={20}
          color="#888"
        />
      </View>

      {isDetailsVisible && (
        <View style={styles.details}>
          <TouchableOpacity onPress={() => openUrl(story.url)}>
            <Text style={styles.link}>{story.url}</Text>
          </TouchableOpacity>
          <Text style={styles.author}>Written by {story.by}</Text>
          <Author authorName={story.by} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  titleAndScoreContainer: {
    maxWidth: "90%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
    flex: 1,
    marginRight: 8,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  score: {
    fontSize: 14,
    color: "#888",
  },
  icon: {
    marginLeft: 6,
  },
  details: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
  },
  link: {
    color: "#1e90ff",
    textDecorationLine: "underline",
    marginBottom: 8,
    marginTop: 2,
  },
  author: {
    color: "#555",
    fontStyle: "italic",
    marginTop: 4,
  },
});
