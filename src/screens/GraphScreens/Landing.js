import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../../config/colors';

import Icon from 'react-native-vector-icons/Ionicons'

const GraphScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Today's Activity</Text> 
                <View style={styles.list}>
                    <Pressable 
                    style={styles.listItem}
                    onPress={() => {props.navigation.navigate('Graphs', { screen: 'Daily Ambulations' })}}>
                        <Icon 
                        name="chevron-forward-outline"
                        color={colors.dark}
                        size={20}
                        />
                        <Text style={styles.label}>Ambulations</Text>
                    </Pressable>
                    <Pressable 
                    style={styles.listItem}
                    onPress={() => {props.navigation.navigate('Graphs', { screen: 'Daily Distance' })}}>
                        <Icon 
                        name="chevron-forward-outline"
                        color={colors.dark}
                        size={20}
                        />
                        <Text style={styles.label}>Distance</Text>
                    </Pressable>
                    <Pressable 
                    style={styles.listItem}
                    onPress={() => {props.navigation.navigate('Graphs', { screen: 'Daily Speed' })}}>
                        <Icon 
                        name="chevron-forward-outline"
                        color={colors.dark}
                        size={20}
                        />
                        <Text style={styles.label}>Speed</Text>
                    </Pressable>
                </View>
            <View style={styles.padding} />
            <Text style={styles.title}>Cumulative Activity</Text> 
            <View style={styles.list}>
                <Pressable 
                    style={styles.listItem}
                    onPress={() => {props.navigation.navigate('Graphs', { screen: 'Total Ambulations' })}}>
                        <Icon 
                        name="chevron-forward-outline"
                        color={colors.dark}
                        size={20}
                        />
                        <Text style={styles.label}>Ambulations</Text>
                    </Pressable>
                    <Pressable 
                    style={styles.listItem}
                    onPress={() => {props.navigation.navigate('Graphs', { screen: 'Total Distance' })}}>
                        <Icon 
                        name="chevron-forward-outline"
                        color={colors.dark}
                        size={20}
                        />
                        <Text style={styles.label}>Distance</Text>
                    </Pressable>
                    <Pressable 
                    style={styles.listItem}
                    onPress={() => {props.navigation.navigate('Graphs', { screen: 'Total Speed' })}}>
                        <Icon 
                        name="chevron-forward-outline"
                        color={colors.dark}
                        size={20}
                        />
                        <Text style={styles.label}>Speed</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    padding: {
        height: 20,
    },
    content: {
        width: '75%',
        marginTop: -50
    },
    title: {
        fontFamily: 'SFCompactRounded-Medium',
        fontSize: 16,
        color: colors.black,
        textTransform: 'uppercase',
        padding: 20,
    },
    list: {
        marginTop: -15,
        paddingBottom: 20,
    },
    listItem: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: colors.gray,
        borderRadius: 20,
        padding: 10,
    },
    label: {
        fontFamily: 'SFCompactRounded-Medium',
        fontSize: 16,
        color: colors.dark,
        marginLeft: 20,
    }
})

export default GraphScreen;