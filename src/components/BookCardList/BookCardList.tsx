import { LibraryStructure } from "../../types/types";

const BookCardList = ({ library }: LibraryStructure): JSX.Element => {
  return (
    <div>
      <ul>
        {library.map((item, index) => (
          <li key={index}>
            <h2>{item.book.title}</h2>
            <img
              src={item.book.cover}
              alt="Book cover"
              width="100"
              height="100"
            />
            <p>Author: {item.book.author.name}</p>
            <p>Genre: {item.book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCardList;
