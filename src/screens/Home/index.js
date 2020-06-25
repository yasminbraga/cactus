import React from 'react'
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native'

import { MaterialCommunityIcons } from  '@expo/vector-icons'

const data = [
  {
    img_uri:
      "https://www.tuacasa.com.br/wp-content/uploads/2018/04/cacto-7.jpg",
    name: "Mil cores",
    lastWater: "Há 1 dia",
    time: "3 meses",
  },
  {
    img_uri:
      "https://www.tuacasa.com.br/wp-content/uploads/2018/04/cacto-10.jpg",
    name: "Macarrão",
    lastWater: "Há 4 dias",
    time: "1 mes",
  },
  {
    img_uri:
      "https://www.tuacasa.com.br/wp-content/uploads/2018/05/cacto-2ok.jpg",
    name: "Ouriço",
    lastWater: "Há 2 dias",
    time: "8 meses",
  },
  {
    img_uri:
      "https://www.tuacasa.com.br/wp-content/uploads/2018/04/cacto-4.jpg",
    name: "Barba de velho",
    lastWater: "Há 4 dias",
    time: "4 meses",
  },
  {
    img_uri:
      "https://www.tuacasa.com.br/wp-content/uploads/2018/04/cacto-5.jpg",
    name: "Capus de monge",
    lastWater: "Há 3 dias",
    time: "1 mes",
  },
  {
    img_uri:
      "https://www.tuacasa.com.br/wp-content/uploads/2018/04/cacto-9.jpg",
    name: "Almofada de alfinetes",
    lastWater: "Há 3 dias",
    time: "1 mes",
  },
];

export default function Home({navigation}) {

  function handleClick(item) {
    navigation.navigate('ShowCactus', {item})

  }
  function renderItem({item}) {
    return (
    <TouchableOpacity onPress={() => handleClick(item)} activeOpacity={0.75} style={styles.itemContainer}>
      <Image source={{uri: item.img_uri}} style={styles.img}/>
      <View style={styles.details}>
        <Text style={styles.itemName}>{item.name}</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.itemDetailContainer}>
            <MaterialCommunityIcons name="clock" size={16} color="#bbb"/>
            <Text style={styles.itemDetail}>{item.time}</Text>
          </View>
          <View style={styles.itemDetailContainer}>
            <MaterialCommunityIcons name="water" size={16} color="#bbb"/>
            <Text style={styles.itemDetail}>{item.lastWater}</Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>)
  }

  return  (
    <View style={styles.container}>
      <Text style={styles.tinyTitle}>MEUS CACTUS</Text>
      <FlatList 
        data={data} 
        renderItem={renderItem} 
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 22,
  },
  tinyTitle: {
    fontSize: 15,
    color: '#bbb',
    fontWeight: "300",
    marginBottom: 18,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    
  },
  img: {
    width:98,
    height: 98,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  itemName: {
    fontSize: 24,
    color: '#333',
    fontWeight: "bold",
  },
  details: {
    flex: 1,
    height: 98,
    borderColor: '#f2f2f2',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopLeftRadius: 8,
    borderBottomRightRadius:8,
    padding: 12,
    justifyContent: "space-between",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemDetail: {
    color: "#bbb",
    marginLeft: 4,
  },
  itemDetailContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
})