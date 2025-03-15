import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import {useNavigation} from "@react-navigation/native";

const Front = () => {
   const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Advancing Research Together</Text>
        <Text style={styles.heroSubtitle}>
          Connect, collaborate, and contribute to global research initiatives
        </Text>
        <TouchableOpacity style={styles.neuButton}>
          <Text style={styles.neuButtonText}>Explore Research</Text>
        </TouchableOpacity>
      </View>

      {/* Events Section */}
      <View style={styles.eventsSection}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <View style={styles.eventsContainer}>
          {/* Event 1 */}
          <View style={styles.eventCard}>
            <Text style={styles.eventIcon}>📅</Text> {/* Emoji wrapped in Text */}
            <Text style={styles.eventTitle}>Research Symposium 2024</Text>
            <Text style={styles.eventDescription}>
              Join us for our annual research symposium featuring keynote speakers.
            </Text>
            <Text style={styles.eventDate}>March 15, 2024</Text>
          </View>
          {/* Event 2 */}
          <View style={styles.eventCard}>
            <Text style={styles.eventIcon}>👥</Text> {/* Emoji wrapped in Text */}
            <Text style={styles.eventTitle}>Workshop Series</Text>
            <Text style={styles.eventDescription}>
              Interactive workshops on research methodologies.
            </Text>
            <Text style={styles.eventDate}>April 5, 2024</Text>
          </View>
          {/* Event 3 */}
          <View style={styles.eventCard}>
            <Text style={styles.eventIcon}>💻</Text> {/* Emoji wrapped in Text */}
            <Text style={styles.eventTitle}>Virtual Conference</Text>
            <Text style={styles.eventDescription}>
              Global online conference connecting researchers worldwide.
            </Text>
            <Text style={styles.eventDate}>May 20, 2024</Text>
          </View>
        </View>
      </View>

      {/* Publications Section */}
      <View style={styles.publicationsSection}>
        <Text style={styles.sectionTitle}>Latest Publications</Text>
        <View style={styles.publicationCard}>
          <Text style={styles.publicationTitle}>Advances in Quantum Computing</Text>
          <Text style={styles.publicationDesc}>Published in International Journal of Quantum Science</Text>
          <View style={styles.publicationDetails}>
            <Text style={styles.publicationAuthors}>Authors: Dr. Sarah Chen, et al.</Text>
            <Text style={styles.publicationYear}>2023</Text>
          </View>
        </View>
        {/* Duplicate Publication Example */}
        <View style={styles.publicationCard}>
          <Text style={styles.publicationTitle}>Advances in Quantum Computing</Text>
          <Text style={styles.publicationDesc}>Published in International Journal of Quantum Science</Text>
          <View style={styles.publicationDetails}>
            <Text style={styles.publicationAuthors}>Authors: Dr. Sarah Chen, et al.</Text>
            <Text style={styles.publicationYear}>2023</Text>
          </View>
        </View>

        {/* Links */}
        <TouchableOpacity style={styles.neuButton} onPress={() => navigation.navigate('Members')}>
          <Text style={styles.neuButtonText}>Members Publications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.neuButton} onPress={() => navigation.navigate('')}>
          <Text style={styles.neuButtonText}>Recent Publications</Text>
        </TouchableOpacity>
      </View>
      <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  heroSection: {
    backgroundColor: '#98D2C0',
    borderRadius: 30,
    padding: 40,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D2D2D',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#606060',
    marginBottom: 20,
  },
  neuButton: {
    borderRadius: 12,
    backgroundColor: '#98D2C0',
    paddingVertical: 12,
    paddingHorizontal: 30,
    shadowColor: 'rgba(32, 87, 129, 0.5)',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 10,
  },
  neuButtonText: {
    fontWeight: 'bold',
    color: '#2D2D2D',
    fontSize: 16,
  },
  eventsSection: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2D2D2D',
    marginBottom: 20,
  },
  eventsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  eventCard: {
    backgroundColor: '#A1E3F9',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    width: '30%',
    shadowColor: 'rgba(32, 87, 129, 0.5)',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  eventIcon: {
    fontSize: 24,
    color: '#2D2D2D',
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D2D2D',
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 14,
    color: '#606060',
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2D2D2D',
  },
  publicationsSection: {
    paddingVertical: 20,
  },
  publicationCard: {
    backgroundColor: '#A1E3F9',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: 'rgba(32, 87, 129, 0.5)',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  publicationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D2D2D',
    marginBottom: 10,
  },
  publicationDesc: {
    fontSize: 14,
    color: '#606060',
    marginBottom: 10,
  },
  publicationDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  publicationAuthors: {
    fontSize: 12,
    color: '#2D2D2D',
  },
  publicationYear: {
    fontSize: 12,
    color: '#2D2D2D',
  },
});

export default Front;
