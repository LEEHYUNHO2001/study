import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";

const ALL_TWEETS = gql`
  query getTweets {
    allTweets {
      id
      text
      author {
        fullname
      }
    }
    # 다른 query 추가 가능
  }
`;

const Movies = () => {
  const { data: tweets, loading, error } = useQuery(ALL_TWEETS);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <ul>
      {tweets.allTweets.map((tweet) => {
        const { id, text } = tweet;
        return (
          <li key={`tweet-${id}`}>
            <Link to={`/movies/${id}`}>{text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Movies;
