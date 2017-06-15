import React from 'react';
import { View, StyleSheet, TextInput, AppRegistry, Image, Text, TouchableOpacity, Dimensions} from 'react-native';
// require('./img/favicon.png')

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.addCategory = this.addCategory.bind(this);
  }

  addCategory() {
    this.props.addCategory(this.props.category.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.image}>
            <Text>Imagen de Pedro</Text>
            <Image source={'http://clipartwork.com/wp-content/uploads/2017/01/pizza-clipart-download.png'} />
          </View>
          <View>
            <Text>Pedro</Text>
            <Text>Numero de promocinoes que ha cazado</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text>Contenido dle body</Text>
          <View style={styles.categoryLabelContainer}>
            <Text style={styles.categoryLabel}>PastaBurguesivoro</Text>
          </View>
          <View style={styles.userData}>
            <Text>crear tabla con la informacino de las categorias del usuario dinamicamente</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EAEE'
  }, header: {
    backgroundColor: '#D23540',
    flexDirection: 'row',
    height: 130
  }, body: {
    flex: 1
  }, userData: {
    borderRadius: 4,
  }, categoryLabelContainer: {
    height: 80,
    backgroundColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
  }, categoryLabel: {
    fontSize: 40
  }
});

AppRegistry.registerComponent('UserProfile', () => UserProfile);
