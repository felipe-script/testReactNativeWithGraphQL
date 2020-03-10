import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GET_TODOS = gql`
{rates(currency: "USD") {
  currency
  rate
}}
`

const TelaTest = () => {
  const [coins, setCoins] = useState([])
  const { data, loading, error } = useQuery(GET_TODOS)
  const debugList = [
    {
      rate: 50.00
    },
    {
      rate: 60.00
    }
  ]
  useEffect(() => {
    if(data !== undefined){
      console.log(data.rates)
      setCoins(data.rates)
    }
  }, [data])
  /* setTimeout(() => {
     console.log('data', data)
   }, 5000)*/
  if (loading) {
    return <Text>Carregando Lista ...</Text>
  }
  if (error) {
    return <Text>Error! :[</Text>
  }
  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <FlatList
        data={coins}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>(
          <Text style={{
            padding: 10,
            fontSize: 18,
            height: 44,
            color: '#000'
          }}>{item.currency} - {item.rate}</Text>)
        }
      />
    </View>
  )

}
export default TelaTest