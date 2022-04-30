import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const windowWdith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header() {
    return(
        <View style={{...style.row}}>
            <Image source={require("../assets/header.png")} style={{ width: windowWdith/3, height: windowHeight/25, resizeMode: 'contain' }} />
            <FontAwesome name="bars" size={24} color="#333" />
        </View>
    )
}

const style = StyleSheet.create({
    row : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: windowWdith*0.025,
        paddingVertical: windowHeight/50,
        height: windowHeight/10,
        overflow: 'hidden',
        shadowColor: '#333',
        shadowRadius: 10,
        shadowOpacity: 1,
    }
})