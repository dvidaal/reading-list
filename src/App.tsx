import BookCardList from "./components/BookCardList/BookCardList";
import booksData from "./books.json";

const App = (): JSX.Element => {
  const library = booksData.library;

  return (
    <div>
      <h1>List of Books</h1>
      <BookCardList library={library} />
    </div>
  );
};

export default App;
