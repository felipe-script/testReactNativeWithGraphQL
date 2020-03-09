import React from 'react'
import { View, Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import { gql } from '@apollo/client'

const GET_TODOS = gql`
{rates(currency: "USD") {
  currency
  rate
}}
`

const TelaTest = () => {
//  const { loading, error, data } = useQuery(GET_TODOS)

   setTimeout(() => {
      console.log('error', error)
    }, 5000)

  if (loading) return <Text>Loading ...</Text>
   return <Text>{data.currency}</Text>
}
export default TelaTest