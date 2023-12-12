import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import food from '../utilitis/foods.json';

export default function FavDishes() {
  const foods = food.foods;
  const {width: screenWidth} = Dimensions.get('window');
  const sliderWidth = screenWidth;
  const itemWidth = sliderWidth / 2;

  const navigation = useNavigation();

  const handlePressFav = (item) => {
    navigation.navigate('cart',{
      items:item
    })
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>handlePressFav(item)}>
        <View style={styles.card} key={item.id}>
          <Image
            source={require('../utilitis/images/pizza.jpg')}
            style={styles.img}
          />
          <View style={styles.headingCont}>
            <Text style={styles.headingFavCard}>{item.name}</Text>
            <Text style={styles.headingSFavCard}>{item.description}</Text>
          </View>
          <View style={styles.priceCont}>
            <Text style={styles.priceFavCard}>₹{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.favCont}>
      <Text style={styles.headingFav}>
        Favourite <Text style={styles.innerHeadingFav}>dishes</Text>
      </Text>
      <Carousel
        layout="default"
        data={foods}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        activeSlideAlignment="start"
        containerCustomStyle={styles.carouselContainer}
        contentContainerCustomStyle={styles.carouselContentContainer}
        inactiveSlideOpacity={0.8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  favCont: {
    flexDirection: 'column',
    gap: 4,
  },
  headingFav: {
    fontSize: 30,
    fontWeight: '800',
  },
  innerHeadingFav: {
    fontSize: 20,
    fontWeight: '300',
  },
  headingCont: {
    flexDirection: 'column',
    gap: 4,
    padding: 8,
    height: '28%',
  },
  headingFavCard: {
    fontSize: 18,
    fontWeight: '600',

    letterSpacing: 2,
  },
  headingSFavCard: {
    fontSize: 16,
    fontWeight: '400',
  },
  card: {
    shadowOffset: {width: 2, height: 3},
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 0.9,
    backgroundColor: '#fff',
    height: 280,
    borderRadius: 6,
  },
  img: {
    height: '60%',
    width: '100%',
  },
  priceCont: {
    height: '10%',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 2,
    alignItems: 'flex-end',
  },
  priceFavCard: {
    fontSize: 18,
    fontWeight: '800',
  },
  carouselContainer: {
    backgroundColor: '#fff',
  },
  carouselContentContainer: {
    backgroundColor: '#fff',
    padding: 10,
    gap: 10,
  },
});
