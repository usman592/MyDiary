

import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, Image } from '../../../node_modules/react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const Home = () => (
  <SafeAreaView style={styles.containerMainImage}>
    <View style={styles.MainImage}>
      <Image style={styles.buttonImage} source={require('E:\\GITProjects\\MyDiary\\public\\Image\\diary.png')} />
      <Text style={styles.mainImageText}>My Diary</Text>
    </View>
    <View style={styles.containerMainBody}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style={styles.buttonText}>
            {/* <Image style={styles.buttonImage} source={require('E:\\GITProjects\\MyDiary\\public\\Image\\expense.png')} /> */}
            Expense
          </Text>
        </TouchableOpacity>
      </View>
      <Separator />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style={styles.buttonText}>
            {/* <Image style={styles.buttonImage} source={require('E:\\GITProjects\\MyDiary\\public\\Image\\expense.png')} /> */}
            Expense
          </Text>
        </TouchableOpacity>
      </View>
      <Separator />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style={styles.buttonText}>
            {/* <Image style={styles.buttonImage} source={require('E:\\GITProjects\\MyDiary\\public\\Image\\logout.png')} /> */}
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <Separator />
      {/* <View>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          color="red" 
          title="Log Out"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View> */}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  containerMainImage: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#212121",
    // backgroundImage:
  },
  mainImageText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Helvetica'
  },
  containerMainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#212121",
    marginBottom: 200
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    // borderBottomColor: '#737373',
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    color: 'white',
    padding: 20,
    backgroundColor: '#f08913',
    borderRadius: 60,
    marginHorizontal: 16,
    // marginBottom:40
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonImage: {
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
  MainImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100
  }
});
export default Home;