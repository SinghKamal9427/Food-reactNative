import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

export default function DrawerContent(props) {
  return (
<DrawerContentScrollView {...props}>
    <View style={styles.containerHead}>
        <Text style={styles.containerText}>Hello,</Text>
        <Text style={styles.containerText}>Himanshi</Text>
    </View>
      <DrawerItemList {...props}  activeTintColor="red" activeBackgroundColor="black" />
      <DrawerItem
      labelStyle={styles.drawerLabel}
      activeTintColor="white" 
      activeBackgroundColor="#ff9800"
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>

  )
}

const styles = StyleSheet.create({
    containerHead:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: 100,
        padding:20,
        marginTop:40,
        marginBottom:20
    },
    containerText:{
        fontSize: 28,
        fontWeight:'900',
        letterSpacing:1
    },
    drawerLabel:{
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing:0.5
    }
})