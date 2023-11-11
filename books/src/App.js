import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'
import BooksContext from './context/books'

function App() {
  const { fetchBooks } = useContext(BooksContext)
  useEffect(() => {
    const listener = () => {
      console.log("hi");
    };

    document.body.addEventListener("click", listener);
    fetchBooks();

    return () => {
      document.body.removeEventListener("click", listener);
    };

  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  )
};

export default App;
