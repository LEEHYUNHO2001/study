import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const GET_TWEET = gql`
  query getTweet($tweetId: ID!) {
    tweet(id: $tweetId) {
      id
      text
    }
  }
`;

const Movie = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_TWEET, {
    variables: {
      tweetId: 1,
    },
  });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return <div>Tweet : {data.tweet.text}</div>;
};

export default Movie;
