import { StyleSheet,View,Text } from "react-native";


 function HomeScreen(props){
    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            <View>
                <Text style={{ fontSize: 25 }}>Top Stories</Text>
                <View style={{ textAlign: 'center' }}>
                    <Text>description{props.local.description}</Text>
                </View>

            </View>

        </View>
    )
};
const styles = StyleSheet.create({
    heading: {
       
    }
   
    
})

export default HomeScreen;