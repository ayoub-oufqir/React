# React Theme Switcher Example

This repository contains a basic example of using the Context API in React to manage a theme switcher feature. The application allows users to toggle between light and dark themes throughout the app.

## Files

### 1. ThemeContext.js

This file defines the context and provider for the theme preference. It uses the React Context API to manage and provide the theme state and toggle function to the components that need it.

- `ThemeContext.js` exports the `ThemeProvider` component, which wraps the app with the theme context and manages the theme state using the `useState` hook.
- It also exports the `useTheme` hook, which allows components to consume the theme context and access the current theme and the toggle function.

### 2. App.js

The `App.js` file is the entry point of the application. It demonstrates how to use the `ThemeProvider` component to provide the theme context to all child components. In this example, it wraps the main components of the app, such as the `Header` and `Content`.

### 3. Header.js

The `Header.js` component represents a simple header section for the application. It uses the `useTheme` hook from `ThemeContext.js` to access the theme and toggle function.

- The component displays the app's title.
- It also includes a button that allows users to toggle between light and dark themes.

## Context API

The Context API is a feature provided by React that allows you to manage global state and share data between components without having to pass props manually at every level. It's particularly useful for scenarios where multiple components need access to the same piece of state.

In this example, the Context API is used to manage the theme preference. The `ThemeContext` provides a way to share the current theme and a function to toggle between themes across various components.

By wrapping components with the `ThemeProvider` and using the `useTheme` hook, components can access the theme information without the need for prop drilling. This approach makes it easy to manage and update shared state across different parts of the application.
