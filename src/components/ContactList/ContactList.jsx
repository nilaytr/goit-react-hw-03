import Contact from '../Contact/Contact.jsx';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <div>
            <ul>
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