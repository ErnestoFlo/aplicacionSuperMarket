import React from 'react';
import { View, Text, Alert, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import articulos from './articulos';
const width = Dimensions.get("screen").width / 2 - 30
const HomeScreen = ({navigation}) => {
    
    const idVentas = 1;
    const idProducto = 2;
    const cantidad = 2;

    const presAgregarProducto = async ()=>{
        try {
            console.log(idVentas, idProducto, cantidad);
            const respuesta = await fetch(
              'http://192.168.0.3:4001/api/detalleventas/guardar', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                
                body: JSON.stringify({
                  idVentas: idVentas,
                  idProducto: idProducto,
                  cantidad: cantidad
                }),
                
              }
    
            );
    
            const json = await respuesta.json();
            console.log(json);
            const data = json.data;
    
           
            Alert.alert("Super Market", json.msj);
              }
         catch (error) {
            console.log(error);
          }
    }

    const categorias = ['Popular', 'Carnes', 'Abarroteria', 'Snacks'];
    const [categoryIndex, setCategoryIndex] = React.useState(0)
    const CategoriasLista = () => {
        return <View style={style.categoriacontenedor}>
            {categorias.map((item, index) => (
                <TouchableOpacity key={index}
                 activeOpacity={0.8} 
                 onPress={() => setCategoryIndex(index)}>
                    <Text style={[style.categoriaText,
                         categoryIndex == index && style.categoryTextSelected]}>
                        {item}
                    </Text>
                </TouchableOpacity>



            ))}

        </View>
    };
    const Card = ({articulo}) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={presAgregarProducto}>
            <View style={style.card}>
              <View style={{alignItems: 'flex-end'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: articulo.like
                      ? 'rgba(245, 42, 42,0.2)'
                      : 'rgba(0,0,0,0.2) ',
                  }}>
                  <Icon
                    name="favorite"
                    size={18}
                    color={articulo.like ? 'red' : 'black'}
                  />
                </View>
              </View>
    
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={articulo.img}
                  style={{flex: 1, resizeMode: 'contain'}}
                />
              </View>
    
              <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
                {articulo.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                  ${articulo.price}
                </Text>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: '#ff8364',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 22, color: 'white', fontWeight: 'bold' ,marginTop:-5}}>
                    +
                  </Text>
                </View>

              </View>
              <View
                  style={{
                    height: 25,
                    width: 120,
                    backgroundColor: '#ff8364',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:10
                  }}>
                  <Text
                    style={{fontSize: 10, color: 'white', fontWeight: 'bold' ,marginTop:-3}}>
                    Comprar Ahora
                  </Text>
                </View>
            </View>
          </TouchableOpacity>
        );
      };
    return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#fff', }}>


        <View style={style.header}>
            <View >
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                    ¡Bienvenido!
                </Text>
                <Text style={{ fontSize: 37, fontWeight: 'bold', color: '#ff8364' }}>
                    Super Mercado
                </Text>
            </View>

            <Entypo name="shopping-cart" size={28} color="black" />

        </View>

        <View style={{ marginTop: 35, flexDirection: 'row' }}>

            <View style={style.searchContainer}>
                <FontAwesome name="search" size={30} color="black" style={{ marginLeft: 20 }} />
                <TextInput placeholder="Buscar" style={style.input}> </TextInput>
            </View>

            <View style={style.sortBtn}>
                <MaterialIcons name="sort" size={25} color="white" />
            </View>
        </View>
        <CategoriasLista/>
        <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={articulos}
        renderItem={({item}) => {
          return <Card articulo={item} />;
        }}
      />
    </SafeAreaView>
);
};

const style = StyleSheet.create({
    header: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    searchContainer: {
        height: 55,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        height: 80,
        fontSize: 20,
        fontWeight: "bold",
        color: 'black',
        flex: 1,

    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        justifyContent: 'center',
        backgroundColor: '#ff8364',
        alignItems: 'center',
        borderRadius: 10,

    },
    categoriacontenedor: {
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 20,
        justifyContent: "space-between"

    },
    categoriaText: {
        fontSize: 16,
        color: "grey",
        fontWeight: "bold"
    },
    categoryTextSelected: {
        color: '#ff8364',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: '#ff8364'
    },
    card: {
        height: 255,
        backgroundColor: '#f1f1f1',
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    }
})

export default HomeScreen;