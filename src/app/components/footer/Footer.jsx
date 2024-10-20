"use client";
import Link from "next/link";
import styles from "./footer.module.css";
import NavLink from "../header/navLink/NavLink";
import { usePathname } from "next/navigation";
import MainButton from "../mainButton/MainButton";
import HeaderContactGroup from "../heroicons/header_contact_group/Header_contact_group";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/pages/about" },
  { name: "Services", href: "/pages/services" },
  { name: "Contact", href: "/pages/contact" },
];
function Footer({ onClick, container }) {
  const pathname = usePathname();
  return (
    <footer className={styles.footer}>
      <div className={container}>
        <div className={styles.footerBox}>
          <div className={styles.logoBox}>
            <div className={styles.logo}>
              <Link href="/">
                <span className={styles.beauty}>Beauty</span>{" "}
                <span className={styles.ecke}>Ecke</span>
              </Link>
            </div>
            <p>kosmetisch und permanent make up studio</p>
          </div>
          <nav className={styles.nav}>
            <ul>
              {navItems.map((linkName, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      isActive={pathname === linkName.href}
                      title={linkName.name}
                      href={linkName.href}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={styles.buttonBox}>
            <a href="tel:+4917666607523" className={styles.phone}>
              +49 176 66607523
            </a>
            <HeaderContactGroup className={styles.container} />
            <MainButton label={"Get a Consultation"} withIcon={true} width={"100%"} onClick={onClick} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
