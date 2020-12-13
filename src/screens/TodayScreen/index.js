import React from 'react';
import { View, SafeAreaView, Pressable } from 'react-native';
import styles from './style';
import DisplayParam from '../../components/DisplayParam';

const TodayScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.grid}>
                <View style={styles.row}>
                    <DisplayParam 
                        title={"Ambulations"} 
                        num={0}
                        unit={"walks"}
                        progress={0.3} 
                        navigation={props.navigation}
                        screenName={'Daily Ambulations'}
                        info={'The number of walks you have completed today'}
                    />
                    <View style={styles.padding} />
                    <DisplayParam
                        title={"Distance"} 
                        num={0} 
                        unit={"ft"}
                        progress={0.5} 
                        navigation={props.navigation}
                        screenName={'Daily Distance'}
                        info={'The distance you have walked today'}
                    />
                </View>
                <View style={styles.row}>
                    <DisplayParam 
                        title={"Speed"} 
                        num={parseFloat(0.0).toFixed(1)} 
                        unit={"mph"}
                        progress={0.7} 
                        navigation={props.navigation}
                        screenName={'Daily Speed'}
                        info={'The average speed of your ambulations today'}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TodayScreen;

