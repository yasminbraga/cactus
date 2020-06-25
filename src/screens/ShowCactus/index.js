import React from 'react'
import {View, ScrollView, Text, StyleSheet, Image, Dimensions} from 'react-native'

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ShowCactus({route}) {

  const {item} = route.params

  return  (
    <ScrollView style={styles.container}>
      <Image style={styles.img} source={{uri: item.img_uri}}/>

      <View style={styles.detailsContainer}>
          <View style={styles.itemDetailContainer}>
            <MaterialCommunityIcons name="clock" size={18} color="#bbb"/>
            <Text style={styles.itemDetail}>{item.time}</Text>
          </View>
          <View style={styles.itemDetailContainer}>
            <MaterialCommunityIcons name="water" size={20} color="#bbb"/>
            <Text style={styles.itemDetail}>{item.lastWater}</Text>
          </View>
      </View>

      <Text style={styles.itemTitle}>{item.name}</Text>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia sint, id maiores odio consequuntur alias, quo, natus nostrum sapiente quas cupiditate eius dolor rem laborum officiis expedita laboriosam eos!

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, deleniti quidem, et voluptatem quam tempora esse enim est voluptate, quia delectus. Excepturi ad hic aliquam non iusto. Nesciunt, a accusantium.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minus recusandae tenetur libero magni unde molestias officiis delectus aliquam ut culpa illo error incidunt, accusantium est ea similique vitae voluptas!
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    padding: 20,
    paddingBottom: 0
  },
  img: {
    width: Dimensions.get('window').width -40,
    height:  Dimensions.get('window').width -40,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
    lineHeight: 28,
    marginBottom: 12
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  itemDetail: {
    color: "#bbb",
    marginLeft: 4,
    fontSize: 16,
  },
  itemDetailContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  description: {
    fontSize: 18,
    marginBottom: 28,
    lineHeight: 26,
    color: "#666",
    textAlign: "justify"
    
  }
})