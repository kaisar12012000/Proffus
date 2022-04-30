import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const images = [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree",
]

export default function Carasoul ({ item, index }, parallaxProps) {
    return (
        <View style={styles.carousel}>
            <View>
            <SliderBox images={images} autoplay={true} circleLoop={true} resizeMode="cover" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  carousel : {
    marginVertical: 10,
  }
})