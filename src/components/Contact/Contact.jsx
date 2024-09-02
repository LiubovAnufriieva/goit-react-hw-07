import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps"  
import { useDispatch } from "react-redux";

const Contact = ({id, name, number}) => {
  const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <div className={css.text}>
        <p>
          <FaUser className={css.contactIcon} /> {name}
        </p>

        <p>
          <FaPhone className={css.contactIcon} /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
