import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import foods from '../utilitis/foods.json';

export default function BusinessLunch() {
  const lunchItems = foods.businessLunch;
 

  const renderLunchItems = ({item}) => {
   return <View style={styles.cardBusinessLunch}>
      <View style={styles.cardInnerBusinessLunch}>
        <Text style={styles.cardInnerTextBusinessLunch}>{item.name}</Text>
        <Text style={styles.cardInnerTextFBusinessLunch}>
          {item.description}
        </Text>
        <Text style={styles.cardInnerPriceBusinessLunch}>${item.price}</Text>
      </View>
      <View style={styles.ContainerImgBusinessLunch}>
      <Image
        style={styles.imgBusinessLunch}
        source={require('../utilitis/images/salmon.jpg')}
      />
      </View>
    </View>
  };

  return (
    <View>
      <Text style={styles.headingBusinessLunch}>Business Lunch</Text>
      <View style={{padding:10 }}>
        <FlatList
          data={lunchItems}
          renderItem={renderLunchItems}
          keyExtractor={item => item.id}
        />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingBusinessLunch: {
    fontSize: 30,
    fontWeight: '800',
    marginTop:20
  },
  cardBusinessLunch: {
    shadowOffset: {width: 2, height: 3},
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:14,
  },
  cardInnerBusinessLunch: {
    width: '50%',
    padding:10
  },
  cardInnerTextBusinessLunch: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 2,
  },
  cardInnerTextFBusinessLunch: {
    fontSize: 16,
    fontWeight: '400',
  },
  cardInnerPriceBusinessLunch: {
    fontSize: 18,
    fontWeight: '800',
    paddingVertical:10
  },
  ContainerImgBusinessLunch:{
    width: '50%',
    padding:10,
    height:200
  },
  imgBusinessLunch: {
    height: "100%",
    width: "100%",
    borderRadius: 26,
  },
});
