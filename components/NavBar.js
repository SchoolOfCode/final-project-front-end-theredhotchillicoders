import Link from "next/link";

const NavBar = () => {
  return (
    <div className="NAV">
      <nav>
        <Link href="/">
          <a> /Dashboard</a>
        </Link>
        <a> /Wellbeing</a>
        <Link href="/fitness">
          <a> /Fitness</a>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
