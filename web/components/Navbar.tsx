import { FC } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/dist/client/router";

const Navbar: FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <NavLink href="/" displayName="Heim" currentPath={pathname} />
      <NavLink href="/images" displayName="Bilete" currentPath={pathname} />
      <NavLink href="/area" displayName="Området" currentPath={pathname} />
      <NavLink href="/rent" displayName="Leige" currentPath={pathname} />
      <NavLink
        href="/transport"
        displayName="Transport"
        currentPath={pathname}
      />
    </nav>
  );
};

export default Navbar;

type NavLinkProps = {
  href: string;
  displayName: string;
  currentPath: string;
};

const NavLink: FC<NavLinkProps> = (props) => {
  const { href, displayName, currentPath } = props;
  const isActive = href === currentPath;
  const activeClass = isActive ? styles.active_nav : undefined;
  return (
    <Link href={href}>
      <a className={activeClass}>{displayName}</a>
    </Link>
  );
};
