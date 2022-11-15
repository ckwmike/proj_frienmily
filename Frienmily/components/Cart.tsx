import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CartItem from "./CartItem";

export default function Cart() {
    const styles = StyleSheet.create({
        addMoreText: {
            fontSize: 15,
            padding: 5,
            color: '#47b4b1',
        },

        totalText: {
            fontSize: 15,
            textAlign: 'right',
            padding: 20,
        },

        buttonText: {
            fontSize: 20,
            fontWeight: '300',
            color: 'white',
            
        },
        
        assignGroupButton: {
            backgroundColor: '#47b4b1',
            height: 40,
            width: 400,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            borderRadius: 15,
            marginLeft:'auto',
            marginRight:'auto',
            color: 'white',
        },
    })
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{alignItems: "center"}}>
                <Text style={{fontSize: 25, paddingBottom: "1%"}}>Cart</Text> 
            </View>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                <Text><CartItem /></Text>
                
            </ScrollView>
            <View >
                <View>
                    <TouchableOpacity
                        style={styles.addMoreText}
                        onPress={() => {
                            navigation.navigate('Groceries' as never)
                        }}>
                        <Text style={styles.addMoreText}>+ Add more items</Text>
                    </TouchableOpacity>
                </View>
                <View><Text style={styles.totalText}>Estimate Total: HKD$ 800</Text></View>
                <View><TouchableOpacity
                    style={styles.assignGroupButton}
                        onPress={() => {
                        navigation.navigate('Groups' as never)
                    }}>
                    <Text style={styles.buttonText}>Assign Group</Text>
                </TouchableOpacity></View>
            </View>
            
        </SafeAreaView>
    )
}