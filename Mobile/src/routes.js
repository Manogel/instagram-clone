import { createAppContainer, createStackNavigator, NavigationAction } from 'react-navigation';
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

import Feed from '~/pages/Feed';
import Post from '~/pages/Post';
import camera from '~/assets/camera.png'
import logo from './assets/logo.png'



const stackNavigator = createStackNavigator({
  Feed,
  Post,
},{
  defaultNavigationOptions :{
    headerTitle: <Image style={{marginHorizontal: 20}} source = {logo} />,
    headerBackTitle: null,
    headerTintColor: '#000',
  },
  mode: 'modal'
})

export default createAppContainer(
  stackNavigator
);


/* Feed.navigationOptions = ({ navigation }) => ({
    headerRight: (
    <TouchableOpacity onPress={ () => {navigation.navigate('Post')}}>
      <Image style={{marginHorizontal: 20}} source = {camera} />
    </TouchableOpacity>)
}); */