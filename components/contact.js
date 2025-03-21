import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Linking } from 'react-native';

const ContactPage = () => {
  const handleEmailPress = () => {
    const email = 'sitresearchgate@sit.sc.in';
    Linking.openURL(`mailto:${email}`).catch(err => console.error('Error opening email:', err));
  };

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Contact Us</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.text}>+91 9731636663</Text>

          <Text style={styles.label}>Email:</Text>
          <TouchableOpacity onPress={handleEmailPress}>
            <Text style={styles.emailText}>sitresearchgate@sit.sc.in</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Address:</Text>
          <Text style={styles.text}>Siddaganga Institute of Technology, Tumkur, 572103</Text>
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
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#777',
  },
  emailText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default ContactPage;
