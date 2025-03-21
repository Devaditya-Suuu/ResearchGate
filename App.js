import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import the Front.js screen
import Front from './components/front';  // Ensure the path is correct
import EventsPage  from './components/events';
import EventDetailsPage from "./components/Hack-cse-lerate";
import ContactPage from './components/contact';
import MemberCard from './components/Members'
import RecentPublications from './components/RecentPublications';
// Create Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay before transitioning to the main content
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);  // After 3 seconds, set loading to false
    }, 3000);  // Loading screen delay in milliseconds (3 seconds)
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <Image
            source={require('./assets/logo.png')}  // Path to your logo image
            style={styles.logo}
          />
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Stack Screen for the Front screen */}
        <Stack.Screen
          name="Home"
          component={Front}  // This is your Front.js component
          options={{ headerShown: false }}  // Option to hide the header (you can change it if you want a header)
        />
         <Stack.Screen
          name="Events"
          component={EventsPage}  // This is your EventsPage component
        />
        <Stack.Screen
          name="EventDetails"
          component={EventDetailsPage}  // This is your EventsPage component
        />
        <Stack.Screen
          name="Contact"
          component={ContactPage}  // This is your EventsPage component
        />
        <Stack.Screen
          name="Members"
          component={MemberCard}  // This is your EventsPage component
        />
        {/*<Stack.Screen*/}
        {/*  name="Recent"*/}
        {/*  component={MemberCard}  // This is your EventsPage component*/}
        {/*/>*/}
        <Stack.Screen
            name="Recent-Publications"
            component={RecentPublications}  // This is your EventsPage component
        />

      </Stack.Navigator>


    </NavigationContainer>
  );
};

// Styling for the loading screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,  // Set the width of the logo
    height: 250,  // Set the height of the logo
    marginBottom: 30,  // Space between logo and spinner
    borderRadius: 75,  // Optional: circular logo
  },
});

export default App;
