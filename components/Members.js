import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Linking } from 'react-native';

const members = [
  {
    id: '1',
    name: 'John Doe',
    role: 'President',
    publications: '10 Research Papers',
    social: 'https://linkedin.com/in/johndoe',
      image: require('../assets/pai.jpg')
  },
  {
    id: '2',
    name: 'sujal',
    role: 'web lead',
    publications: '8 Research Papers',
    social: 'https://linkedin.com/in/janesmith',
      image: require('../assets/sujal.jpg')

  },
  {
    id: '3',
    name: 'Michael Brown',
    role: 'Treasurer',
    publications: '5 Research Papers',
    social: 'https://linkedin.com/in/michaelbrown',

  }
];

const MemberCard = ({ member }) => (
  <View style={styles.card}>
    <Image source={member.image} style={styles.image} />
    <Text style={styles.name}>{member.name}</Text>
    <Text style={styles.role}>{member.role}</Text>
    <Text style={styles.publications}>{member.publications}</Text>
    <Text
      style={styles.link}
      onPress={() => Linking.openURL(member.social)}
    >
      View Profile
    </Text>
  </View>
);

const MembersPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Club Members</Text>
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MemberCard member={item} />}
      />
    </View>
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
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  role: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  publications: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  link: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline'
  }
});

export default MembersPage;
