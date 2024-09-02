import { useSelector } from "react-redux";
import {selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.item}>
      {visibleContacts.map((item) => (
        <li className={css.item} key={item.id}>
          <Contact name={item.name} number={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
