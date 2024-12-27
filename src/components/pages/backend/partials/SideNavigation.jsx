import { imgPath } from "@/components/helpers/functions-general";
import { Clapperboard, Flag, LayoutDashboard, Shirt, Star } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavigation = ({ menu }) => {
  const links = [
    {
      title: "Dashboard",
      slug: "/admin/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      title: "Clothes",
      slug: "/admin/clothes",
      icon: <Shirt />,
    },
    {
      title: "Category",
      slug: "/admin/category",
      icon: <Star />,
    },
    {
      title: "Banner",
      slug: "/admin/banner",
      icon: <Flag />,
    },
  ];

  return (
    <>
      <aside className="p-4 border-r border-line">
        
        <h3>ZANEROBE</h3>

        <nav>
          <ul className="mt-10">
            {links.map((item, key) => (
              <li
              className={`${
                menu === item.slug.replaceAll("/admin/", "")
                  ? "border-accent bg-accent text-white  opacity-100"
                  : ""
              } p-2 mb-2 rounded-md border border-transparent opacity-70 hover:opacity-100`}
              key={key}
              >
                <NavLink
                  to={`${item.slug}`}
                  className="flex items-center text-base gap-3"
                >
                  {item.icon} {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideNavigation;
