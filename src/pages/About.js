import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Entertainment Hub</Typography>
        <p>
        A movie search app can be a great way to discover and explore all kinds of movies. 
        You can search by genre, actors, directors, or even specific keywords. The app can
        provide you with information about the movie, such as its plot, release date, ratings, 
        and even show you where you can stream or purchase it. You can also create a personalized
        watchlist and keep track of the movies you're interested in. Additionally, it could offer 
        recommendations based on your preferences and previous movie choices. The possibilities are endless!
        </p>
        <br />
        <p>
        Apart from the features I mentioned earlier, the app can also include a user-friendly interface,
         making it easy and enjoyable to navigate through various movie options. You may have the option 
         to filter your search results based on criteria like release year, language, or even runtime. 
         The app could also display movie trailers, reviews, and provide you with the option to share your 
         favorite films with friends or on social media. Another cool feature could be a "random movie" 
         option for when you're feeling indecisive or want to discover something completely new.
        </p>
      </Box>
    </Layout>
  );
};

export default About;