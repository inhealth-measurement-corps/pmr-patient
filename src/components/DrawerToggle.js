import React from 'react';
import { Pressable } from 'react-native';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerToggle = (props) => {
    return (
        <Pressable 
            style={{
                alignSelf: 'flex-start',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 15,
                top: 0,
            }}
            onPress={() => {props.navigation.openDrawer()}}
            >
                <Icon 
                name="menu-outline" 
                color={colors.navy_blue} 
                size={30} 
                />
        </Pressable>
    )
}

export default DrawerToggle;