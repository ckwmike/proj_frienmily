import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function CreateGroup() {

    

    const [groupName, setGroupName] = React.useState("");
    const [groupType, setGroupType] = React.useState(null);
    const [isFriendsButtonSelected, setIsFriendsButtonSelected] = React.useState(false);
    const [isFamilyButtonSelected, setIsFamilyButtonSelected] = React.useState(false);

    const navigation = useNavigation();

    const submitButton = () => {
        console.log(groupName)
        console.log(groupType)
        if (groupType == null) {
            showAlert()
        } else if (groupName == "") {
            showAlert1()
        } else {
            navigation.navigate('Groups')
        }

    }
    const friendsButton = () => {
        setGroupType("friend")
        setIsFriendsButtonSelected(true)
        if (isFamilyButtonSelected == true) {
            setIsFamilyButtonSelected(false)
        }
    }
    const familyButton = () => {
        setGroupType("family")
        setIsFamilyButtonSelected(true)
        if (isFriendsButtonSelected == true) {
            setIsFriendsButtonSelected(false)
        }
    }


    const showAlert = () => {
        Alert.alert(
            'Please select a group type',
            '',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
        );
    }
    const showAlert1 = () => {
        Alert.alert(
            'Please enter a group name',
            '',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
        );
    }

const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            minWidth: 300,
            maxWidth: 300,
            borderRadius: 10
        },
        createButton: {
            margin: 5,
            fontSize: 20,
            backgroundColor: "#907651",
            width: 70,
            height: 70,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
        },
        groupTypeButtonContainer: {
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            padding: "8%",
            paddingTop: 20,
            paddingBottom: 22,
        },
        friendButton: {
            margin: 5,
            fontSize: 20,
            backgroundColor: "#907651",
            borderColor: isFriendsButtonSelected? "black" : "",
            borderWidth: isFriendsButtonSelected? 3 : 0,
            width: 160,
            height: 100,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        familyButton: {
            margin: 5,
            fontSize: 20,
            backgroundColor: "#907651",
            borderColor: isFamilyButtonSelected? "black" : "",
            borderWidth: isFamilyButtonSelected? 3 : 0,
            width: 160,
            height: 100,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },   
        buttonFontSize: {
            fontSize: 25,
        }     
    });

    return (
        <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: "#F4E9DF", flex: 1}}>
            <Text>1. Enter a group name:</Text>
            <TextInput placeholder="New Group Name" value={groupName} onChangeText={setGroupName} style={styles.input} />
            <Text>2. Select a group type:</Text>
            <View style={styles.groupTypeButtonContainer}>
                <TouchableOpacity style={styles.friendButton} onPress={friendsButton}>
                    <Text style={styles.buttonFontSize}>Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.familyButton} onPress={familyButton}>
                    <Text style={styles.buttonFontSize}>Family</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.createButton} onPress={submitButton}>
                <Text>Create Group</Text>
            </TouchableOpacity>

        </View >
    )
}