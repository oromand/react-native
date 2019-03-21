import React, { Component } from 'react';
import {View, Text, Button, NavigatorIOS} from "react-native"
import style from "./Style"
import { TextInput } from 'react-native-gesture-handler';

export default class NewItemScreen extends Component {

    static navigationOptions = {
        title: "Nouvelle intervention"
    }

    constructor(props) {
        super(props)
        this.state = {
            name: "", 
            location: "",
            comments: ""
        }
    }

    handleChangeText(text) {
        console.log(text)
    }

    handlePress() {
        Geolocation.getCurrentPosition((position) => {
            console.log(position)
        }, (error) => {
            console.log(error)
        }, 
        {
            timeout: 5000, 
            enableHighAccuracy: true,
        }
        );
    }

    render() {
        return (
            <View style={style.container}>
                <Text>Nom de la bouche</Text>
                <TextInput style={style.input} value={this.state.name} placeholder="Saisir nom" onChangeText={(text) => this.setState({name: text})} />
                <Text>Commentaires</Text>
                <TextInput style={style.inputMultiLines} multiline={true} value={this.state.comments} placeholder="Commentaires" onChangeText={(text) => this.setState({comments: text})} />
                <View style={{flex: 1, flexDirection="row"}}>
                    <Text>CPG: X .. Y ..</Text>
                    <Button title="Acquérir position" onPress={()=>this.handlePress()}/>
                </View>
            </View>
        );
    }
}
