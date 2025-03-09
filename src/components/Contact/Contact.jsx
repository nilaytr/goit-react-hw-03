const Contact = ({ contact, onDelete }) => {
    return (
        <div>
            <li>
                <span>{contact.name}</span>
                <span>{contact.number}</span>
                <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
        </div>
    );
}

export default Contact