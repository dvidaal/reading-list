import { LibraryStructure } from "../../types/types";
import "./BookCardList.css";

const BookCardList = ({ library }: LibraryStructure): JSX.Element => {
  return (
    <div className="container-list">
      <ul className="books-list">
        {library.map((item, index) => (
          <li key={index}>
            <h2>{item.book.title}</h2>
            <img
              src={item.book.cover}
              alt="Book cover"
              width="100"
              height="150"
              className="books-list__covers"
            />
            <p className="books-list__author"> {item.book.author.name}</p>
            <p className="books-list__genre"> {item.book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCardList;
