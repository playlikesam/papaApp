import React, { useRef, useState } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { icons } from "@/constants";  // Import the icons that include the images

const { width } = Dimensions.get('window');

const data = [
    { id: '1', image: icons.csl1 },  // Reference the icons containing your images
    { id: '2', image: icons.csl2 },
    { id: '3', image: icons.csl3 },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList<any>>(null);

    const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any[] }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({
        viewAreaCoveragePercentThreshold: 50,
    }).current;

    const scrollToIndex = (index: number) => {
        flatListRef.current?.scrollToIndex({ index });
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                )}
                horizontal
                pagingEnabled
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            <View style={styles.tabContainer}>
                {data.map((_, index) => (
                    <TouchableOpacity key={index} onPress={() => scrollToIndex(index)}>
                        <View style={[styles.tab, currentIndex === index && styles.tabActive]} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    item: {
        width: width * 0.9,  // 90% of the screen width
        height: 200,         // Fixed height for uniformity
        justifyContent: 'center', // Center the content
        alignItems: 'center',     // Center the content
    },
    image: {
        width: width * 0.9,  // 90% of the screen width
        height: 200,         // Fixed height for uniformity
        resizeMode: 'cover', // Ensures the image covers the space and crops the excess
        borderRadius: 20,     // Rounded corners for aesthetics
        left: 15,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    tab: {
        width: 30,
        height: 3,
        borderRadius: 5,
        backgroundColor: '#ACA7A6',
        marginHorizontal: 5,
    },
    tabActive: {
        backgroundColor: '#FF3131',  // Active tab indicator color
    },
});

export default Carousel;