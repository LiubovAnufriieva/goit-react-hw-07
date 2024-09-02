import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import css from "./App.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from "../redux/contactsOps";
import { selectLoading, selectError } from "../redux/contactsSlice";
import Loader from "./Loader/Loader";


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader>Request in progress...</Loader>}
      {isError && <p>Oooops... Something went wrong</p>}
      <div className={css.wrapper}>
            <ContactList />
      </div>
    </div>
  );
}

export default App;
