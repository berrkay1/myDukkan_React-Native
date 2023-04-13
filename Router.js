import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "./src/pages/Product/Product";
import Detail from "./src/pages/Detail/Detail";
import Login from "./src/pages/Login/Login";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
         name="LoginScreen"
          component={Login}
          options={
            {
             headerShown:false
            }
          }
          />
        <Stack.Screen
         name="ProductScreen"
          component={Product}
          options={
            {
              title:'Dükkan',
              headerStyle:{backgroundColor:'#64b5f6',},
              headerTitleStyle:{color:'white'},
              headerTitleAlign: 'center',
            }
          }
          />
        <Stack.Screen

         name="DetailScreen"
          component={Detail}
          options={
            {
              title:'Detay',
              headerStyle:{backgroundColor:'#64b5f6',},
              headerTitleStyle:{color:'white'},
              headerTitleAlign: 'center',
            }
          }
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
