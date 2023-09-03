import React from "react"
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native" 
import {FontAwesome5} from '@expo-vector-icons'
import { setStatusBarBackgroundColor } from "expo-status-bar"

export default class Screen extends React.Component {
    render() {
        return (
            <View styles={styles.container}>
                <SafeAreaView styles={{flex: 1}}>
                    <TouchableOpacity style={{alignItems: "flex-end", margin: 16}} 
                    onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 nome="bars" size={24} color="#161924"/>
                    </TouchableOpacity>
                </SafeAreaView>
            <View styles={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={styles.text}>{this.props.name} Tela</Text>
                </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  "#FFF"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"

    }

})