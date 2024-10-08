import { HiPhone, HiUser } from 'react-icons/hi2';
import style from './Contact.module.css';

export default function Contact({ name, number }) {
  return (
    <>
      <div>
        <p className={style.contactInfo}>
          <HiUser />
          {name}
        </p>
        <p className={style.contactInfo}>
          <HiPhone />
          {number}
        </p>
      </div>

      <button type="button">Delete</button>
    </>
  );
}
