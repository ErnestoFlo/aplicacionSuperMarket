import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import React, { useState } from 'react';

export default function App() {
  return (
    <View style={styles.contenedor}>

      <View>
          <Image style={styles.imagen} source={"https://www.pngitem.com/pimgs/m/203-2033126_black-pyramid-logo-png-minimalist-graphic-design-png.png"}></Image>
          <Text style={styles.logo}>Logo</Text>
      </View>
    
      <View style={styles.contenedorMain}>
        <View style={styles.contenedorTitulo}>
          <Text style={styles.titulo}>Proveedor</Text>
          <Text style={styles.texto}>Formulario para el ingreso de proveedores y distribuidores</Text>
        </View>

        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View style={styles.controles}>
          
          <TextInput
              placeholder="ingrese su nombre"
              style={styles.entradas}
            >
            </TextInput>

            <TextInput
              placeholder="ingrese su empresa"
              on
              style={styles.entradas}
            >
            </TextInput>

            <TextInput
              placeholder="ingrese su número"
              on
              style={styles.entradas}
            >
            </TextInput>

            <TextInput
              placeholder="ingrese su segundo número"
              on
              style={styles.entradas}
            >
            </TextInput>

            <TextInput
              placeholder="ingrese su correo"
              on
              style={styles.entradas}
            >
            </TextInput>

            <TextInput
              placeholder="ingrese su imagen"
              on
              style={styles.entradas}
            >
            </TextInput>

          </View>

          <View style={styles.contenedorBotones}>

            <View style={styles.boton}>
              <Button title="Almacenar"
              ></Button>
            </View>

            <View style={styles.boton}>
                
              <Button borderColor="#227c9d" title="Modificar"
              ></Button>
            </View>

          </View>

          <View style={styles.contenedorBotones}>

            <View style={styles.boton}>
              <Button title="Eliminar"
              ></Button>
            </View>

            <View style={styles.boton}>
              <Button title="Listar"
              ></Button>
            </View>

          </View>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: "center",
    margin:0,
    padding: 25,
    width:"100%",
    height:"100%",

  },

  contenedorMain: {
    alignItems: "stretch",
    justifyContent: 'center',
    height: 530,
    width: 360,

  },

  contenedorTitulo: {
    flex: 1,
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "flex-end",

  },

  titulo: {
    color: "#2b2d42" ,
    fontSize: 25,
    fontWeight: "500",
  },

  logo: {
    color: "#2b2d42" ,
    fontSize: 35,
    fontWeight: "500",
    fontStyle: "italic",
  },

  imagen:{
    width: 5,
    height: 5,
  },

  texto: {
    color: "#8d99ae" ,
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center"
  },

  contenedorControles: {
    flex: 4,
    flexDirection:"column",
    alignItems: "stretch",
    justifyContent:"center",
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius:25,
    backgroundColor:"#fff",
    padding:10,
    margin:7,
  },

  sombraControles: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  controles:{
    flex:7,
    marginBottom: 10,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,

  },

  entradas:{
    flex:1,
    alignItems:"stretch",
    margin:5,
    padding:5,
    fontSize: 15,
    fontWeight:"400",
    color: "#495057",
    backgroundColor:"#fff",
    borderWidth:1,
    borderStyle:"solid",
    borderColor: "#adb5bd",
    borderRadius: 5,
  },

  contenedorBotones:{
    flex:1,
    padding: 10,
    justifyContent:"space-evenly",
    flexDirection: "row",

  },

  boton:{
    flex:1,
    alignItems:"stretch",
    marginLeft:10,
    marginRight:10,
  },

});
