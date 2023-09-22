import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScrollAnimation from './ScrollAnimation'
import ImagesAniamtion from './ImagesAniamtion'
import VerticalScrollAnimation from './VerticalScrollAnimation'
import CarouselAnimation from './CarouselAnimation'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <ScrollAnimation/> */}
      {/* <ImagesAniamtion /> */}
      {/* <VerticalScrollAnimation/> */}
      <CarouselAnimation/>
    </View>
  )
}

const styles = StyleSheet.create({})