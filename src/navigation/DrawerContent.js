import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import colors from '../config/colors';

import Icon from 'react-native-vector-icons/Ionicons';

const DrawerContent = (props) => {
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        setCurrentDate(
            month + '/' + date + '/' + year
        );
    }, []);
    return (
        <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                <View style={{ padding: 20 }}>
                    <Text style={styles.userInfoItem}>{currentDate}</Text>
                    <Text style={styles.userInfoItem}>Patient ID: XXXX</Text>
                    <Text style={styles.userInfoItem}>Room Number: XXXX</Text>
                </View>
            </View>
            <View style={styles.drawerSection}>
                <DrawerItem 
                    icon={() => (
                        <Icon 
                        name="home-outline"
                        color={colors.dark}
                        size={20}
                        />
                    )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('Today')}}
                />
                <DrawerItem 
                    icon={() => (
                        <Icon 
                        name="bar-chart-outline"
                        color={colors.dark}
                        size={20}
                        />
                    )}
                    label="Graphs"
                    onPress={() => {props.navigation.navigate('GraphLanding')}}
                />
            </View>
            <View style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={() => (
                        <Icon 
                        name="log-out-outline"
                        color={colors.dark}
                        size={20}
                        />
                    )}
                    label="Logout"
                    onPress={() => {props.navigation.navigate('Logout')}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        backgroundColor: colors.navy_blue,
        paddingTop: 50,
    },
    userInfoItem: {
        fontFamily: "SFCompactRounded-Medium",
        fontSize: 15,
        color: colors.white,
        paddingTop: 5
    },
    drawerSection: {
        marginLeft: 15,
        marginTop: 15,
        flex: 1,
    },
    drawerItem: {
        backgroundColor: colors.gray,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        marginLeft: 15,
    },
})

export default DrawerContent;