/* eslint-disable object-curly-newline */
import { gql, useQuery } from '@apollo/client';
import React from 'react';

interface Props {}

const GET_ANIME = gql`
  query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, search: $search) {
        id
        title {
          romaji
        }
      }
    }
  }
`;

const Graphql = ({}: Props) => {
  const variables = {
    search: 'One Piece',
    page: 1,
    perPage: 20,
  };

  const { loading, error, data } = useQuery(GET_ANIME, { variables });

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.log('Error: ', error);
    return <div>Something bad happened. Refresh the page to try again.</div>;
  }
  const media = data.Page.media;

  console.log('data: ', media);

  return (
    <div>
      {media.map((row: any) => (
        <div key={row.id}>{row.title.romaji}</div>
      ))}
    </div>
  );

  // const url = 'https://graphql.anilist.co',
  //   options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: query,
  //       variables: variables,
  //     }),
  //   };

  // useEffect(() => {
  //   fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
  // }, [variables, query]);

  // return <div>halo</div>;
};

export default Graphql;
