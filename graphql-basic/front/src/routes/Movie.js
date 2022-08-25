import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const GET_TWEET = gql`
  query getTweet($tweetId: ID!) {
    tweet(id: $tweetId) {
      id
      text
      isLiked @client
    }
  }
`;

const Movie = () => {
  const { id } = useParams();

  const onClick = () => {
    cache.writeFragment({
      id: `Tweet:${id}`,
      fragment: gql`
        fragment TweetFragment on Tweet {
          isLiked
        }
      `,
      data: {
        isLiked: !data.tweet.isLiked,
      },
    });
  };

  const {
    data,
    loading,
    error,
    client: { cache },
  } = useQuery(GET_TWEET, {
    variables: {
      tweetId: id,
    },
  });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <div>
      <p>Tweet : {data.tweet.text}</p>
      <button onClick={onClick}>
        {data.tweet.isLiked ? "Unlike" : "like"}
      </button>
    </div>
  );
};

export default Movie;
