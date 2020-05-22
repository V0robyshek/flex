import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NavBar = ({title}) => {
    return (
        <View style = {styles.navbar}>
            <Text style = {styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#5E4BD8',
        paddingBottom: 15
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});