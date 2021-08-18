import React from "react"
import { View,Text,StyleSheet,TouchableOpacity } from "react-native"

export default ({name,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:20
    }
})