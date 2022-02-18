import Link from "next/link";
import Image from "next/image";
import home from "./home.svg"; // SVGs must be used as JSX in Image components
import styles from "./NavBar.module.css";

function NavBar({ theme }) {
  console.log(theme);
  return (
    <nav className={`${theme === "light" ? styles.navLight : styles.navDark}`}>
      <Link href="/">
        <a>
          <Image
            className={styles.navIcon}
            src={home}
            alt="Homepage"
            height={30}
            width={30}
          ></Image>
        </a>
      </Link>
      <Link href="/fitness">
        <a> /Fitness</a>
      </Link>
      <Link href="/recipes">
        <a> /Recipes</a>
      </Link>
      <Link href="/goals">
        <a> /Goals</a>
      </Link>
      <Link href="/progress">
        <a> /Progress</a>
      </Link>
    </nav>
  );
}

export default NavBar;
