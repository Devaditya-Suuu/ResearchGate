import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const leadsData = [
    {
        id: '1',
        name: 'ujjwal pai',
        position: 'Head of AI Research',
        image: require('../assets/pai.jpg'),
        bio: 'Expert in artificial intelligence and machine learning with over 15 years of experience.'
    },
    {
        id: '2',
        name: 'Devaditya borah',
        position: 'Data Science Lead',
        image: require('../assets/devaditya.jpeg'),
        bio: 'Specializes in data analysis, statistical modeling, and big data management.'
    },
    {
        id: '3',
        name: 'Sujal',
        position: 'Blockchain Researcher',
        image: require('../assets/sujal.jpg'),
        bio: 'Leading blockchain innovation for secure and transparent data management.'
    }
];

const LeadCard = ({ lead }) => (
    <View style={styles.cardContainer}>
        <Image source={lead.image} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.name}>{lead.name}</Text>
            <Text style={styles.position}>{lead.position}</Text>
            <Text style={styles.bio}>{lead.bio}</Text>
        </View>
    </View>
);

const LeadsPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>ResearchGate Leads</Text>
            <FlatList
                data={leadsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <LeadCard lead={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#007bff',
        textAlign: 'center',
    },
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    position: {
        fontSize: 16,
        color: '#555',
        marginBottom: 8,
    },
    bio: {
        fontSize: 14,
        color: '#777',
    },
});

export default LeadsPage;
