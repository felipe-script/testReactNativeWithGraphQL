import React from 'react';
import ApolloClient from 'apollo-boost'
import TelaTest from './components/TelaTest'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
})
  
const App = () => {
  return (
    <ApolloProvider client={client}>
      <TelaTest />
    </ApolloProvider>
  )
}

export default App
