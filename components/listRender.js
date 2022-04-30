import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Carasoul from './carasoul';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ListRender() {
    const [data, setdata] = useState([]);

    const getData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(responseData => {
                    setdata(responseData)
                })
    }

    useEffect(() => {
      getData()
    }, [])
    

    return (
        <FlatList
         data={data}
         ListHeaderComponent={() => (
             <>
                 <View style = {{
                        marginHorizontal: windowWidth*0.05,
                        marginBottom: 10
                      }}>
                        <Text style={{
                          color: "#0b6174",
                          fontSize: 32,
                          fontWeight: 'bold'
                        }}>Hello there,</Text>
                        <Text style={{
                          color: "#0b6174",
                          fontSize: 22,
                        }}>How can we serve you today...</Text>
                </View>
                <Carasoul />
                <View style={{ marginHorizontal: windowWidth*0.025, marginVertical: 10, flexDirection : 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: "#0b6174", width: windowWidth/5, height: windowHeight/10 }}>
                        <AntDesign name="bars" size={24} color="#fff" />
                        <Text style={{ color: '#fff', textAlign: 'center' }}>My Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: "#0b6174", width: windowWidth/5, height: windowHeight/10 }}>
                        <MaterialCommunityIcons name="map-marker-path" size={24} color="#fff" />
                        <Text style={{ color: '#fff', textAlign: 'center' }}>track Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: "#0b6174", width: windowWidth/5, height: windowHeight/10 }}>
                        <AntDesign name="star" size={24} color="#fff" />
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Offers</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: windowWidth*0.025, marginVertical: 10, flexDirection : 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: "#0b6174", width: windowWidth/5, height: windowHeight/10 }}>
                        <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: "#0b6174", width: windowWidth/5, height: windowHeight/10 }}>
                        <Ionicons name="person-add-outline" size={24} color="#fff" />
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Refer a patient</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: "#0b6174", width: windowWidth/5, height: windowHeight/10 }}>
                        <AntDesign name="creditcard" size={24} color="#fff" />
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Make Payment</Text>
                    </TouchableOpacity>
                </View>
             </>
         )}
         showsVerticalScrollIndicator={false}
         renderItem = {({ item }) => (
            <View style={styles.card}>
                <Text>Id: {item.id}</Text>
                <Text>Title: {item.title}</Text>
                <Text>Body: {item.body}</Text>
            </View>
         )}
        />
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: windowWidth*0.025,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: windowWidth*0.025
    }
})