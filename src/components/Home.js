import React from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet, Text, View, Button } from 'react-native';

import Wecome from './welcome';

class Home extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          {/* <Header
            leftComponent={{ icon: 'menu', style: { color: 'black'} }}
            centerComponent={{ text: 'Coffee-Coffee!!!', style: { color: 'black' } }}
            rightComponent={{ icon: 'home', style: { color: 'black' } }}
          /> */}
          {/* <Wecome/> */}
          <Text>Wecome to Coffee Conqueror</Text>
          <Button title='Go To Map Page'
          onPress={
            ()=> this.props.navigation.navigate('MapPage')
          }
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Home
