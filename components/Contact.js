import Image from "next/image";
import styles from "./Contact.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export default function Contact({ user }) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <div className={styles.contact__card} onClick={toggle}>
        <Image
          className={styles["contact__card--image"]}
          src={user.picture.large}
          alt={user.name.first + " " + user.name.last}
          width={60}
          height={60}
        />
        <div className={styles["contact__card--text-wrapper"]}>
          <p className={styles["contact__name--text"]}>
            {user.name.first + " " + user.name.last}
          </p>
          <p className={styles["contact__card--location-text"]}>
            {user.location.city + ", " + user.location.state}
          </p>
          <div className={styles["contact__card--expand-arrow"]}>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <div
        className={styles["contact__card_bottom"]}
        style={{
          transform: isShowing ? "translateY(0)" : "translateY(-100%)",
          height: isShowing ? "100px" : "0",
          visibility: isShowing ? "visible" : "hidden",
        }}
      >
        <div className={styles["contact__card_bottom--left"]}>
          <p className={styles["contact__card_bottom--email-title"]}>Email</p>
          <a
            className={styles["contact__card_bottom--email-copy"]}
            href={"mailto:" + user.email}
          >
            {user.email}
          </a>
        </div>
        <div className={styles["contact__card_bottom--right"]}>
          <p className={styles["contact__card_bottom--phone-title"]}>Phone</p>
          <a
            className={styles["contact__card_bottom--phone-copy"]}
            href={"tel:" + user.phone}
          >
            {user.phone}
          </a>
        </div>
      </div>
    </>
  );
}
