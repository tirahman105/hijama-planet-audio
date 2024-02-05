import Container from "../ui/Container";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  //   const navItems = (
  //     <>
  //       <li className="text-blue-700 hover:bg-blue-600 hover:text-white rounded-md">
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li className="text-blue-700 hover:bg-blue-600 hover:text-white rounded-md">
  //         <Link to="/">Our Services</Link>
  //       </li>
  //     </>
  //   );
  return (
    <div
      className="bg-blue-50 shadow-md"
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/04/24/19/47/360_F_424194700_YLn8PuaiqR36LI84T9E76ATDd6HrU2at.jpg')`,
      }}
    >
      <Container>
        <div className="flex justify-center items-center py-4">
          <div className="text-center justify-center items-center flex flex-col">
            <img className="h-[100px] w-[120px]" src={logo} alt="" />

            <h1 className="text-xl font-semibold">
              Best Hijama & Ruqiya in Bangladesh
            </h1>
          </div>
        </div>
      </Container>
      {/* <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>

          <img className="h-[100px] w-auto" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-blue-600 text-white hover:bg-transparent hover:border-blue-700 hover:text-blue-700">
            Get Appointment
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
