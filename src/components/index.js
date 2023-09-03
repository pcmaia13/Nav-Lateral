import React from "react";
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground} from "react-native" 
import {DrawerNaviigatorItems} from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons'

export default MenuLateral = props => (
    <ScrollView>
        <ImageBackground>
            source={required("../assets/background.png")}
            style={{ width: undefined, padding: 16, padding: 48 }}
      
            <image source={require("../assets/profile-pic.jpg")} style={style.profile} />
            <Text style={styles.name}>João Marcelos</Text>

            <View style ={{flexDirection: "row"}}>
                <Text style={styles.followers}>800 followers</Text>
                <Ionicons name="md-peaple" size={16} color="rgba(255, 255, 255, 0.8" />
            </View>
        </ImageBackground>

        <View style={styles.container}>
            <DrawerNaviigatorItems {...props} />
        </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 3,
        borderColor: "#FFF"
    },
    name: {
        color:"#FFF",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    },
    followers: {
        color: "rgba(255, 255, 255, 0,8)",
        fontSize: 13,
        marginRight: 4
    }
});
