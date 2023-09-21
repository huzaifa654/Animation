import { StyleSheet, Text, View, StatusBar, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'

export default function ImagesAniamtion() {
    const { width, height } = Dimensions.get('screen');
    const IMAGE_SIZE = 80
    const SPACING = 12

    const images = [
        {
            id: 1,
            uri: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        },
        {
            id: 2,
            uri: "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"

        },
        {
            id: 3,
            uri: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1874&q=80"

        },
        {
            id: 4,
            uri: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80"

        },
        {
            id: 5,
            uri: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        },
        {
            id: 6,
            uri: "https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        },
        {
            id: 7,
            uri: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        }
    ]
    const topRef = useRef()
    const thumbRef = useRef()
    const [activeIndex, setActiveIndex] = useState(0)
    const scrollToActiveIndex = (index) => {
        setActiveIndex(index)
        topRef?.current?.scrollToOffset({
            offset: index * width,
            animated: true
        })
        if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
            thumbRef?.current?.scrollToOffset({
                offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
                animated: true
            })
        } else {
            thumbRef?.current?.scrollToOffset({
                offset: 0,
                animated: true,
                viewPosition:0.5
            })
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <FlatList
                data={images}
                ref={topRef}
                keyExtractor={item => item?.id}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(e) => {
                    scrollToActiveIndex(Math.floor(e.nativeEvent.contentOffset.x / width))
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width, height }}>
                            <Image source={{ uri: item?.uri }} style={{ width: "100%", height: "100%" }} />
                        </View>

                    )
                }}
            />
            <FlatList
                data={images}
                ref={thumbRef}
                keyExtractor={item => item?.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ position: "absolute", bottom: 40 }}
                contentContainerStyle={{ paddingHorizontal: SPACING }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
                            <Image source={{ uri: item?.uri }} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 12, marginRight: SPACING, borderWidth: activeIndex == index ? 2 : 0, borderColor: "white" }} />
                        </TouchableOpacity>

                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    }
})