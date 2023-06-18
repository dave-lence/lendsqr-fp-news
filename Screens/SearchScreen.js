import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

//custom files
import Screen from "../Config/Screen";
import AppText from "../Components/AppText";
import colors from "../Config/colors";
import SearchInput from "../Components/Search/SearchInput";
import SearchCards from "../Components/Search/SearchCards";
import Topics from "../Components/Listings/Topics";
import Routes from "../Navigation/Routes";

const SearchScreen = ({ navigation }) => {
  const [getNews, setGetNews] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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

  const handleFilter = (text) => {
    const filteredItem = getNews.articles.filter((item) =>
      item.title.includes(text)
    );
    setFilteredData(filteredItem);
   
  };

  return (
    <Screen>
      <AppText style={{ fontWeight: "bold", fontSize: 24, marginTop: 30 }}>
        Discover
      </AppText>
      <AppText
        style={{ fontWeight: "500", fontSize: 14, color: colors.medium }}
      >
        News from around the world
      </AppText>

      {/* search Input */}
      <SearchInput onChangeText={handleFilter} />

      {/* news topics */}

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        maxToRenderPerBatch={5}
        data={getNews.articles}
        key={(item) => item.id}
        renderItem={({ item }) => <Topics key={item.id} topic={item.topic} />}
      />
      

      {/* rendered data */}
      <View style={{ marginVertical: 30, }}>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          maxToRenderPerBatch={5}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <SearchCards
              key={item.id}
              image={item.media}
              topic={item.topic}
              date={item.published_date}
              author={item.author}
              title={item.title}
              onPress={() => navigation.navigate(Routes.listingsDetails, item)}
            />
          )}
        />
      </View>
    </Screen>
  );
};

export default SearchScreen;
