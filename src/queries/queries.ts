import { gql } from "@apollo/client";

export const AUTHORS = gql`
  query getAuthorsQuery {
    authors {
      name
      id
    }
  }
`;

export const BOOKS = gql`
  query getBooksQuery {
    books {
      name
      id
    }
  }
`;

export const GET_BOOK = gql`
  query getBookQuery($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBookMutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
