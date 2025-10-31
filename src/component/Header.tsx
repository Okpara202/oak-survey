import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const services = [
    {
      name: "Land Registry Complaint Map",
      path: "land-registry",
    },
    { name: "Topographical Surveying", path: "topographical-surveying" },
    { name: "Measured Building Survey", path: "building-survey" },
    { name: "3D Scanning", path: "3d-scanning" },
    { name: "Volume Surveying", path: "volume-surveying" },
    { name: "Boundary Disputes", path: "boundary-disputes" },
    { name: "Forestry Services", path: "forestry-services" },
    { name: "Setting Out", path: "setting-out" },
    { name: "Drone Mapping", path: "drone-mapping" },
    {
      name: "Irish Water compliance Docume",
      path: "irish-water",
    },
    { name: "As built surveys", path: "as-built-surveys" },
    { name: "Site surveys", path: "site-surveys" },
  ];

  return (
    <div className="bg-header-bg relative">
      <header className="mx-auto lg:w-[80%] w-[80%] md:w-full md:px-10 lg:px-0 flex items-center justify-between font-medium h-[93px]">
        <img src="/oak_logo.svg" alt="Oak Survey Logo" />

        <nav className="relative">
          <ul className="sm:flex hidden justify-between items-center gap-10 lg:text-[18px] text-[10px]">
            <li>
              <NavLink
                to="."
                end
                className={({ isActive }) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main text-brand-main"
                    : "font-medium"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="About"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main text-brand-main"
                    : "font-medium"
                }
              >
                About us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="services"
                className={({ isActive }) =>
                  `relative flex items-center gap-1 ${
                    isActive
                      ? " font-medium border-b-2 pb-2.5 border-b-brand-main text-brand-main"
                      : "font-medium"
                  }`
                }
              >
                Our Services
                <img
                  src="/arrow-down.svg"
                  alt="dropdown arrow"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className={`cursor-pointer transition-transform duration-200 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </NavLink>
              {showDropdown && (
                <div
                  className="absolute mt-6 text-[#2E2E2E] bg-[#F4F6FB] shadow-lg border border-[#E3E3E3] w-[380px] sm:w-[480px] p-6 z-50"
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[14px] lg:text-[14.5px] text-gray-800 font-medium">
                    {services.map((service, index) => (
                      <NavLink
                        key={index}
                        to={`/services/${service.path}`}
                        onClick={() => setShowDropdown(false)}
                        className="border-b border-gray-200 pb-2 hover:text-brand-main transition-colors duration-200 block"
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <NavLink
                to="Contact"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main text-brand-main"
                    : "font-medium"
                }
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className="p-4 hidden rounded-lg bg-brand-main text-white md:flex h-[53px] md:justify-center md:items-center gap-4 font-medium lg:text-[14px] text-[12px]">
          <img src="/call.svg" alt="call icon" />
          ++353 (0)874950977
        </button>

        <FaBars className="sm:hidden text-3xl text-bar" />
      </header>
    </div>
  );
}

export default Header;
