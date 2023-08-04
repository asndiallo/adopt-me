# Complete Intro to React v8 Project

This project is an improved version of the project built during the "Complete Intro to React v8" course on Frontend Masters, taught by Brian Holt. The original project was a React app that allowed users to search for pets available for adoption based on location, animal type, and breed preferences. The aim of this improved version was to enhance the code quality, organization, and user experience by implementing several improvements.

## Improvements Made

1. **Modular Component Structure**: The code has been refactored to use a more modular component structure, promoting reusability and maintainability. Components have been organized logically and follow best practices for structuring React applications.

2. **Axios for API Requests**: Replaced the native `fetch` API with Axios for making API requests. Axios provides more robust error handling and simplifies the code for handling API responses, resulting in a more reliable data-fetching mechanism.

3. **JSDoc Documentation**: Comprehensive JSDoc comments have been added throughout the codebase, providing clear and descriptive documentation for each component, function, and prop. This improves code readability and makes it easier for developers to understand and maintain the project.

4. **Form Component**: Introduced a separate `Form` component responsible for rendering the search form. This improves code readability and separation of concerns, making it easier to manage form-related logic.

5. **Results Component**: Created a `Results` component for displaying the search results. This component encapsulates the logic for rendering pet data and improves code organization.

6. **Custom Hook**: Utilized a custom hook called `useBreedList` to fetch and manage the list of available breeds based on the selected animal type. This promotes code reusability and keeps the logic related to breed selection isolated.

7. **Error Handling**: Improved error handling for API requests, ensuring a smooth user experience even in case of network or server issues. Users are now presented with meaningful error messages when an error occurs during data fetching.

8. **Responsive Design**: The app has been optimized for various screen sizes and devices to provide a seamless experience for users on both desktop and mobile. Responsive design ensures that the app looks and functions well across different devices.

## How to Run the Project

1. Clone this repository to your local machine.
2. Install project dependencies using `npm install`.
3. Start the development server with `npm run dev`.
4. Open your web browser and visit `http://localhost:3000` to access the app.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the app for production.
- `npm run preview`: Serves the production build locally to preview the app.
- `npm run format`: Formats the source code using Prettier.
- `npm run lint`: Lints the source code using ESLint.

## Technologies Used

- React
- Axios
- React Query
- React Router DOM
- Vite (Development Server)
- ESLint (Code Linting)
- Prettier (Code Formatting)

## License

This project is licensed under the ISC License. Feel free to explore the codebase, review the commits, and provide feedback or suggestions for further enhancements. Happy coding!