import { NavLink } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Books' },
  { path: 'Categories', text: 'Categories' },
];
const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.links}>
      <span className={styles.title}>Bookstore CMS</span>
      <ul className={styles.navList}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} className={styles.navLink}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    <IoMdContact className={styles.icon} />
  </nav>
);
export default Navbar;
