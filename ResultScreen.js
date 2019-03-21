import React, { Component } from 'react';
import {SafeAreaView, Text, StatusBar} from "react-native"
import style from "./Style"

class ResultScreen extends Component {
    
    static navigationOptions = {
        title: 'Résultats',
      };

    constructor(props) {
        super(props)
        this.state = {
            city: this.props.navigation.getParam("city")
        }
    }

    componentDidMount() {

    }
    
    render() {

        // const ds = ListView.DataSource.
        return (
            <SafeAreaView style={style.container}>
                <Text>This is the result page {this.state.city}</Text>
                {/* <ListView dataSource={ds.DataSource.} */}
            </SafeAreaView>
        );
    }
}

export default ResultScreen;