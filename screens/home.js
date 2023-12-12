import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import food from '../utilitis/foods.json';
import FavDishes from '../components/favDishes';
import BusinessLunch from '../components/businessLunch';

export default function Home() {
  const foodTitle = food.foods;
  console.log(foodTitle, 'food');
  return (
    <ScrollView style={{ backgroundColor: '#fff'}}>
    <View style={styles.container}>
      <Text style={styles.heading}>
        What would you like{'\n'}
        <Text style={styles.innerHeading}>to eat?</Text>
      </Text>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.containerOptions}>
            {foodTitle &&
              foodTitle.map(({name}) => {
                return (
                  <TouchableOpacity>
                    <Text style={styles.options}>{name}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
        <FavDishes />
        <BusinessLunch/>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginLeft:20
  },
  heading: {
    fontSize: 24,
    justifyContent: 'center',
  },
  innerHeading: {
    fontSize: 30,
    fontWeight: '800',
  },
  containerOptions: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 20,
  },
  options: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#ff9800',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#fff',
  },
  scrollViewContent: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
