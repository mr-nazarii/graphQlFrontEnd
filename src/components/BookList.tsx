import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { BOOKS } from "../queries/queries";
import { BookDetails } from "./BookDetails";

export const BookList = () => {
  const { loading, data } = useQuery(BOOKS);

  const [details, setDetails] = useState(null);

  return (
    <div>
      <ul className="book-list">
        {!loading ? (
          data.books.map((book: any) => (
            <li key={book.id} id={book.id} onClick={() => setDetails(book.id)}>
              {book.name}
            </li>
          ))
        ) : (
          <h4>Loading</h4>
        )}
      </ul>
      <BookDetails details={details} />
    </div>
  );
};
