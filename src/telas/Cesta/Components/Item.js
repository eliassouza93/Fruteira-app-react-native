import Texto from '../../../components/Texto'
import { Image, View, StyleSheet } from 'react-native'



export default function Item({ item: { nome, imagem } }) {
    return (
        <View style={estilos.item}>
            <Image style={estilos.imagem} source={imagem} />
            <Texto style={estilos.nome}> {nome} </Texto>
        </View>
    )

}


const estilos = StyleSheet.create({

    item: {
        flexDirection: 'row',
        borderBottomWidht: 1,
        borderBottonColor: '#ececec',
        paddingVertical: 16,
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 21,
        marginLeft: 11,
        color: '#464646'
    }
})