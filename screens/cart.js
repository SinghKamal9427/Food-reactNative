import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import CustomCheckbox from '../components/checkbox';
import food from '../utilitis/foods.json';
import {FlatList} from 'react-native-gesture-handler';

export default function Cart({route}) {
  const orderData = route.params.items;
  let itemPrice = orderData.price;
  const [totalPrice, setTotalPrice] = React.useState(itemPrice);
  const [checked, setChecked] = React.useState();

  
  const addons = food.addons;

  const handleAdd = (hancheck) => {
    setChecked(hancheck)
    console.log(checked , 'thi')
  }


  const handleAddons = (price) => {
    if (checked) {
      setTotalPrice(totalPrice + price);
    } else {
      setTotalPrice(totalPrice - price);
    }
  };

  const renderItemsCart = ({item}) => {
    return (
      <View style={styles.innerCardCart}>
        <Text style={styles.textCart}>{item.name}</Text>
        <CustomCheckbox
          color="blue"
          onClick={() => handleAddons(item.price)}
          onClickS={handleAdd}
        />
      </View>
    );
  };

  return (
    <View style={styles.containerCart}>
      <View>
        <Image
          style={styles.imgCart}
          source={require('../utilitis/images/burger.png')}
        />
      </View>
      <View style={styles.cardCart}>
        <FlatList
          data={addons}
          renderItem={renderItemsCart}
          keyExtractor={item => item.id}
        />
        <View style={styles.bottomBorder} />
        <View style={styles.contPriceCartTotal}>
          <Text style={styles.priceCartTotal}> $ {totalPrice}</Text>
          <Button title="Add to cart" color="red" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCart: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgCart: {
    position: 'relative',
    height: 400,
    width: 400,
    resizeMode: 'contain',
  },
  cardCart: {
    height: 100,
    width: 100,
    backgroundColor: '#ff9800',
    padding: 28,
    position: 'absolute',
    bottom: -10,
    width: '100%',
    height: '50%',
    borderRadius: 20,
  },
  textCart: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '800',
  },
  innerCardCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceCartTotal: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '900',
  },
  contPriceCartTotal: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  bottomBorder: {
    width: '100%',
    height: 1,
    backgroundColor: '#fff',
    opacity: 0.7,
  },
});
