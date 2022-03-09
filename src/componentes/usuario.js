import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,StyleSheet, Alert, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import React, { useState } from 'react';

export default function App() {
    const [username, setUsername] = useState(null);
    const [correo, setCorreo] = useState(null);
    const [contrasena, setContrasena] = useState(null);
    const [idtipo, setIdTipo] = useState(null);
    const [idRegistro, setIdRegistro] = useState(null);
    const [telefono, setTelefono] = useState(null);
    const [estado, setEstado] = useState(null);
    const [idPersona, setIdPersona] = useState(null);


    const presIngresarUsuario= async () =>{
        if (!username || !correo || !contrasena || !idtipo || !idRegistro || !telefono || !estado || !idPersona) {
            console.log("Escriba los datos completos");
            Alert.alert("Super Market", "Escriba los datos completos");
        }
        else{
            try {
              const respuesta = await fetch(
                'http://192.168.0.3:4001/api/usuario/guardar', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      username:username,
                      correo:correo,
                      contrasena:contrasena,
                      idtipo:idtipo,
                      idRegistro:idRegistro,
                      telefono:telefono,
                      estado:estado,
                      idPersona:idPersona
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

    return (
        <View style={styles.contenedor}>

            <View>
                <Text style={styles.logo}>SuperMarket</Text>
            </View>

            <View style={styles.contenedorMain}>
                <View style={styles.contenedorTitulo}>
                    <Text style={styles.titulo}>Usuario</Text>
                </View>

                <View style={[styles.contenedorControles, styles.sombraControles]}>
                    <View style={styles.controles}>

                        <TextInput
                            placeholder="Ingrese usuario"
                            style={styles.entradas}
                            onChangeText={setUsername}
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese correo"
                            on
                            style={styles.entradas}
                            onChangeText={setCorreo}
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese contraseña"
                            on
                            style={styles.entradas}
                            onChangeText={setContrasena}
                        >
                        </TextInput>



                        <TextInput
                            placeholder="Ingrese id tipo"
                            on
                            style={styles.entradas}
                            onChangeText={setIdTipo}
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese id registro"
                            on
                            style={styles.entradas}
                            onChangeText={setIdRegistro}
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese teléfono"
                            on
                            style={styles.entradas}
                            onChangeText={setTelefono}
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese estado"
                            on
                            style={styles.entradas}
                            onChangeText={setEstado}
                        >
                        </TextInput>

                        <TextInput
                            placeholder="Ingrese id Persona"
                            on
                            style={styles.entradas}
                            onChangeText={setIdPersona}
                        >
                        </TextInput>
                        
                    </View>

                    <View style={styles.contenedorBotones}>

                        <View style={styles.boton}>
                            <TouchableOpacity title="Enviar"
                            onPress={presIngresarUsuario}
                            >
                                <Text style={styles.text}>Enviar</Text>
                                </TouchableOpacity>
                        </View>

                        <View style={styles.boton}>

                            <TouchableOpacity borderColor="#227c9d" title="Cancelar">
                                <Text style={styles.text}>Cancelar</Text>
                                </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.contenedorBotones}>



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
        margin: 0,
        padding: 25,
        width: "100%",
        height: "100%",

    },

    contenedorMain: {
        alignItems: "stretch",
        justifyContent: 'center',
        height: 650,
        width: 360,

    },

    contenedorTitulo: {
        flex: 0,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",

    },

    titulo: {
        color: "#2b2d42",
        fontSize: 25,
        fontWeight: "500",
    },

    logo: {
        color: "#ff8364",
        fontSize: 35,
        fontWeight: "500",
        fontStyle: "italic",
        paddingBottom:1
    },

    texto: {
        color: "#8d99ae",
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center"
    },

    text: {
        fontSize: 14,
        color: 'grey',
        marginTop: 3,
        fontWeight: 'bold'
    },

    contenedorControles: {
        flex: 9,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#dedede",
        borderRadius: 25,
        backgroundColor: "#fff",
        padding: 5,
        margin: 10,
    },

    sombraControles: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    controles: {
        flex: 45,
        marginBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,

    },

    entradas: {
        flex: 1,
        padding:10,
    paddingStart:30,
    width:'80%',
    height:75,
    marginTop:20,
    borderRadius:30,
    color:'#000000',
    backgroundColor:"#ffffff"
    },

    contenedorBotones: {
        flex: 3,
        padding: 0,
        justifyContent: "space-evenly",
        flexDirection: "row",

    },

    boton: {
        flex: 1,
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        borderWidth:1,
        borderRadius:5,
        borderColor: "grey",
        backgroundColor:"white",
        color:"black",
        textAlign:'center'
    },

    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});