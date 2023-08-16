import BookCardList from "./components/BookCardList/BookCardList";
import booksData from "./books.json";
import Header from "./components/Header/Header";

const App = (): JSX.Element => {
  const library = booksData.library;

  return (
    <main>
      <Header />
      <BookCardList library={library} />
    </main>
  );
};

export default App;
