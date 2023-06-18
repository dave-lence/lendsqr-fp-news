import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "../apis";

import ListingsCard from "../Components/Listings/ListingsCard";
import Screen from "../Config/Screen";
import Routes from "../Navigation/Routes";
import AppText from "../Components/AppText";
import colors from "../Config/colors";

const ListingScreen = ({ navigation }) => {
  const [getNews, setGetNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleError = () => {
    throw new Error("Runtime Error!")
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      fetchNews();
    }, 3000);
  }, []);

  const fetchNews = async () => {
    const options = {
      method: "GET",
      url: "https://covid-19-news.p.rapidapi.com/v1/covid?q=covid",
      params: {
        q: "covid",
        lang: "en",
        media: "True",
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "covid-19-news.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setGetNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AppText
          style={{ fontSize: 24, fontWeight: "bold", marginVertical: 20 }}
        >
          Breaking News
        </AppText>

        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            padding: 10,
            borderRadius: 5,
            justifyContent:"center",
            alignItems:"center"
          }}
          activeOpacity={0.7}
          onPress={handleError}
        >
          <Text style={{color:colors.white}}>Runtime error</Text>
        </TouchableOpacity>
      </View>
      {/* news listings */}
      {loading ? (
        <ActivityIndicator color={colors.primary} size={50} />
      ) : (
        <FlatList
          data={getNews.articles}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={5}
          renderItem={({ item }) => (
            <ListingsCard
              key={item.id}
              image={item.media}
              topic={item.topic}
              date={item.published_date}
              title={item.title}
              author={item.author}
              onPress={() => navigation.navigate(Routes.listingsDetails, item)}
            />
          )}
        />
      )}
    </Screen>
  );
};

export default ListingScreen;
