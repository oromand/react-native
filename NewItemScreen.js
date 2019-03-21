import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import HeaderButtons, { Item } from 'react-navigation-header-buttons';

import AcquireGps from "./components/AcquireGps"
import IoniconsHeaderButton from "./components/IconHeaderButton"

import ImagePicker from 'react-native-image-crop-picker';

import style from "./Style"


  

export default class NewItemScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return{
            title: "Nouveau",
            headerRight: (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Sauver" iconName="ios-search" onPress={navigation.getParam("handleSave")} />
                </HeaderButtons>
            ),
        }
    };
    constructor(props) {
        super(props)
        this.state = {
            name: "", 
            positionX: "",
            positionY: "",
            isAcquiringGpsSignal: false,
            comments: ""
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({handleSave: this._handleSave})
    }

    _handleSave = () => {
        this.props.navigation.goBack()
    }

    handleChangeText(text) {
        console.log(text)
    }

    handlePress() {
        this.setState({isAcquiringGpsSignal: true});
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            
            this.setState({
                positionX: position.coords.latitude.toFixed(2),
                positionY: Math.round(position.coords.longitude.toFixed(2)) 
            })

            this.setState({isAcquiringGpsSignal: false});

        }, (error) => {
            console.log(error)
            this.setState({isAcquiringGpsSignal: false});
        }, 
        {
            // timeout: 5000, 
            enableHighAccuracy: true,
        }
        );
    }

    selectPhotoTapped() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
      }
    
    

    render() {
        return (
            <View style={style.container}>
                <Text>Nom de la bouche</Text>
                <TextInput style={style.input} value={this.state.name} placeholder="Saisir nom" onChangeText={(text) => this.setState({name: text})} />
                <Text>Commentaires</Text>
                <TextInput style={style.inputMultiLines} multiline={true} value={this.state.comments} placeholder="Commentaires" onChangeText={(text) => this.setState({comments: text})} />
                <AcquireGps {...this.state} onAcquire={() => this.handlePress()}/>
                
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
                </View>

            </View>
        );
    }
}

