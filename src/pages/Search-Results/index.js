import React from "react";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs.js";
import Search from "components/Search";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Search />
          <ListOfGifs params={gifs} />
        </>
      )}
    </>
  );
}
