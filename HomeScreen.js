import React  from "react"
import {View, Text, TextInput, SafeAreaView, ScrollView, Button} from "react-native"
import { createStackNavigator } from "react-navigation";
import Icon, {Ionicons} from 'react-native-vector-icons/Ionicons';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';

import style from "./Style"
import ResultScreen from "./ResultScreen"
import NewItemScreen from "./NewItemScreen"

const IoniconsHeaderButton = passMeFurther => (
    // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
    // and it is important to pass those props to `HeaderButton`
    // then you may add some information like icon size or color (if you use icons)
    <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="blue" />
  );

class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return{
            title: "Rechercher",
            headerRight: (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="search" iconName="ios-search" onPress={navigation.getParam("addItem")} />
                </HeaderButtons>
            ),
        }
    };

    constructor(props) {
        super(props)
        this.state = {
            city: ""
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({addItem: this._addItem})
    }

    _addItem = () => {
        this.props.navigation.navigate("NewItem")
    }
    
      //
      searchCities() {
        this.state.city && this.props.navigation.navigate("Result", {city: this.state.city})
      }

      render() {
    
        return (
            <View style={style.container}>
                <TextInput 
                    style={style.input} 
                    placeholder="Saisir la ville" 
                    value={this.state.city}
                    keyboardType="web-search" 
                    onChangeText={(text) => this.setState({city: text})}/>
                <Button title="Rechercher" onPress={() => this.searchCities()}/>
                <Text>{this.state.city}</Text>
            </View>
        );
      }
  }

export default createStackNavigator(
{
    NewItem: NewItemScreen, 
    Home: HomeScreen,
}
);
  