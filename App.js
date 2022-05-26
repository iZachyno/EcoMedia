import React, { useState } from 'react';
import { StyleSheet, Image, SafeAreaView, View, TextInput, Text, FlatList, TouchableOpacity, Alert, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const COLORS = {primary: 'teal', white: '#fff', red: 'tomato'};

const App = () => {
  const [post, makePost] = React.useState([]);
  const [textInput, setTextInput] = React.useState('');

  React.useEffect(() => {
    getPostFromUser();
  }, []);

  React.useEffect(() => {
    offlineStore(post);
  }, [post]);

  const addPost = () => {
    if (textInput == '') {
      Alert.alert('Prompt', 'field cannot be empty');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      makePost([...post, newTodo]);
      setTextInput('');
    }
  };

  const offlineStore = async post => {
    try {
      const stringifypost = JSON.stringify(post);
      await AsyncStorage.setItem('post', stringifypost);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostFromUser = async () => {
    try {
      const post = await AsyncStorage.getItem('post');
      if (post != null) {
        makePost(JSON.parse(post));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = todoId => {
    const newpostItem = post.filter(item => item.id != todoId);
    makePost(newpostItem);
  };
  const ListItem = ({todo}) => {
    const [likes, setLikes] = React.useState(1-1);
  const [heart, setHeart] = useState("lightgrey");
  function liker(){
    setLikes(likes + 1)
    setHeart(COLORS.red);
  };

    return (
      <View style={styles.listItem}>
        <View style={{flex: 1}}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.primary, textDecorationLine: todo?.completed ? 'line-through' : 'none', }}>
            {todo?.task}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <View style = {{marginVertical: 15, flexDirection: 'row', borderWidth: 1, borderRadius: 15, borderColor: 'tomato', padding: 5}}>
              
              <View style={[styles.actionIcon]}>
                <Text style={{justifyContent: 'center', alignItems: 'center', color: 'tomato', fontWeight: 'bold'}}>
                  {likes}
                </Text>
              </View>
              <TouchableOpacity onPress={liker} style={styles.actionIcon}>
                <AntDesign name="heart" size={20} color = {heart} />
              </TouchableOpacity>
              
            </View>
            <View style = {{height: 31-16, width: 1, backgroundColor: '#11111135'}} />
          <TouchableOpacity style = {{marginVertical: 15}} onPress={() => deleteTodo(todo.id)}>
            <View style={styles.actionIcon}>
              <Icon name="delete" size={25} color="tomato" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'teal', }}>
        <StatusBar backgroundColor={'teal'} />
      <View style={styles.header}>
      <Image source={require('./assets/Plants.png')} style = {{height: 65, width: 45,}} />
        <Text style={[styles.Title, {fontWeight: 'bold', fontSize: 20, color: 'ghostwhite', marginRight: 15}]}>
          E<Text style = {{color: 'lightgreen'}}>c</Text>o<Text style = {{color: 'pink'}}>•</Text>M<Text style = {{color: 'orange'}}>e</Text>d<Text style = {{color: 'tomato'}}>i</Text>a
        </Text>
        <Entypo name="menu" size={25 + 5} color="ghostwhite" />
      </View>
      <View style = {[ styles.bRadius,{flex:5, backgroundColor: 'ghostwhite'}]}>
      <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 20, paddingBottom: 100}} data={post} renderItem={({item}) => <ListItem todo={item} />}>

      </FlatList>
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput value={textInput} placeholder="write something..." onChangeText={text => setTextInput(text)}
          />
        </View>
        <TouchableOpacity onPress={addPost}>
          <View style={styles.iconContainer}>
            <Icon name="add" color="white" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'teal',
    borderRadius: 15 + 15
  },
  inputContainer: {
    height: 50,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: 'ghostwhite',
    elevation: 6,
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    justifyContent: 'center',
  },
  bRadius: {
    borderTopLeftRadius: 15 + 15,
    borderTopRightRadius: 15 + 15
  },
  Title: {
    borderTopColor: 'lightgreen',
    borderLeftColor: 'lightgreen',
    borderBottomColor: 'pink',
    borderRightColor: 'pink',
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'teal',
    elevation: 3 + 3,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItem: {
    padding: 20,
    backgroundColor: 'ghostwhite',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },
  header: {
    flex: .5,
    borderBottomWidth: 1 + 1,
    borderColor: '#aa999951',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 15 + 15,
    borderBottomRightRadius: 15 + 15
  },
});

export default App;
