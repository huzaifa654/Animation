import { StyleSheet, Dimensions, FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { MotiView } from '@motify/components';
const { width, height } = Dimensions.get('screen');
const data = [
    {
        name: "Hammerhead shark	",
        id: 1
    },
    {
        name: "Hippopotamus",
        id: 2
    },
    {
        name: "Hammerhead shark	",
        id: 3
    },
    {
        name: "Giant Panda",
        id: 4
    },
    {
        name: "Chimpanzee",
        id: 5
    },
    {
        name: "King Cobra",
        id: 6
    },
]
const _colors = {
    active: `#FCD259ff`,
    inactive: `#FCD25900`,
};
const _spacing = 10;
export default function ScrollAnimation() {
    const ref = useRef(null)
    const [index, setIndex] = useState(0)
    const [viewPosition, setViewPosition] = useState(0)

    useEffect(() => {
        ref?.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition,
            viewOffset: viewPosition == 0.5 || viewPosition == 1 ? 0 : _spacing
        })

    }, [index, viewPosition])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <FlatList
                style={{ flexGrow: 0 }}
                ref={ref}
                initialScrollIndex={index}
                data={data}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingLeft: _spacing }}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item, index: fIndex }) => {
                    return (
                        <TouchableOpacity onPress={() => { setIndex(fIndex) }}>

                            <MotiView
                                style={{
                                    marginRight: _spacing,
                                    padding: _spacing,
                                    borderWidth: 2,
                                    borderColor: _colors.active,
                                    borderRadius: 12,
                                    backgroundColor: fIndex == index ? _colors?.active : _colors.inactive,
                                }}>
                                <Text style={{ color: '#36303F', fontWeight: '700' }}>
                                    {item?.name}
                                </Text>
                            </MotiView>
                        </TouchableOpacity>
                    );
                }}
            />
            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: _spacing * 10,
                }}>
                <View style={{ alignItems: 'center' }}>
                    <Text
                        style={{
                            color: '#36303F',
                            fontWeight: '700',
                            marginBottom: _spacing,
                        }}>
                        Scroll position
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: width / 2,
                            justifyContent: 'center',
                        }}>
                        <TouchableOpacity onPress={() => { setViewPosition(0) }}>
                            <View
                                style={{
                                    padding: _spacing,
                                    backgroundColor: '#FCD259',
                                    borderRadius: _spacing,
                                    marginRight: _spacing,
                                }}>
                                {/* <Entypo name='align-left' size={24} color='#36303F' /> */}
                                <Image source={require("./src/back.png")} style={{ width: 24, height: 24 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setViewPosition(0.5) }}>
                            <View
                                style={{
                                    padding: _spacing,
                                    backgroundColor: '#FCD259',
                                    borderRadius: _spacing,
                                    marginRight: _spacing,
                                }}>

                                <Image source={require("./src/vertical-align.png")} style={{ width: 24, height: 24 }} />

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setViewPosition(1) }}>
                            <View
                                style={{
                                    padding: _spacing,
                                    backgroundColor: '#FCD259',
                                    borderRadius: _spacing,
                                }}>
                                <Image source={require("./src/next.png")} style={{ width: 24, height: 24 }} />

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text
                        style={{ color: '#36303F', fontWeight: '700', marginBottom: 10 }}>
                        Navigation
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: width / 2,
                            justifyContent: 'center',
                        }}>
                        <TouchableOpacity onPress={() => {
                            if (index == 0) {

                            } else {
                                setIndex(index - 1)
                            }
                        }}>
                            <View
                                style={{
                                    padding: _spacing,
                                    backgroundColor: '#FCD259',
                                    borderRadius: _spacing,
                                    marginRight: _spacing,
                                }}>
                                {/* <Feather name='arrow-left' size={24} color='#36303F' /> */}
                                <Image source={require("./src/back.png")} style={{ width: 24, height: 24 }} />

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            if (index == data?.length - 1) {

                            } else {
                                setIndex(index + 1)
                            }
                        }}>
                            <View
                                style={{
                                    padding: _spacing,
                                    backgroundColor: '#FCD259',
                                    borderRadius: _spacing,
                                }}>
                                {/* <Feather name='arrow-right' size={24} color='#36303F' /> */}
                                <Image source={require("./src/next.png")} style={{ width: 24, height: 24 }} />

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})