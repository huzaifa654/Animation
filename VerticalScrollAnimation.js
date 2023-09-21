import { StyleSheet, FlatList, View, Image, Text, StatusBar, Animated, ImageBackground } from 'react-native'
import React, { useRef } from 'react'
import { faker } from '@faker-js/faker'

export default function VerticalScrollAnimation() {
    const Data = [
        {
            id: 1,
            avatar: "https://byuc.files.wordpress.com/2012/07/avat-2.jpg",
            name: "Jhon",
        },
        {
            id: 2,
            avatar: "https://i.pinimg.com/1200x/41/9c/7d/419c7d36a42168e580488bec67306eeb.jpg",
            name: "shon",
        },
        {
            id: 3,
            avatar: "https://i.pinimg.com/564x/ac/15/6a/ac156a9fc69d0c54c96a9e27c29fd1ad.jpg",
            name: "Ali",
        },
        {
            id: 5,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRK1929KJehZFLZfwiIQtwVGjF8K-fAtH17ONKe8P1S_o2AOcd1SsCHH0oYwEgS8iS2s&usqp=CAU",
            name: "Furqan",
        },
        {
            id: 6,
            avatar: "https://b2005377.smushcdn.com/2005377/wp-content/uploads/2021/09/myAvatar.png?lossy=1&strip=1&webp=1",
            name: "Jenny",
        },
        {
            id: 7,
            avatar: "https://i.pinimg.com/1200x/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.jpg",
            name: "korr",
        },
        {
            id: 8,
            avatar: "https://felizes.pt/Photos/svgA4407903907876045_fullsize.jpg",
            name: "Kinn",
        },
        {
            id: 9,
            avatar: "https://img.freepik.com/premium-vector/girl-s-face-with-beautiful-smile-female-avatar-website-social-network_499739-527.jpg?w=2000",
            name: "Zeennn",
        },
        {
            id: 10,
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
            name: "Shoib",
        },

    ]
    const SPACING = 20;
    const AVATAR_SIZE = 70;
    const scrollY = useRef(new Animated.Value(0)).current;
    const ITEM_SIZE = AVATAR_SIZE + SPACING * 3
    return (
        <ImageBackground style={styles.container} source={{uri:"https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"}} resizeMode='cover'>
            <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"}   />
            <Animated.FlatList
                data={Data}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                keyExtractor={(item) => item?.id}
                contentContainerStyle={{ padding: SPACING, paddingTop: StatusBar.currentHeight || 42 }}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 2)
                    ]
                    const OpacityinputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 1)
                    ]
                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    })
                    const opacity = scrollY.interpolate({
                        inputRange: OpacityinputRange,
                        outputRange: [1, 1, 1, 0]
                    })
                    return (
                        <Animated.View style={{
                            flexDirection: "row", padding: 20, backgroundColor: 'white', borderRadius: 12, marginBottom: 20,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 4.65,
                            elevation: 8,
                            opacity,
                            transform: [{ scale }]
                        }}>
                            <Image source={{ uri: item?.avatar }} style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE }} />
                            <View style={{ marginLeft: SPACING / 2 }}>
                                <Text style={{ fontSize: 22, fontWeight: "bold", color: "black" }}>{item?.name}</Text>
                                <Text style={{ fontSize: 18, opacity: .7 }}>{item?.name}@gmail.com</Text>
                            </View>
                        </Animated.View>

                    )
                }}
            />

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    // item:(scale)=>({
    //     flexDirection: "row", padding: 20, backgroundColor: 'white', borderRadius: 12, marginBottom: 20,
    //     shadowColor: '#000',
    //     shadowOffset: {
    //         width: 0,
    //         height: 4,
    //     },
    //     shadowOpacity: 0.3,
    //     shadowRadius: 4.65,
    //     elevation: 8,
    //     transform:scale

    // })
})