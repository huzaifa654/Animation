import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScrollAnimation from './ScrollAnimation'
import ImagesAniamtion from './ImagesAniamtion'

export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <ScrollAnimation/> */}
      <ImagesAniamtion/>
    </View>
  )
}

const styles = StyleSheet.create({})