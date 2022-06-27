import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BOOK } from "../queries/queries";

export const BookDetails = (props: any) => {
  const { loading, data } = useQuery(GET_BOOK, {
    variables: { id: props.details },
  });

  const detailsOutput = () => {
    if (loading || props.details === null) {
      return null;
    } else {
      const { book } = data;

      return (
        <div>
          <h2>{book.name}</h2>
          <h3>{book.genre}</h3>
          <h4>{book.author.name}</h4>
          <h5>Authors other books:</h5>
          <ul>
            {book.author.books.map((book: any) => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div id={"deatils"}>
      <p>Output book detail here:</p>
      {detailsOutput()}
    </div>
  );
};
