import styles from "./Header.module.scss";
import { MdMenu } from "react-icons/md";

export default function Header({ title }) {
  return (
    <div className={styles.header}>
      <div className={styles.header__icon}>
        <MdMenu />
      </div>
      <h3 className="title">{title}</h3>
    </div>
  );
}
