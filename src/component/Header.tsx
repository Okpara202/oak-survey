import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-header-bg ">
      <header className="mx-auto lg:w-[80%] w-[80%] md:w-full md:px-10 lg:px-0 flex items-center justify-between font-medium h-[93px]">
        <img src="/oak_logo.svg" alt="Oak Survey Logo" />
        <nav>
          <ul className="sm:flex hidden justify-between items-center gap-10 lg:text-[18px] text-[10px]">
            <li>
              <NavLink
                className={(isActive) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main"
                    : "font-medium"
                }
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(isActive) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main"
                    : "font-medium"
                }
                to="#"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(isActive) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main flex gap-2 mt-5 lg:mt-4 items-center"
                    : "font-medium flex gap-2 mt-4 items-center"
                }
                to="#"
              >
                Our Services <img src="/arrow-down.svg" />
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(isActive) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main"
                    : "font-medium"
                }
                to="#"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="p-4 hidden  rounded-lg bg-brand-main text-white md:flex h-[53px] md:justify-center md:items-center gap-4 font-medium lg:text-[14px] text-[12px]">
          <img src="/call.svg" alt="call icon" />
          ++353 (0)874950977
        </button>

        <FaBars className="sm:hidden text-3xl text-bar" />
      </header>
    </div>
  );
}

export default Header;
