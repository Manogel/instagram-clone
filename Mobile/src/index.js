import React from 'react';
import {YellowBox} from 'react-native'
import '~/config/ReactotronConfig';
import Routes from '~/routes';
 YellowBox.ignoreWarnings([
   'Warning', "Unrecognized"
 ])

const App = () => <Routes />;

export default App;
