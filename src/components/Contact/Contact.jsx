import css from './Contact.module.css'
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contact, onDelete }) => {
    return (
        <div>
            <li className={css.contactList}>
                <span>{contact.name}</span>
                <FaUser className="userIcon" size={22} />
                <span>{contact.number}</span>
                <FaPhone className="phoneIcon" size={22} />
                <button className={css.contactBtn} onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
        </div>
    );
}

export default Contact