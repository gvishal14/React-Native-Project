/**
 * @format
 */
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';

import App from './src/App';
import TabNavigator from './src/Navigations/Tab';
import Stacks from './src/Navigations/Stack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => TabNavigator);
