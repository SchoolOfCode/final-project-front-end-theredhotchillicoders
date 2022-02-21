import Link from "next/link";
import Image from "next/image";
import HomeIcon from "./Icons/HomeIcon";
import styles from "./NavBar.module.css";
import FitnessIcon from "./Icons/FitnessIcon";
import RecipesIcon from "./Icons/RecipesIcon";
//Colour definitions (ideally should be stored in themes and imported)
const darkBlue = "#0a2342";
const cream = "#fdf7ec";

function NavBar({ theme }) {
  return (
    <nav className={`${theme === "light" ? styles.navLight : styles.navDark}`}>
      <Link href="/">
        <a>
          <HomeIcon
            width="3rem"
            height="3rem"
            fill={`${theme === "light" ? cream : darkBlue}`} //Conditional CSS rendering to change icon colours based on darkmode
          ></HomeIcon>
        </a>
      </Link>
      <Link href="/fitness">
        <a> <FitnessIcon
          width="3rem"
            height="3rem"
            fill={`${theme === "light" ? cream : darkBlue}`}
        /></a>
      </Link>
      <Link href="/recipes">
        <a><RecipesIcon
          width="3rem"
            height="3rem"
            fill={`${theme === "light" ? cream : darkBlue}`}
        /></a>
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
