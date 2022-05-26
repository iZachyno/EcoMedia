import { StyleSheet } from 'react-native';

export const Global = StyleSheet.create({
    Header:{
      height: 3,
      width: 25, 
      marginTop: 4,
      marginLeft: 28,
      borderRadius: 9,
    },
    text:{
      textAlign: 'left',
      textDecorationLine: 'underline',
      color: '#fff',
    },
    title:{
      fontSize: 20,
      color: '#554698',
      fontWeight: "600",
    },
    Circle:{
      marginTop: 20,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Profile:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg:{
        flex: 1,
        backgroundColor: 'tomato',
        borderWidth: 1,
    },
    fast:{
        flex: 1,
        flexDirection: 'column',
        margin: 15,
        padding: 31 - 1,
        backgroundColor: 'tomato',
        fontSize: 31 - 7,
        borderRadius: 6,
      },
      image:{
        width: 31, height: 31, borderRadius: 111,
      },
      image3:{
        width: 20, height: 20, backgroundColor: '#111', borderRadius: 111,
      },
      image4:{
        width: 20, height: 20, backgroundColor: '#111', borderRadius: 111,
      }
  });
  /*import { StyleSheet, View, Text, Image, StatusBar, ScrollView, Button } from 'react-native';
import { TouchableHighlight, TouchableOpacity, } from 'react-native';
import { Global } from './globalStyles/Global'

export default function App() {
  return(
    <>
      <StatusBar backgroundColor={'#004565'} />
      <View style = {{flex: 1, backgroundColor: '#007995'}}>
        <View style = {{flex: .1, flexDirection: 'row', alignItems: 'center',}}>
          <View style = {{flex: .07, flexDirection: 'column', alignItems: 'center',}}>
          <TouchableOpacity><View style = {Global.Header}></View>
            <View style = {Global.Header}></View>
            <View style = {Global.Header}></View></TouchableOpacity>
          </View>
          <View style = {{flex: .1,}}></View>
          <View style = {{flex: .1,}}></View>
          <View style = {{flex: 1, marginLeft: -22,}}><Text style = {Global.title}>Dev<Text style = {Global.title2}>Portal</Text></Text></View>
          <View style = {{marginRight: 4}}>
            <TouchableOpacity>
              <Image source={require('./assets/settings.png')} style = {{height: 45, width: 45,}} />
            </TouchableOpacity>
          </View>
        </View>
        <View style = {{flex: .3,}}>
          
          
          <View style = {Global.Profile}>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Feed</Text></View>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center',}}><Text style = {{ borderColor: '#555',borderLeftWidth: 1, borderRightWidth: 1, paddingLeft: '19%', paddingRight: '19%' }}>Messages</Text></View>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Groups</Text></View>
          </View>
        </View>
        <View style = {{flex: 3, backgroundColor: 'white',}}>
          <ScrollView>
            
          </ScrollView>
        </View>
        
      </View>
    </>
  );
}*/