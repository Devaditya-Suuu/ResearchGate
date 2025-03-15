import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation(); // Navigation hook

  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        {/* ResearchGate Section */}
        <View style={styles.column}>
          <Text style={styles.footerTitle}>ResearchGate</Text>
          <Text style={styles.footerText}>
            Advancing research through collaboration and innovation.
          </Text>
        </View>

        {/* Quick Links Section */}
        <View style={styles.column}>
          <Text style={styles.footerTitle}>Quick Links</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Events")}>
            <Text style={styles.footerLink}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Publications Clicked")}>
            <Text style={styles.footerLink}>Publications</Text>
          </TouchableOpacity>
        </View>

        {/* Connect Section */}
        <View style={styles.column}>
          <Text style={styles.footerTitle}>Connect</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/sit_researchgate/')}>
              <Icon name="instagram" size={30} color="#205781" style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/sit-researchgate')}>
              <Icon name="linkedin" size={30} color="#205781" style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer Bottom */}
      <View style={styles.footerBottom}>
        <Text style={styles.footerBottomText}>
          © 2024 ResearchGate. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#edfdd2',
    paddingVertical: 32,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  column: {
    flex: 1,
    marginVertical: 8,
  },
  footerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  footerText: {
    fontSize: 13,
    color: '#666',
  },
  footerLink: {
    fontSize: 14,
    color: '#205781',
    marginBottom: 8,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialIcon: {
    marginHorizontal: 8,
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 16,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerBottomText: {
    fontSize: 14,
    color: '#666',
  },
});

export default Footer;
