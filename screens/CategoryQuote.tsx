import React from "react";
import { Box, Surface, Text, Icon } from "@react-native-material/core";
import { LinearGradient } from "expo-linear-gradient";

//@ts-ignore
const CategoryQuote = ({ route }) => {
    console.log(route.params);

    const params = route.params;

    return (
        <LinearGradient colors={["#b6fbff", "#83a4d4"]} style={{ flex: 1 }}>
            <Box
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                }}
                p={10}
            >
                <Surface
                    elevation={7}
                    style={{
                        marginBottom: 30,
                        overflow: "hidden",
                        borderRadius: 15,
                    }}
                >
                    <LinearGradient
                        // colors={["#A6FFCB", "#12D8FA", "#1FA2FF"]}
                        colors={["#4ca1af", "#c4e0e5"]}
                        style={{
                            padding: 20,
                        }}
                    >
                        <Text
                            variant="h5"
                            style={{
                                marginBottom: 10,
                                marginTop: 10,
                                textAlign: "center",
                                color: "#fff",
                                fontWeight: "bold",
                            }}
                        >
                            {params.keyword} Quote
                        </Text>
                        <Box
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            p={5}
                        >
                            <Icon name={params.icon} size={50} color="#ffff" />
                        </Box>
                        <Icon
                            name="format-quote-open"
                            size={60}
                            color="#6e6e6e"
                        />
                        <Text
                            variant="body2"
                            style={{
                                marginLeft: 5,
                                color: "white",
                            }}
                        >
                            This is some quote to be displayed on the screen of
                            the phone
                        </Text>
                        <Text
                            variant="caption"
                            style={{
                                alignSelf: "flex-start",
                                marginLeft: 10,
                                marginBottom: 10,
                                marginTop: 10,
                                color: "white",
                            }}
                        >
                            - Author
                        </Text>
                        <Box style={{ alignItems: "flex-end" }}>
                            <Icon
                                name="format-quote-close"
                                size={60}
                                color="#6e6e6e"
                            />
                        </Box>
                    </LinearGradient>
                </Surface>
            </Box>
        </LinearGradient>
    );
};

export default CategoryQuote;
