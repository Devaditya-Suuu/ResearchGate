import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const EventDetailsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.eventHeader}>
        <Text style={styles.eventTitle}>Hack-cse-lerate - 29th March 2025</Text>
        <Text style={styles.eventDate}>Date: 29th March 2025</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Event Timing:</Text>
        <Text style={styles.sectionText}>Overall event time: 8:00 AM - 8:00 PM</Text>
        <Text style={styles.sectionText}>Location: Birla Audit & Media Center</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prize Pool:</Text>
        <Text style={styles.sectionText}>Total Prize Pool: ₹10,000</Text>
        <Text style={styles.sectionText}>1st Place: ₹5,000</Text>
        <Text style={styles.sectionText}>2nd Place: ₹3,000</Text>
        <Text style={styles.sectionText}>3rd Place: ₹2,000</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Schedule:</Text>
        <Text style={styles.sectionText}>8:00 AM - Event Begins</Text>
        <Text style={styles.sectionText}>11:00 AM - First Mentor Round</Text>
        <Text style={styles.sectionText}>
          3:00 PM - Second Mentor Round (Elimination round for 6-8 teams to be selected for the final)
        </Text>
        <Text style={styles.sectionText}>5:00 PM - Judges Start Evaluating</Text>
        <Text style={styles.sectionText}>7:00 PM - Judges Finish Evaluating</Text>
        <Text style={styles.sectionText}>7:00 - 8:00 PM - Prize Distribution</Text>
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  eventHeader: {
    marginBottom: 20,
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDate: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  registerButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default EventDetailsPage;
