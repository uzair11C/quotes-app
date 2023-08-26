import React from "react";
import { Pressable, Text, Icon, Box } from "@react-native-material/core";

//@ts-ignore
const Categories = ({ navigation }) => {
    const categoriesArray = [
        { id: 1, title: "Age", icon: "account-clock" },
        { id: 2, title: "Alone", icon: "account-off" },
        { id: 3, title: "Amazing", icon: "star-shooting" },
        { id: 4, title: "Anger", icon: "emoticon-angry" },
        { id: 5, title: "Architecture", icon: "office-building" },
        { id: 6, title: "Art", icon: "palette" },
        { id: 7, title: "Attitude", icon: "emoticon-confused" },
        { id: 8, title: "Beauty", icon: "face-woman-shimmer" },
        { id: 9, title: "Best", icon: "trophy-variant" },
        { id: 10, title: "Birthday", icon: "cake-variant" },
        { id: 11, title: "Business", icon: "briefcase" },
        { id: 12, title: "Car", icon: "car-sports" },
        { id: 13, title: "Change", icon: "cog-refresh" },
        { id: 14, title: "Communications", icon: "message-text" },
        { id: 15, title: "Computers", icon: "desktop-tower-monitor" },
        { id: 16, title: "Cool", icon: "emoticon-cool" },
        { id: 17, title: "Courage", icon: "sword-cross" },
        { id: 18, title: "Dad", icon: "human-male-child" },
        { id: 19, title: "Dating", icon: "heart" },
        { id: 20, title: "Death", icon: "skull-crossbones" },
        { id: 21, title: "Design", icon: "draw-pen" },
        { id: 22, title: "Dreams", icon: "moon-waning-crescent" },
        { id: 23, title: "Education", icon: "school" },
        { id: 24, title: "Environmental", icon: "leaf" },
        { id: 25, title: "Equality", icon: "account-group" },
        { id: 26, title: "Experience", icon: "lightbulb-on" },
        { id: 27, title: "Failure", icon: "emoticon-cry" },
        { id: 28, title: "Faith", icon: "church" },
        { id: 29, title: "Family", icon: "home-group" },
        { id: 30, title: "Famous", icon: "star-face" },
        { id: 31, title: "Fear", icon: "emoticon-frown" },
        { id: 32, title: "Fitness", icon: "dumbbell" },
        { id: 33, title: "Food", icon: "food" },
        { id: 34, title: "Forgiveness", icon: "handshake" },
        { id: 35, title: "Freedom", icon: "flag" },
        { id: 36, title: "Friendship", icon: "account-multiple" },
        { id: 37, title: "Funny", icon: "emoticon-lol" },
        { id: 38, title: "Future", icon: "crystal-ball" },
        { id: 39, title: "God", icon: "cloud-braces" },
        { id: 40, title: "Good", icon: "thumb-up" },
        { id: 41, title: "Government", icon: "city-variant" },
        { id: 42, title: "Graduation", icon: "school" },
        { id: 43, title: "Great", icon: "check-decagram" },
        { id: 44, title: "Happiness", icon: "emoticon-happy" },
        { id: 45, title: "Health", icon: "heart-pulse" },
        { id: 46, title: "History", icon: "book-open-page-variant" },
        { id: 47, title: "Home", icon: "home" },
        { id: 48, title: "Hope", icon: "bird" },
        { id: 49, title: "Humor", icon: "emoticon" },
        { id: 50, title: "Imagination", icon: "head-lightbulb" },
        { id: 51, title: "Inspirational", icon: "lightbulb-on" },
        { id: 52, title: "Intelligence", icon: "brain" },
        { id: 53, title: "Jealousy", icon: "emoticon-sad" },
        { id: 54, title: "Knowledge", icon: "book-alphabet" },
        { id: 55, title: "Leadership", icon: "account-tie" },
        { id: 56, title: "Learning", icon: "book-open-variant" },
        { id: 57, title: "Legal", icon: "gavel" },
        { id: 58, title: "Life", icon: "heart" },
        { id: 59, title: "Love", icon: "heart" },
        { id: 60, title: "Marriage", icon: "human-male-female" },
        { id: 61, title: "Medical", icon: "medical-bag" },
        { id: 62, title: "Men", icon: "human-queue" },
        { id: 63, title: "Mom", icon: "human-female-boy" },
        { id: 64, title: "Money", icon: "cash-multiple" },
        { id: 65, title: "Morning", icon: "weather-sunset-up" },
        { id: 66, title: "Movies", icon: "filmstrip" },
        { id: 67, title: "Success", icon: "thumb-up" },
    ];

    return (
        <Box
            style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                marginTop: 20,
                marginBottom: 20,
            }}
        >
            {categoriesArray &&
                categoriesArray.map((category) => (
                    <Pressable
                        style={{
                            width: 165,
                            // height: 80,
                            backgroundColor: "#15f4ee",
                            borderRadius: 8,
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: 15,
                            paddingBottom: 15,
                            overflow: "hidden",
                        }}
                        // pressEffect="ripple"
                        key={category.id}
                        onPress={() => {
                            navigation.navigate("Quote", {
                                keywordId: category.id,
                                keyword: category.title,
                                icon: category.icon,
                            });
                        }}
                    >
                        <Icon name={category.icon} size={30} />
                        <Text variant="subtitle1">{category.title}</Text>
                    </Pressable>
                ))}
        </Box>
    );
};

export default Categories;
