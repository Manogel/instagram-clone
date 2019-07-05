import { createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import Feed from '~/pages/Feed';
import Post from '~/pages/Post';
import logo from './assets/logo.png';

const stackNavigator = createStackNavigator(
  {
    Feed,
    Post,
  },
  {
    initialRouteName: Post,
    defaultNavigationOptions: {
      headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
      headerBackTitle: null,
      headerTintColor: '#000',
    },
    mode: 'modal',
  },
);

export default createAppContainer(stackNavigator);
