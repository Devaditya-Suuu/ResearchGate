import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const members = [
  {
    id: '1',
    name: 'John Doe',
    role: 'President',
    publications: '10 Research Papers',
    social: 'https://linkedin.com/in/johndoe',
    image: require('../../assets/johndoe.png')
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Vice President',
    publications: '8 Research Papers',
    social: 'https://linkedin.com/in/janesmith',
    image: require('../../assets/janesmith.png')
  },
  {
    id: '3',
    name: 'Michael Brown',
    role: 'Treasurer',
    publications: '5 Research Papers',
    social: 'https://linkedin.com/in/michaelbrown',
    image: require('../../assets/michaelbrown.png')
  }
];

const publications = [
  {
    id: '1',
    title: 'Advanced AI Techniques',
    author: 'John Doe',
    link: 'https://example.com/advanced-ai'
  },
  {
    id: '2',
    title: 'Blockchain and Security',
    author: 'Jane Smith',
    link: 'https://example.com/blockchain-security'
  },
  {
    id: '3',
    title: 'Quantum Computing Basics',
    author: 'Michael Brown',
    link: 'https://example.com/quantum-computing'
  }
];

const MemberCard = ({ member }) => (
  <View style={styles.card}>
    <Image source={member.image} style={styles.image} />
    <Text style={styles.name}>{member.name}</Text>
    <Text style={styles.role}>{member.role}</Text>
    <Text style={styles.publications}>{member.publications}</Text>
    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(member.social)}>
      <Text style={styles.buttonText}>View Profile</Text>
    </TouchableOpacity>
  </View>
);

const PublicationCard = ({ publication }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{publication.title}</Text>
    <Text style={styles.role}>By: {publication.author}</Text>
    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(publication.link)}>
      <Text style={styles.buttonText}>Read Publication</Text>
    </TouchableOpacity>
  </View>
);

const MembersPage = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Club Members</Text>
    <FlatList
      data={members}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MemberCard member={item} />}
    />
    <Text style={styles.header}>Recent Publications</Text>
    <FlatList
      data={publications}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PublicationCard publication={item} />}
    />
  </View>
);

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
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default MembersPage;
