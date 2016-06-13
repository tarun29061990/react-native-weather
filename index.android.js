import React from 'react';
import {
  AppRegistry,
  MapView,
  View,
  Text,
  StyleSheet
} from 'react-native';

var Weather = React.createClass({
  render: function(){
    return <MapView style={styles.map} ></MapView>
  }

});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);