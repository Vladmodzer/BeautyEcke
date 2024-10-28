"use client";
import Link from "next/link";
import styles from "./header.module.css";
import BurgerMenuButton from "../heroicons/burger_menu/BurgerMenuButton";
import HeaderContactGroup from "../heroicons/header_contact_group/Header_contact_group";
import MainButton from "../mainButton/MainButton";
import NavLink from "./navLink/NavLink";
import { usePathname } from "next/navigation";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { UseMenu } from "@/app/ClientProvider";

function Header({ onClick, container }) {
  const pathname = usePathname();
  const { t, language } = UseMenu();

  const navItems = [
    { name: t("header.home",language), href: "/" },
    { name: t("header.about",language), href: "/pages/about" },
    { name: t("header.services",language), href: "/pages/services" },
    { name: t("header.contact",language), href: "/pages/contact" },
  ];

  return (
    <header>
      <div className={`${container} `}
      style={ {display:"block"}}
      >
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              <span className={styles.beauty}>Beauty</span>{" "}
              <span className={styles.ecke}>Ecke</span>
            </Link>
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

          <div className={styles.contact_item}>
            <div className={styles.languageBox}>
              <LanguageSelector />
            </div>
            <MainButton 
            label={t("header.button",language)}
            width={"clamp(80px, 25vw, 100px)"} onClick={onClick} />
            <a href="tel:+4917666607523" className={styles.phone}>
              +49 176 66607523
            </a>
          </div>
          <div className={styles.info_box}>
            <HeaderContactGroup />
            <BurgerMenuButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
