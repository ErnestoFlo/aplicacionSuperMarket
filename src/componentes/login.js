import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, View, TextInput, Dimensions, Button, Alert } from 'react-native';
import  Svg , {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import ButtonGradient from './button';
const {width, height} = Dimensions.get('window')
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [contrasena, setContrasena] = useState(null);
  const presIniciarSesion = async () =>{
    console.log(usuario, contrasena);
    if (!usuario || !contrasena) {
      console.log("Escriba los datos completos");
      Alert.alert("Super Market", "Escriba los datos completos");
    }
    else{
      try {
        const respuesta = await fetch(
          'http://192.168.0.3:4001/api/autenticacion/iniciosesion', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: usuario,
              contrasena: contrasena
            }),

          }

        );

        const json = await respuesta.json();
        console.log(json);
        const data = json.data;

        if(!data.token)
        {

        }
        else
        {
          const token = data.token;
          console.log(token);
          await AsyncStorage.setItem('Token', token);
        }
        Alert.alert("Super Market", json.msj);
          }
     catch (error) {
        console.log(error);
      }
    }
  };

  const presToken = async() => {
    try {
      var token = await AsyncStorage.getItem('Token');
      console.log(token);
        Alert.alert("Super Market", token);
        token = await AsyncStorage.removeItem('Token');
        if(!token)
        {
          Alert.alert("Super Market", "Token eliminado");
        }

    } catch(error) {

    }
  }

  function SvgTop() {
    return (
      <Svg
      width={500}
      height={324}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
        fill="url(#prefix__paint0_linear_103:6)"
        fillOpacity={0.5}
      />
      <Path
        d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
        fill="url(#prefix__paint1_linear_103:6)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_103:6"
          x1={492.715}
          y1={231.205}
          x2={480.057}
          y2={364.215}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFB677" />
          <Stop offset={1} stopColor="#FF3CBD" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_103:6"
          x1={7.304}
          y1={4.155}
          x2={144.016}
          y2={422.041}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFB677" />
          <Stop offset={1} stopColor="#FF3CBD" />
        </LinearGradient>
      </Defs>
    </Svg>
    )
  }
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.containerSvg}>

      <SvgTop/>
      </View>
      
    <View style={styles.container}>

   
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.subtitulo}>Bienvenido al Supermercado</Text>
      <TextInput style={styles.textInput} value={usuario} onChangeText={setUsuario} placeholder='Juanito200.'/>
      <TextInput style={styles.textInput} value={contrasena} onChangeText={setContrasena} placeholder='Password'/>
      <ButtonGradient onPress={presIniciarSesion}/>
      
      <StatusBar style="auto" />
      <Button onPress={presIniciarSesion}  title={"                                    "} color='rgba(69,69,69,0)' style={styles.prueba}></Button>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#f1f1f1',
    flex:1,

  },
  container: {
    marginTop:20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSvg:{
   width:width,
   justifyContent:'flex-start',
   alignItems:'center'
  },
  titulo:{
    fontSize:80,
    color:'#34434D',
    fontWeight:'bold'

  },
  subtitulo:{
      fontSize:20,
      color:'gray',
  },

  textInput:{

    padding:10,
    paddingStart:30,
    width:'80%',
    height:50,
    marginTop:20,
    borderRadius:30,
    color:'#000000',
    backgroundColor:"#ffffff"
  },

  prueba:{
    elevation:0,
  }
});