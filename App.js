import React from 'react';
import ApolloClient, { from } from 'apollo-boost'
import TelaTest from './components/TelaTest'
import { ApolloProvider } from '@apollo/react-hooks'
import { gql } from '@apollo/client'

import {
  View,
  Text,
  StatusBar,
} from 'react-native'
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io/'
})
client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result))
/*const App = () => {
  const { loading, error, data } = useQuery(GET_TODOS)
  if (loading) return 'Loading...'
  if (error) return `Error ${error.message}`*/
  
const App = () => {
  return (
    <Text>teste</Text>
    /*<ApolloProvider client={client}>
      <TelaTest />
    </ApolloProvider>*/
  )
}

export default App
