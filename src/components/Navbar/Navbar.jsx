import { NavLink } from "react-router-dom";

function Navbar() {
  const activeLink = "bg-blue-100 text-black";
  const unactiveLink = "";
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />

      <div class="min-h-screen flex flex-row bg-dark w-46 pl-3">
        <div class="flex flex-col bg-dark overflow-hidden w-full ">
          <ul class="flex flex-col py-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : unactiveLink
                }
              >
                <span class="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-grayish hover:text-grayish">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/anime"
                className={({ isActive }) =>
                  isActive ? activeLink : unactiveLink
                }
              >
                <span class="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-grayish hover:text-grayish">
                  Anime
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manga"
                className={({ isActive }) =>
                  isActive ? activeLink : unactiveLink
                }
              >
                <span class="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-grayish hover:text-grayish">
                  Manga
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLink : unactiveLink
                }
              >
                <span class="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-grayish hover:text-grayish">
                  About Us
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
