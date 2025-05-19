## Setup instructions

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

---

## Architectural Decisions and Trade-offs

- **Folder Structure**: The project is organized into logical folders. Each folder is designed to encapsulate specific functionality:
  - The `components` folder contains reusable UI components, each focused solely on its own logic and presentation.
  - The `utils` folder includes helper functions and shared logic to avoid duplication and improve maintainability.
  - The `types` file in the `utils` folder centralizes TypeScript type definitions, ensuring consistency and reducing the risk of type-related errors across the app.
- **Modularity**: By splitting the code into self-contained modules, the architecture promotes reusability, easier testing, and better scalability as the app grows.
- **Type Safety**: The use of TypeScript throughout the project ensures type safety, making the codebase more robust and reducing runtime errors.


### Trade-offs:

- **API Call Overhead**: The app requires multiple API calls (e.g., up to 20) to fetch individual stories or data, which can impact performance and increase loading times, especially on slower networks.

---

## Ideas for Improvement

1. **Error Handling**: Add better error handling for API calls and user interactions.
2. **Testing**: Implement unit tests and integration tests.
3. **Design improvement**: Improve the UI.
4. **Accessibility**: Improve accessibility by adding proper ARIA roles and testing with screen readers.
