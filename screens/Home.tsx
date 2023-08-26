import React, { useState } from "react";
import { Box, Surface, Text, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Categories from "../components/Categories";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native";
import axios from "axios";

//@ts-ignore
const Home = ({ navigation }) => {
    const [quoteOfTheDay, setQuoteOfTheDay] = useState({});
    const [localQuote, setLocalQuote] = useState({});

    const api_key = process.env.REACT_NATIVE_API_KEY;

    const fetchQuote = async () => {
        const options = {
            method: "GET",
            url: "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote",
            params: {
                token: "ipworld.info",
            },
            headers: {
                "X-RapidAPI-Key": api_key,
                "X-RapidAPI-Host":
                    "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
            },
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadQuote = async () => {
        const value = await AsyncStorage.getItem("Quote-of-the-day");

        if (
            value !== null &&
            value !== undefined &&
            typeof value === "string"
        ) {
            const jsonValue = JSON.parse(value);

            setLocalQuote(jsonValue);
        }

        if (localQuote === null || localQuote === "") {
            fetchQuote();
        } else {
            setQuoteOfTheDay(loadQuote);
        }
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <LinearGradient colors={["#1A2980", "#26D0CE"]} style={{ flex: 1 }}>
                <Box
                    style={{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flex: 1,
                    }}
                    mt={10}
                    p={10}
                    pt={20}
                >
                    <Surface
                        elevation={5}
                        style={{
                            marginBottom: 30,
                            overflow: "hidden",
                            borderRadius: 15,
                        }}
                    >
                        <LinearGradient
                            // colors={["#A6FFCB", "#12D8FA", "#1FA2FF"]}
                            colors={["#00c6ff", "#0072ff"]}
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
                                    fontWeight: "bold",
                                }}
                            >
                                Quote of the Day
                            </Text>
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
                                This is some quote to be displayed on the screen
                                of the phone
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
                    <Text
                        variant="h5"
                        style={{
                            marginBottom: 20,
                            marginTop: 10,
                            textAlign: "center",
                            color: "white",
                        }}
                    >
                        Want to get more quotes?
                    </Text>
                    <Text
                        variant="h6"
                        style={{
                            textAlign: "center",
                            fontWeight: "normal",
                            color: "white",
                        }}
                    >
                        See our different categories
                    </Text>
                    <Categories navigation={navigation} />
                </Box>
            </LinearGradient>
        </ScrollView>
    );
};

export default Home;
