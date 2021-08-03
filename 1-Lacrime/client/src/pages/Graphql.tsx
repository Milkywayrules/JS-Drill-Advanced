import React, { useState } from 'react';
import { useGetTrendingAnimeQuery } from '../generated/graphql';

interface Props {}

const Graphql = ({}: Props) => {
  const [currPage, setCurrPage] = useState(1);

  const variables = {
    // search: 'toaru kagaku no railgun',
    // search: 'One Piece',
    page: currPage,
    perPage: 5,
  };

  const { loading, error, data } = useGetTrendingAnimeQuery({ variables });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something bad happened. Refresh the page to try again.</div>;

  const allMedia = data?.Page?.media;
  const pageInfo = data?.Page?.pageInfo;

  // console.log('pageInfo: ', pageInfo);
  // console.log('media: ', allMedia);

  return (
    <div>
      <button onClick={() => setCurrPage(currPage + 1)}>add</button>
      {allMedia?.map((row: any) => (
        <div key={row.id}>{row.title.romaji}</div>
      ))}
    </div>
  );
};

export default Graphql;
