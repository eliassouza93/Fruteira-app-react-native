import React from 'react'
import { Dimensions, StyleSheet, Text, Image, View } from 'react-native'
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'
import Texto from '../../components/Texto'
const width = Dimensions.get('screen').width

export default function Cesta() {

    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
            <View style={estilos.cesta} >
                <Texto style={estilos.nome}>Cesta de Verduras</Texto>
                <View style={estilos.fazenda}>
                    <Image style={estilos.imagemFazenda} source={logo}></Image>
                    <Texto style={estilos.nomeFazenda}>Jenny Jack Form</Texto>
                </View>
                <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Texto>
                <Text style={estilos.preco}>R$ 40,00</Text>
            </View>
        </>
    )
}
const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,


    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold'
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,

    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }



})