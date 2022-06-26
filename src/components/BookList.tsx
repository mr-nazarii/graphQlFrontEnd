import { useQuery } from "@apollo/client";
import React from "react";
import { BOOKS } from "../queries/queries";

export const BookList = () => {
  const { loading, data } = useQuery(BOOKS);

  return (
    <div>
      <ul className="book-list">
        {!loading ? (
          data.books.map((book: any) => (
            <li key={book.id} id={book.id}>
              {book.name}
            </li>
          ))
        ) : (
          <h4>Loading</h4>
        )}
      </ul>
    </div>
  );
};
