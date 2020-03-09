/**
 * @format
 */
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { AppRegistry } from 'react-native'
import App from './App';
import { name as appName } from './app.json'
import { useQuery } from '@apollo/react-hooks'

AppRegistry.registerComponent(appName, () => App);
