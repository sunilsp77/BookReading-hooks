import React, { createContext, useReducer } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

// { title: "name of the wind", author: "patrick rothfuss", id: 1 },
//     { title: "the final empire", author: "brandon sanderson", id: 2 },
const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
