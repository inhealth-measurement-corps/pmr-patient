import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const TotalDistanceGraph = () => {
    return (
        <View style={styles.container}>
            <Text>Total Distance Graph</Text>
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

export default TotalDistanceGraph;