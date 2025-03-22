import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation(); // Fix: Added navigation hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.header}>
      <View style={styles.navbar}>
        {/* Logo */}
        <TouchableOpacity style={styles.logo}>
          <Text style={styles.logoText}>ResearchGate</Text>
        </TouchableOpacity>

        {/* Menu Button for Mobile */}
        {screenWidth < 768 && (
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Desktop Navigation Links */}
      {screenWidth >= 768 && (
        <View style={styles.navLinks}>
          <TouchableOpacity style={styles.navLink} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navLinkText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => navigation.navigate('Events')}>
            <Text style={styles.navLinkText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => navigation.navigate('Members')}>
            <Text style={styles.navLinkText}>Members</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => navigation.navigate('Leads')}>
            <Text style={styles.navLinkText}>Leads</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navLinkText}>Members Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.navLinkText}>Contact</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Mobile Menu (toggle based on isMenuOpen state) */}
      {isMenuOpen && screenWidth < 768 && (
        <View style={styles.mobileMenu}>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navLinkText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => navigation.navigate('Events')}>
            <Text style={styles.navLinkText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => navigation.navigate('Members')}>
            <Text style={styles.navLinkText}>Members</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => navigation.navigate('Leads')}>
            <Text style={styles.navLinkText}>Leads</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navLinkText}>Members Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.navLinkText}>Contact</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#205781',
    paddingTop: 30,
    paddingBottom: 10,
    zIndex: 50,
    marginTop: 20,
    borderRadius: 20,
    position: 'relative', // Fix: Ensures absolute positioning works inside
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  menuButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#205781',
    borderRadius: 6,
  },
  menuIcon: {
    fontSize: 30,
    color: 'white',
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  navLink: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    borderRadius: 10,
  },
  navLinkText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  mobileMenu: {
    backgroundColor: '#205781',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  mobileMenuItem: {
    marginBottom: 20,
  },
});

export default Header;
