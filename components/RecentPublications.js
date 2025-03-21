import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import publications from './publicationsData';

const RecentPublications = () => {
    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>Author: {item.author}</Text>
            <TouchableOpacity onPress={() => openLink(item.link)}>
                <Text style={styles.link}>Read More</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={publications}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#A1E3F9',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    author: {
        fontSize: 15,
        color: '#666',
        marginVertical: 5,
        marginTop: 10,
    },
    link: {
        fontSize: 15,
        color: '#000000',
        marginTop: 10,
        textDecorationLine: 'underline',
    },
});

export default RecentPublications;
