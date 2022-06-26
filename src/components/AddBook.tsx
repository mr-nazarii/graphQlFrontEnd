import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { ADD_BOOK, AUTHORS, BOOKS } from "../queries/queries";

export const AddBook = () => {
  const { loading, data } = useQuery(AUTHORS);

  const [inputs, setInputs] = useState({ name: "", genre: "", authorId: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };
  const [addBook] = useMutation(ADD_BOOK);
  return (
    <form
      id="add-book"
      onSubmit={(e) => {
        e.preventDefault();
        if (
          inputs.authorId === "" ||
          inputs.authorId === "selectAuthor" ||
          inputs.name === "" ||
          inputs.genre === ""
        )
          return;
        addBook({ variables: inputs, refetchQueries: [{ query: BOOKS }] });
        console.log(inputs);
      }}
    >
      <div className="field">
        <label>Book name:</label>
        <br />
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <br />
        <input name="genre" type="text" onChange={handleChange} />
      </div>
      <div className="field">
        <label>Authors:</label>
        <br />

        <select
          defaultValue="selectAuthor"
          name="authorId"
          onChange={handleChange}
        >
          <option value={"selectAuthor"} key={"selectAuthor"}>
            Select author
          </option>
          {!loading ? (
            data.authors.map((author: any) => (
              <option value={author.id} key={author.id}>
                {author.name}
              </option>
            ))
          ) : (
            <option disabled>Loading Authors ..</option>
          )}
        </select>
      </div>
      <button type="submit">+</button>
    </form>
  );
};
