import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icons from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import {screen} from '../../../navigator/screenNames'


const Header = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        {/* <Image source={Icons.Logo} style={{}}/> */}
        <Text style={styles.titleLogo}>
            6ThStreet
        </Text>
    <View style={styles.cartContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate(screen.Fav)}>
      <Image source={Icons.bookmark} style={styles.favImg}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate(screen.Cart)}>
      <Image source={Icons.shopingcart} style={styles.cartImg}/>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#A34444',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
    },
    titleLogo:{
        color:'white',
        fontSize:26,
        fontWeight:'600'
    },
    cartContainer:{
        flexDirection:'row'
    },
    favImg:{
        height:40,
        width:40,
        backgroundColor:'white',
        padding:8,
        borderRadius:10,

    },
    cartImg:{
        height:40,
        width:40,
        marginLeft:10,
        backgroundColor:'white',
        padding:8,
        borderRadius:10
    }
})