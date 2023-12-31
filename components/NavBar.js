import React from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const NavBar = () => {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.menuButton}>
                <Image 
                    source={require('../assets/logo.png')} 
                    style={styles.logo}
                />
            </TouchableOpacity>
           
            <TextInput 
                style={styles.searchBar}
                placeholder="Search"
                // Add more properties as required for search functionality
            />
            <TouchableOpacity style={styles.accountButton}>
                <Image 
                    source={require('../assets/menu.svg')} 
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#FFFFFF', // Or any other color
    },
    menuButton: {
        // Styles for the burger menu button
    },
    logo: {
        // Styles for the logo
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    searchBar: {
        // Styles for the search bar
        flex: 1,
        marginTop:15,
        marginLeft: 10,
        marginRight: 10,
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#F0F0F0', // Or any other color
    },
    accountButton: {
        // Styles for the account button
    },
    icon: {
        marginTop:15,
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});

export default NavBar;
