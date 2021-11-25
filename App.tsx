import * as React from 'react';
import { Text, View, StyleSheet , FlatList} from 'react-native';
import Constants from 'expo-constants';

const dados=([{
    id:1, 
    nome:"Guilherme Terenciani",
    ddd:67,telefone:'996456789',
    email:'guilhermeterenciani@gmail.com', 
    foto:"https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI"},

    {id:2, 
    nome:"Aleksander Wallace",
    ddd:67,telefone:'998461668',
    email:'aleksander.wallace@gmail.com', 
    foto:""},

    {id:3, 
    nome:"Andre Predoso",
    ddd:67,telefone:'996321285',
    email:'andre.predoso1528@gmail.com', 
    foto:""},
]);

export default function App() {
    const renderItemAgenda = ({item})=>(
        <View style={styles.quadrado}>
            <View style={styles.circulo}></View>
            <View>
                <Text>{item.nome}</Text>
                <Text>({item.ddd}) {item.telefone}</Text>
                <Text>{item.email}</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.escrita}>
                <Text style={styles.agenda}>Agenda</Text>
            </View>
            <View style={styles.todo}>
                <FlatList 
                    data={dados}
                    keyExtractor={(item)=>item.id}
                    renderItem={renderItemAgenda}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    todo:{
        flex:1,
    },
    quadrado:{
        height:70,
        flexDirection:'row',
        backgroundColor:'lightgray',
        marginBottom:5,
        alignItems:'center',
        paddingHorizontal:30,
    },
    circulo:{
        height:40,
        width:40,
        backgroundColor:'gray',
        borderRadius:50,
        marginRight:20,
    },
    agenda:{
        fontSize:30,
        fontWeight: "700",
    }
});