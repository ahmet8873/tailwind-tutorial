import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="absolute padding-x py-8 w-full z-10">
      <nav>
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={150} />
        </a>
      </nav>
    </header>
  );
};

export default Nav;
