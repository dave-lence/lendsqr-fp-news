import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";

import ListingsCard from "../Components/Listings/ListingsCard";
import Screen from "../Config/Screen";
import Topics from "../Components/Listings/Topics";
import Routes from "../Navigation/Routes";

const initialListings = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1138499981/photo/judges-or-auctioneer-gavel-on-the-dollar-cash-background-top-view-close-up-concept-for.webp?b=1&s=170667a&w=0&k=20&c=DaeiqzLh7ZdeJeEDl-Zm3a_gjz7KXgh9rolwePn7jWc=",
    topic: "Politics",
    title: "Judge collected bribe to cover corruption",
    date: "4 hours age",
    author: "David Nwudo",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1596306499317-8490232098fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    topic: "Events",
    title: "Judge collected bribe to cover corruption",
    date: "4 hours age",
    author: "David Nwudo",
  },
];

const ListingScreen = ({ navigation }) => {
  const [newsListings, setNewsListings] = useState(initialListings);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <Screen>
      {/* news topics */}

      {/* <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={newsListings}
        key={(topic) => topic.id.toString()}
        renderItem={({ item }) => (
          <Topics topic={item.topic} onPress={() => console.log(item)} />
        )}
      /> */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {newsListings.map((topic, index) => (
          <Topics key={index} topic={topic.topic} />
        ))}
      </ScrollView>

      {/* news listings */}
      <FlatList
        data={newsListings}
        keyExtractor={(list) => list.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListingsCard
            image={item.image}
            topic={item.topic}
            date={item.date}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate(Routes.listingsDetails, item)}
          />
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setNewsListings([
            {
              id: 4,
              image:
                "https://media.istockphoto.com/id/1326528501/photo/portrait-of-beautiful-mixed-race-senior-woman-spending-time-with-her-adult-daughter-outdoors.webp?b=1&s=170667a&w=0&k=20&c=3NlRp4nXaCKOo5ZzHEwebucLv8qBGz0MqilLJPMVHMk=",
              topic: "Health",
              title: "Judge collected bribe to cover corruption",
              date: "4 hours age",
              author: "David Nwudo",
            },
            {
              id: 5,
              image:
                "https://media.istockphoto.com/id/1347068324/photo/virginia-dawn.webp?b=1&s=170667a&w=0&k=20&c=h0BT4x9h4-zriV_n7bTf18Qrp5kI15WrViMRysk_FN8=",
              topic: "Residency",
              title: "Judge collected bribe to cover corruption",
              date: "4 hours age",
              author: "David Nwudo",
            },
            {
              id: 6,
              image:
                "https://images.unsplash.com/photo-1642098397676-c477ebc0bc02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2VkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
              topic: "Covid 19",
              title:
                "Covid is becoming more threatening as vaccins become scarce",
              date: "4 hours age",
              author: "David Nwudo",
            },
            {
              id: 7,
              image:
                "https://media.istockphoto.com/id/1403708818/photo/car-traffic-at-flooded-street-on-heavy-rain.webp?b=1&s=170667a&w=0&k=20&c=5oHm_bupmHfo6qUJwvyA-clR4HBe1imcK8bHZauqNd8=",
              topic: "Enviroment",
              title: "Flood hits Ukrain hard, sending residence away",
              date: "4 hours age",
              author: "David Nwudo",
            },
          ])
        }
      />
    </Screen>
  );
};

export default ListingScreen;
