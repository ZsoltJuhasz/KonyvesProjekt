import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { getBooks } from './shared/api';

export default function App() {
 const [books, setBooks] = useState();

 useEffect( ()=> {
  getBooks()
  .then(res => {
    setBooks();
    //console.log(res);
   console.log(res[0].title);
  }); 
 },[])

 function onLoadButton(){
   console.log("Letöltés");
   getBooks()
  .then(res => {
    setBooks(res);
    console.log(res);
  }); 
 }
 
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Könyvek</Text>
      <Button
        title="Letölt"
        onPress={onLoadButton}
      />

      <View style={styles.bookList}>
        <FlatList
        data = {books}
        renderItem= { ({item}) => (
          <Text style={styles.title}>{item.title}</Text>
        )}
        />
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 20,
    margin: 5,
    backgroundColor: 'lightblue',
    padding: 15,
  },
  bookList: {
    flex: 1,
    width: '95%',
  },
  head:{
    backgroundColor: '#2bff00',
    width: '100%',
    fontSize: 32,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 5,
  }
});
