import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  return (
    <div className="bg-header-bg">
      <header className="z-50 mx-auto w-[90%] sm:w-[85%] md:w-full md:px-10 lg:w-[80%] lg:px-0 flex items-center justify-between font-medium h-[93px] relative">
        <Link to="." onClick={closeMenu}>
          <img
            src="/oak_logo.svg"
            alt="Oak Survey Logo"
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        <nav className="hidden sm:block">
          <ul className="flex justify-between items-center gap-6 md:gap-8 lg:gap-10 md:text-[14px] lg:text-[18px]">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main"
                    : "font-medium hover:text-brand-main transition-colors"
                }
                to="."
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main"
                    : "font-medium hover:text-brand-main transition-colors"
                }
                to="About"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main flex gap-2 items-center"
                    : "font-medium flex gap-2 items-center hover:text-brand-main transition-colors"
                }
                to="Services"
              >
                Our Services
                <img
                  src="/arrow-down.svg"
                  alt=""
                  className="w-3 h-3 lg:w-4 lg:h-4"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main"
                    : "font-medium hover:text-brand-main transition-colors"
                }
                to="Contact"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className="p-3 md:p-4 hidden  rounded-lg bg-brand-main text-white lg:flex h-12 md:h-[53px] justify-center items-center gap-2 md:gap-4 font-medium text-[12px] md:text-[13px] lg:text-[14px] hover:bg-opacity-90 transition-all whitespace-nowrap">
          <img
            src="/call.svg"
            alt="call icon"
            className="w-4 h-4 lg:w-5 lg:h-5"
          />
          +353 (0)874950977
        </button>

        {/* Mobile menu toggle */}
        <button
          onClick={handleToggleMenu}
          className="sm:hidden text-3xl text-bar cursor-pointer z-50 relative"
          aria-label={showMenu ? "Close menu" : "Open menu"}
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile menu */}
        {showMenu && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0  bg-opacity-50 z-30 sm:hidden"
              onClick={closeMenu}
            />

            {/* Menu */}
            <nav className="w-full fixed bg-white text-gray-text font-medium left-0 right-0 top-[93px] text-[0.875rem] h-[calc(100vh-93px)] z-40 overflow-y-auto sm:hidden">
              <ul className="w-full px-6">
                <li className="border-b border-b-neutral">
                  <Link
                    className="block px-[5%] py-5 hover:bg-gray-50 transition-colors"
                    to="."
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="border-b border-b-neutral">
                  <Link
                    className="block px-[5%] py-5 hover:bg-gray-50 transition-colors"
                    to="About"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li className="border-b border-b-neutral">
                  <Link
                    className="flex gap-2 items-center px-[5%] py-5 hover:bg-gray-50 transition-colors"
                    to="Services"
                    onClick={closeMenu}
                  >
                    Our Services
                    <img src="/arrow-down.svg" alt="" className="w-3 h-3" />
                  </Link>
                </li>
                <li className="border-b border-b-neutral">
                  <Link
                    className="block px-[5%] py-5 hover:bg-gray-50 transition-colors"
                    to="Contact"
                    onClick={closeMenu}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </header>
    </div>
  );
}

export default Header;
