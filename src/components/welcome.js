import React from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet, Text, View, Button } from 'react-native';

class Wecome extends React.Component {
  render() {
    return (
        <View style={styles.container} >
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

export default Wecome
