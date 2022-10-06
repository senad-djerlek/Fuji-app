import Logo from "../../img/fuji-logo.png";
import { Link, NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer class="p-4 bg-dark shadow md:px-10 md:py-4 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="#" class="flex items-center mb-4 sm:mb-0">
          <img
            src={Logo}
            alt=""
            className="flex items-center mb-4 sm:mb-0 h-10"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
            Fuji
          </span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            {/* <a href="#" class="mr-4 hover:underline md:mr-6 text-logored">About</a> */}
            <NavLink
              to="/"
              className="mr-4 hover:underline md:mr-6 text-logored"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/anime"
              className="mr-4 hover:underline md:mr-6 text-logored"
            >
              Anime
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manga"
              className="mr-4 hover:underline md:mr-6 text-logored"
            >
              Manga
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="mr-4 hover:underline md:mr-6 text-logored"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-logored sm:mx-auto dark:border-logored lg:my-8" />
      <span class="block text-sm text-logored sm:text-center">
        © 2022{" "}
        <a href="https://flowbite.com/" class="hover:underline text-logored">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
