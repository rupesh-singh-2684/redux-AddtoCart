import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { addCart, addFavourite, getProductsAction, removeFavourite } from '../../redux/itemsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../assets/icons';
import Header from './header';

const ItemCard = ({ item }:any) => {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleToggleFav = () => {
    if(!isFav){
    setIsFav(!isFav);
    dispatch(addFavourite(item))}
    else{
      setIsFav(!isFav);
    dispatch(removeFavourite(item.id))}
  }

  const handleCart = () => {
    dispatch(addCart(item))
  }
  return (
    <View style={styles.cardContainer}>
      <View style={styles.favImgDiv}>
        <TouchableOpacity onPress={handleToggleFav}>
          <Image source={isFav ? Icons.favorite : Icons.favourite}
            style={styles.favImg} />
        </ TouchableOpacity>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.rating}>
          Rating: {item.rating.rate} ★ ({item.rating.count} reviews)
        </Text>
        <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity
          onPress={handleCart}
          style={styles.button}>
          <Text style={styles.buttonText} >ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.Config);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ItemCard item={item} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingHorizontal: 10,
    paddingVertical: 20,

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
});
