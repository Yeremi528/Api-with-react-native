import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button, FlatList} from 'react-native';
import ListItem from './components/ListItem';

export default function App() {
  const [users,setUsers] = useState([])
  const [loading,setLoading] = useState(false)

  const fetchUsers = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const dataUser = await response.json()
    setUsers(dataUser)
  }
  useEffect(()=>{
    fetchUsers()
  },[])

  return (
    <View style={styles.container}>
     <FlatList
     data={users}
     keyExtractor={x =>x._id}
     renderItem={({item}) =><ListItem name={item.name} onPress={() =>console.log(users)}/>}/>
      <StatusBar style="auto" />
      <Button title="Vengan wnes" onPress={() =>console.log(users)}/>
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
});
