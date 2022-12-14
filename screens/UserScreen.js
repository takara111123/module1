import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";

const Item = ({ item,onPress, backgroundColor}) => (
  <TouchableOpacity onPress={onPress
  } onPressIn={()=>console.log(item.selectedTF)}>
    <Text style={backgroundColor="gray"}>{item.content}</Text>
  </TouchableOpacity>
);

const UserScreen = () => {
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  const [selectedTF, setSelectedTF] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        
        onPress={() => setSelectedTF(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.TextInputer}
        onChangeText={text => setContent(text)}
        value={content}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          //空文字はNG
          if (content == "") {
            return false;
          }
          setId(id + 1);
          setSelectedTF
          setTodos(todos.concat([{ id: id, content: content, selectedTF:selectedTF }]));
          console.log(todos);
          setContent("");
        }}
      >
        <Text style={styles.buttonText}>追加する</Text>
      </TouchableOpacity>

      <FlatList style={styles.list}
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // renderItem={({ item }) => {
        //   return <TouchableOpacity style={styles.listItem} onPress={() => {console.log(todos[item.id].content);}
        // }><Text style={styles.listItemText}>{item.content}</Text></TouchableOpacity>  
      
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  list:{
    top:100,
    width:'100%',
    height:'100%',
    backgroundColor:"#b0c4de",
    fontSize:20,
  },

  listItem:{
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    fontSize:30,
  },

  listItemText:{
    fontSize:30,
    height:50,
  } ,
  TextInputer: {
    width: "80%",
    borderWidth: 7,
    top:50,
    borderColor: "#000000"
  },

  buttonText:{
    fontSize:20,
  },
  
  button:{
    top:70,
    backgroundColor:"#b0c4de",
    width:"30%",
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default UserScreen 