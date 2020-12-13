import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../config/colors'

const DailySpeedGraph = () => {
    return (
        <View style={styles.container}>
            <Text>Today's Speed Graph</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DailySpeedGraph;