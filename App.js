import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const [news, SetNews] = useState([]);

  useEffect(() => {
     let url = "https://newsapi.org/v2/top-headlines?country=za&apiKey=04e2ced2727949e4b48ed6ec268a3cd3";

    // let url = 'https://newsdata.io/api/1/news?apikey=pub_11276069eaf8ebc3e22e38398ba9071d68072'

    fetch(url).then((response) => response.json().then((data) => {
      console.log(data);
      SetNews(data.articles)

    }))

  }, [])

  const Stack = createNativeStackNavigator();
  function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView style={styles.scrollView}>
          <Text style={{ fontSize: 20, width: '100%', textAlign: 'center' }}>Top Stories</Text>
          {
            news.map((post, index) => (

              <View key={index}>
                <View style={styles.title}>
                  <Text style={{ fontSize: 20, color: 'white', }}>{post.title}</Text>
                </View>
                <View>
                  <Image style={{ width: '95%', height: 200, alignSelf: 'center' }} source={post.urlToImage} />
                </View>
                <View>
                  <Text style={styles.description}>{post.description}</Text>
                </View>

                <View>
                  <Text style={styles.content}>{post.content}</Text>
                </View>
              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'NewsApp Africa',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 10,
    textAlign: 'center'
  },
  content: {
    textAlign: 'left',
    margin: 10,
  },
  description: {
    margin: 10
  },
  pic: {
    height: 20,
    width: 20

  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    height: 1000
  },

});
