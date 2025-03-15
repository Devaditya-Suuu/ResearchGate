import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const ContactPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.text}>+1 (234) 567-890</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>contact@example.com</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.text}>123 Main Street, City, Country</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  text: {
    fontSize: 14,
    marginBottom: 15,
    color: '#777',
  },
});

export default ContactPage;