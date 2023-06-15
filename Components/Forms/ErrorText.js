import { View, Text } from 'react-native'
import React from 'react'


import colors from '../../Config/colors'

const ErrorText = ({error, visible}) => {
    if(!error || !visible) return null
  return (
    <View>
       <Text style={{color: colors.danger, fontSize:13}}>{error}</Text>
    </View>
  )
}

export default ErrorText