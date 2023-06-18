import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import ListingsCard from "../Components/Listings/ListingsCard";
import Screen from "../Config/Screen";
import Topics from "../Components/Listings/Topics";
import Routes from "../Navigation/Routes";
import AppText from "../Components/AppText";

const ListingScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [getNews, setGetNews] = useState([]);

  useEffect(() => {
    fetchNews();
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
        "X-RapidAPI-Key": "ff573017c4mshe5b6afc0854a739p11d768jsneeca9256e979",
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


<AppText style={{fontSize:24, fontWeight:"bold", marginVertical:20}}>Breaking News</AppText>
      {/* news listings */}
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
    </Screen>
  );
};

export default ListingScreen;
