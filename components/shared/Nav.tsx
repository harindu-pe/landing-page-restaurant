"use client";

import { links } from "@/lib/constants";
import { Link } from "react-scroll";

type NavProps = {
  containerStyles: string;
  linkStyles: string;
};

const Nav = ({ containerStyles, linkStyles }: NavProps) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className={`${linkStyles}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
