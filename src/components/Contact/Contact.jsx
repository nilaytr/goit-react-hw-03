import css from './Contact.module.css'

const Contact = ({ contact, onDelete }) => {
    return (
        <div>
            <li className={css.contactList}>
                <span>{contact.name}</span>
                <span>{contact.number}</span>
                <button className={css.contactBtn} onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
        </div>
    );
}

export default Contact