"use client";
import Link from "next/link";
import styles from "./footer.module.css";
import NavLink from "../header/navLink/NavLink";
import { usePathname } from "next/navigation";
import MainButton from "../mainButton/MainButton";
import HeaderContactGroup from "../heroicons/header_contact_group/Header_contact_group";
import { UseMenu } from "@/app/ClientProvider";

function Footer({ container }) {
  const pathname = usePathname();

  const { t, language,handleConsultationForm, mapDataToTextContent, } = UseMenu();
  const navItems = [
    { name: t("header.home",language), href: "/" },
    { name: t("header.about",language), href: "/pages/about" },
    { name: t("header.services",language), href: "/pages/services" },
    { name: t("header.contact",language), href: "/pages/contact" },
  ];



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
            <MainButton
               label={mapDataToTextContent("main.buttons.get_consultation")}
               
              withIcon={true}
              width={"100%"}
              onClick={handleConsultationForm}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
