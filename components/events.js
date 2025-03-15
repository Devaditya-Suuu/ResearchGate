import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For event icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import EventDetailsPage from './Hack-cse-lerate'; // Import your event details page

const eventsData = [
  {
    title: 'Hack-cse-lerate',
    description: 'Join us for Hackathot, an electrifying 12-hour coding marathon from 8 AM to 8 PM at the Birla Auditorium and Media Center. Compete against top innovators for a prize pool of ₹10,000, with ₹5,000 for 1st place, ₹3,000 for 2nd, and ₹2,000 for 3rd. Unleash your creativity, solve real-world problems, and make your mark in the tech world!',
    date: 'March 29, 2025',
    icon: 'calendar',
    time: 'Timing is: 8am',
  },
  // Add more events as needed
];

const EventsPage = () => {
  const navigation = useNavigation(); // Get the navigation prop using the useNavigation hook

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Upcoming Events</Text>
        <Text style={styles.heroDescription}>Stay updated with the latest events in the research community.</Text>
      </View>

      {/* List of Events */}
      {eventsData.map((event, index) => (
        <View key={index} style={styles.eventCard}>
          <View style={styles.iconContainer}>
            <Icon name={event.icon} size={30} color="#333" />
          </View>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <Text style={styles.eventDate}>{event.date}</Text>
            <Text style={styles.eventTime}>{event.time}</Text>
            <TouchableOpacity
              style={styles.learnMoreButton}
              onPress={() => navigation.navigate("EventDetails")}> {/* Use navigation to go to EventDetails */}
              <Text style={styles.learnMoreText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  heroSection: {
    backgroundColor: '#98D2C0',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 16,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#98D2C0',
    borderRadius: 50,
    marginRight: 16,
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  eventDate: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  eventTime: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  learnMoreButton: {
    backgroundColor: '#98D2C0',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 10,
  },
  learnMoreText: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default EventsPage;
