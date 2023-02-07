import { Image, stylesheet } from 'react-native'
import Texto from '../../../components/Texto'
 
import topo from '../../../../assets/frutas/topo.png'

export default function Topo() {
    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
        </>

    )
}

const estilos = stylesheet.create({
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
})