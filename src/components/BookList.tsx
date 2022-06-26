import { gql } from "@apollo/client";
import { graphql } from "@apollo/react-hoc";
import { log } from "console";
import React from "react";

const BookL = ({ data: { loading, books } }: any) => {
  return (
    <div>
      <ul className="book-list">
        {!loading ? (
          books.map((book: any) => (
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

export default graphql(gql`
  query getBooksQuery {
    books {
      name
      id
    }
  }
`)(BookL);
