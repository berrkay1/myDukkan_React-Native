import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "./src/pages/Product/Product";
import Detail from "./src/pages/Detail/Detail";
import Login from "./src/pages/Login/Login";
import { useSelector } from "react-redux";
import Loading from "./src/components/Loading";

const Stack = createNativeStackNavigator();

export default function Router() {
  const userSesion = useSelector((s) => s.user);
  const isAuthLoading = useSelector((s) => s.isAuthLoading);

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSesion ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <>
            <Stack.Screen
              name="ProductScreen"
              component={Product}
              options={{
                title: "Dükkan",
                headerStyle: { backgroundColor: "#64b5f6" },
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="DetailScreen"
              component={Detail}
              options={{
                title: "Detay",
                headerStyle: { backgroundColor: "#64b5f6" },
                headerTitleStyle: { color: "white" },
                headerTitleAlign: "center",
              }}
            />
          </>
        </Stack.Navigator>
      )}
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
