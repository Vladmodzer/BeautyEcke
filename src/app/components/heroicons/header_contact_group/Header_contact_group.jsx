import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faViber } from '@fortawesome/free-brands-svg-icons';
import { PhoneIcon } from "@heroicons/react/24/outline"; // Иконка телефона из Heroicons
import Link from 'next/link'; // Импортируем Link из Next.js
import styles from "./header_contact_group.module.css";

function HeaderContactGroup({className,iconStyle}) {
  return (
    <div className={className? className : styles.container}>

      <Link href="viber://chat?number=YOUR_VIBER_NUMBER" className={styles.link} aria-label="Viber">
        <FontAwesomeIcon icon={faViber} className={`${iconStyle? iconStyle:styles.icon} text-purple-500`} aria-hidden="true" />
      </Link>

 
      <Link href="https://wa.me/YOUR_WHATSAPP_NUMBER" className={styles.link} aria-label="WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} className={`${iconStyle? iconStyle:styles.icon} text-green-500`} aria-hidden="true" />
      </Link>


      <Link href="tel:+YOUR_PHONE_NUMBER" className={styles.link} aria-label="Phone">
        <PhoneIcon className={`${iconStyle? iconStyle:styles.icon} text-gray-500`} aria-hidden="true" />
      </Link>
    </div>
  );
}

export default HeaderContactGroup;
