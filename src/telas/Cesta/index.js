import React from 'react'
import { StyleSheet, View } from 'react-native'
import Detalhes from './Components/Detalhes'
import Topo from './Components/Topo'

export default function Cesta() {
    return (
        <>
            <Topo />
            <View style={estilos.cesta} >
                <Detalhes />
            </View>
        </>
    )
}
const estilos = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

})