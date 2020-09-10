import * as React from 'react'
import {View,Text,Button} from 'react-native'
import {NavigationContainer} from '@rect-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const HomeScreen=({navigation})=>{
  return(
   <View style={{Flex:1,alignItems:'center',justifyContent :'center'}}>
     <Text>Home Screen</Text>
     <Button
        title="Go to Details"
        onPress={()=>navigation.navigate('Detail')}
     />
   </View>
  )
}

const DetailScreen=()=>{
  return(
   <View >
     <Text>Detail Screen</Text>
   </View>
  )
}


const Stack =createStackNavigator();

  const App=()=>{
    return(
       <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" options={{title:"Overview"}} component ={HomeScreen} />
        <Stack.Screen name="Detail" conponent={DetailScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
  )
}
export default App;


