import { AuthorProvider } from "@/context/AuthorContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthorProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AuthorProvider>
  );
}
