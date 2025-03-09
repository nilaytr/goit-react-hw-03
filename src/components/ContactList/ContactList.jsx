import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
    return (
        <div>
            <ul className={css.contactUl}>
                {contacts.length > 0 ? (
                    contacts.map((contact) => (
                        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
                    ))
                ) : (<p>No contacts found.</p>)}
            </ul>
        </div>
    );
}

export default ContactList