import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

export default function ContactList({ contacts }) {
  return (
    <ul className={style.contactList}>
      {contacts.map(contact => (
        <li className={style.contactItem} key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
}
