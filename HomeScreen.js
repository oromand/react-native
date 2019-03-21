import React  from "react"
import {View, Text, TextInput, SafeAreaView, ScrollView, Button, FlatList} from "react-native"
import { createStackNavigator } from "react-navigation";
import Icon, {Ionicons} from 'react-native-vector-icons/Ionicons';
import HeaderButtons, { Item } from 'react-navigation-header-buttons';
import IoniconsHeaderButton from "./components/IconHeaderButton"

import style from "./Style"
import ResultScreen from "./ResultScreen"
import NewItemScreen from "./NewItemScreen"

class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return{
            title: "Rechercher",
            headerRight: (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Nouveau" iconName="ios-search" onPress={navigation.getParam("addItem")} />
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

      renderItem({item}) {
          return <Text style={style.text} key={item.id}>{item.label}</Text>
      }

      render() {
        return (
            <View style={style.container}>
                <FlatList data={[
                    {id: "1", label: "1"},
                    {id: "2", label: "2"},
                    {id: "3", label: "3"},
            ]} renderItem={(item) => this.renderItem(item)} 
            keyExtractor={(item) => item.id}
            >

                </FlatList>
            </View>
        );
      }
  }

export default createStackNavigator(
{
    Home: HomeScreen,
    NewItem: NewItemScreen, 
}
);
  