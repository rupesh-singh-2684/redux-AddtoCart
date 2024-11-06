import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../assets/icons';
import { addFavourite } from '../../redux/itemsSlice';
import Header from '../home/header';
import { useNavigation } from '@react-navigation/native';


const ItemCard = ({item}:any) => {

  return (
   
    <View style={styles.cardContainer}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.rating}>
        Rating: {item.rating.rate} ★ ({item.rating.count} reviews)
      </Text>
      <Text style={styles.description} numberOfLines={1}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
      {/* <TouchableOpacity
        onPress={() => {
          // dispatch(bookAdded(item));
          // dispatch(bookUpdated(item));
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity> */}
    </View>
  </View>
  );
};

const CartList = () => {
//   const dispatch = useDispatch();
  const {cart} = useSelector(state => state.Config);
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
        {/* <Header/> */}
        <View style={styles.containerHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={Icons.Back}
                style={styles.backImg}/>
            </TouchableOpacity>
        </View>
      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ItemCard item={item} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imageLike:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginEnd:20,
    marginTop:20,
  },
  topImages:{
    width:40,
    height:40,
    marginHorizontal:7,
  },
  imageSize:{
    width:24,
    height:24,
    margin:5,
  },
  topContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:13,
    paddingVertical:7,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  favImgDiv: {
    height:'10%',
    // backgroundColor:'red',
    width:'5%',
    flexDirection: 'row',



  },
  favImg: {
    height: 20,
    width: 20,
    margin: 10
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: 'row',
    width: '100%',
    height: 'auto'
  },
  image: {
    width: '25%',
    height: "95%",
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  textContainer: {
    padding: 15,
    width: '60%',
    marginHorizontal: 10,
    height: '50%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DFB300',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#F6ECEC',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: '#A34444',
    borderWidth: 0.5
  },
  buttonText: {
    color: '#A34444',
    fontSize: 16,
    fontWeight: '800',
  },
  containerHeader:{
    backgroundColor:'#A34444',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
},
backImg:{
    height:25,
    width:25
}
});