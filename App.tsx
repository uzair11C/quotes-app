import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Home from "./screens/Home";
import CategoryQuote from "./screens/CategoryQuote";

export default function App() {
    const NavStack = createNativeStackNavigator();

    return (
        // <View
        // //style={styles.container}
        // >
        // @ts-ignore
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <NavigationContainer>
                <NavStack.Navigator>
                    <NavStack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerStyle: {
                                backgroundColor: "#0066b2",
                            },
                            headerTintColor: "#fff",
                        }}
                    />
                    <NavStack.Screen
                        name="Quote"
                        component={CategoryQuote}
                        options={{
                            headerStyle: {
                                backgroundColor: "#B0C4DE",
                            },
                            //headerTintColor: "#fff",
                        }}
                    />
                </NavStack.Navigator>
            </NavigationContainer>
        </IconComponentProvider>
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
