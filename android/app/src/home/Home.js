import React from 'react';
import { View, StyleSheet, TextInput, AppRegistry, Image, Text } from 'react-native';

export default class Home extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Text>
          ICONO
        </Text>
        <TextInput style={styles.searchBar}/>
      </View>
      <View style={styles.homeBodyContainer}>
        <Text>homeBodyContainer</Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
  },searchBarContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#B2230A',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#C2827A',
    borderRadius: 15,
  }
});

AppRegistry.registerComponent('Home', () => Home);