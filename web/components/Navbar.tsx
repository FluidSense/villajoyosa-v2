import { FC } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a>Heim</a>
      </Link>
      <Link href='/images'>
        <a>Bilete</a>
      </Link>
      <Link href='/area'>
        <a>Området</a>
      </Link>
      <Link href='/rent'>
        <a>Leige</a>
      </Link>
      <Link href='/transport'>
        <a>Transport</a>
      </Link>
    </nav>
  );
};

export default Navbar;
