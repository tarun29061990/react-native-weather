import React from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';

var Api = require('./src/api');

var Weather = React.createClass({
  getInitialState:function(){
    return{
      pin: {
        latitude:0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    }
  },
  render: function(){

    return <View style={styles.container}>
      <MapView 
      onRegionChangeComplete={this.onRegionChangeComplete}
      style={styles.map} >
         <MapView.Marker coordinate={this.state.pin} />
      </MapView>

      <View style={styles.textWrapper}>
        <Text style={styles.text}>{this.state.city}</Text>
        <Text style={styles.text}>{this.state.temperature}</Text>
        <Text style={styles.text}>{this.state.description}</Text>

      </View>
    </View>
  },

  onRegionChangeComplete: function(region){
    this.setState({
      pin:{
        longitude: region.longitude,
        latitude: region.latitude
      }
    });

    Api(region.latitude,region.longitude)
      .then((data) => {
        console.log(data);
        this.setState({
          city: data.city,
          temperature: data.temperature,
          description: data.description 
        });
      });
  }

});

var styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 2,
    marginTop: 30
  },
  textWrapper:{
    flex:1,
    alignItems: 'center'
  },
  text:{
    fontSize: 30
  }
});

AppRegistry.registerComponent('weather', () => Weather);