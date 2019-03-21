import React, { Component } from 'react';
import {View, Text, Button, ActivityIndicator} from "react-native"
import style from '../Style'

class AcquireGps extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.isAcquiringGpsSignal) {
            return (
                <View style={style.container}>
                    <Text>CPG: X {this.props.positionX} Y {this.props.positionY}</Text>
                    <Button title="Acquérir position" onPress={()=>this.props.onAcquire()}/>
                    <ActivityIndicator size="small"/>
                </View>
            );

        } else{
            return (
                <View style={style.container}>
                    <Text>CPG: X {this.props.positionX} Y {this.props.positionY}</Text>
                    <Button title="Acquérir position" onPress={()=>this.props.onAcquire()}/>
                </View>
            );
        }
    }
}

export default AcquireGps;