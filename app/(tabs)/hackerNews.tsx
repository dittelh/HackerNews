import Story from "@/components/Story";
import { Story as StoryInterface } from "@/utils/types";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HackerNewsScreen() {
  const [topStories, setTopStories] = useState<StoryInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchHackerNews = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$priority"&limitToFirst=20`
      );
      const storyIds = await response.json();

      const storyPromises = storyIds.map((id: number) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (res) => res.json()
        )
      );

      const stories = await Promise.all(storyPromises);
      const sortedStories = stories.sort((a, b) => b.score - a.score);
      setTopStories(sortedStories);
    } catch (error) {
      console.error("Error fetching Hacker News:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchHackerNews();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchHackerNews();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top 20 Hacker News Stories</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#ff6600" style={styles.loader} />
      ) : (
        <FlatList
          data={topStories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.storyWrapper}>
              <Story story={item} />
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 25,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#333",
  },
  loader: {
    marginTop: 50,
  },
  storyWrapper: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  listContent: {
    paddingTop: 25,
    paddingBottom: 15,
  },
});
