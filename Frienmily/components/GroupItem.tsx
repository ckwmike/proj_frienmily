import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Pressable } from "react-native";
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function GroupItem() {
    const styles = StyleSheet.create({
        text: {
            fontSize: 15,
        },
        container: {
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            padding: 10,
            paddingTop: 32,
            paddingBottom: 32,
            backgroundColor: "#E2D8CF",
            //SHADOW
            shadowOpacity: 0.8,
            shadowRadius: 3,
            shadowOffset: {
                height: 1,
                width: 1
            }
        },
    })

    const logPress = (pressType: string) => {
        console.log(pressType)
    }
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <FontAwesome name='users' size={30}/>
            <View ><Text style={styles.text}>GROUP NAME</Text></View>
            <View><Text style={styles.text}>settled up</Text></View>
            <Pressable onPress={()=> navigation.navigate('ShoppingList' as never)}> 
            {/* Dummy nav to Groceries first, going to change navigation to 'Group Detail' - Ronson 13Nov2022 17:48 */}
            <FontAwesome name='angle-right' size={30}/>
            </Pressable>
        </View>
    )
}