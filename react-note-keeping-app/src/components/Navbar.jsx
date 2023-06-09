import { Icon, Fav, Add, Login, Logout } from "./Sources";
import { Link } from "react-router-dom";
import { IndigoGradient } from "./Sources";
import { Outlet } from "react-router-dom";

const NavBarCom = () => {
  return (
    <div
      className={`flex justify-between px-5 py-3 border-0 ${IndigoGradient}`}
    >
      <Link className="w-[30px] h-[30px]" to="/">
        <img className="w-[30px] h-[30px]" src={Icon} alt="" />
      </Link>

      <nav className="flex gap-5 ">
        <Link to="/imp">
          <img
            className="w-[20px] h-[20px]"
            title="important notes"
            src={Fav}
            alt="heart"
          />
        </Link>
        <Link to="/addnote">
          <img className="w-[20px] h-[20px]" src={Add} alt="plus" />
        </Link>
        <Link to="/">
          <img className="w-[20px] h-[20px]" src={Login} alt="log-out" />
        </Link>
        <Link to="/">
          <img className="w-[20px] h-[20px]" src={Logout} alt="log-in" />
        </Link>
      </nav>
    </div>
  );
};

function Navbar() {
  return (
    <>
      <NavBarCom />
      <Outlet />
    </>
  );
}

export default Navbar;
