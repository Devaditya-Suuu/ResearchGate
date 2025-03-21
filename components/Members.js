import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Linking } from 'react-native';

const members = [
  {
    id: '1',
    name: 'Ujwal pai',
    role: 'Student Co-ordinator',
    publications: '3 Publications',
    social: 'https://linkedin.com/in/johndoe',
    viewPublication: 'https://www.researchgate.net/profile/Ujwal-Jakarbet',
      image: require('../assets/pai.jpg')
  },
  {
    id: '2',
    name: 'sujal',
    role: 'web lead',
    publications: '8 Research Papers',
    social: 'https://linkedin.com/in/sujalflash/',
      image: require('../assets/sujal.jpg')

  },
  {
    id: '3',
    name: 'Devaditya borah',
    role: 'Member of web team',
    // publications: '5 Research Papers',
    social: 'https://www.linkedin.com/in/devaditya-borah-%F0%9F%87%AE%F0%9F%87%B3-65865026b/',
    image: require('../assets/devaditya.jpeg')

  }
];

const MemberCard = ({ member }) => (
  <View style={styles.card}>
    <Image source={member.image} style={styles.image} />
    <Text style={styles.name}>{member.name}</Text>
    <Text style={styles.role}>{member.role}</Text>
    <Text style={styles.publications}>{member.publications}</Text>
    <Text style={styles.link} onPress={() => Linking.openURL(member.social)}>
      View Profile
    </Text>
    <Text style={styles.link} onPress={() => Linking.openURL(member.viewPublication)}>
      View Publications
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
    backgroundColor: '#a9d7ff',
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
    backgroundColor: '#f7f8fa',
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
    color: '#ffffff',
    textDecorationLine: 'none',
    marginTop: 10,
    backgroundColor: '#5aa88f',
    padding: 10,
    borderRadius: 50,
  }
});

export default MembersPage;
