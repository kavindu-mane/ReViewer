import React, { useEffect, useState } from "react";
import { MdDarkMode, MdComputer, MdSunny } from "react-icons/md";
import { Dropdown } from "flowbite-react";
import ThemeSwitcher from "../functions/ThemeSwitcher";

const ThemeButton = () => {
  const themeIcons = {
    dark: <MdDarkMode className="h-5 w-5" />,
    light: <MdSunny className="h-5 w-5" />,
    default: <MdComputer className="h-5 w-5" />,
  };

  const [currentTheme, setCurrentTheme] = useState(
    !("theme" in localStorage)
      ? "default"
      : localStorage.theme === "dark"
        ? "dark"
        : "light",
  );

  useEffect(() => {
    ThemeSwitcher();
  }, [currentTheme]);

  return (
    <div className="h-9 w-9 rounded-full p-2 text-slate-800 duration-200 dark:text-white">
      <Dropdown
        inline
        label={themeIcons[currentTheme]}
        placement={"top"}
        arrowIcon={false}
      >
        <Dropdown.Item
          className="hover:!bg-slate-300 dark:hover:!bg-slate-600"
          onClick={() => {
            setCurrentTheme("dark");
            localStorage.theme = "dark";
          }}
        >
          {themeIcons.dark} &ensp;Dark
        </Dropdown.Item>
        <Dropdown.Item
          className="hover:!bg-slate-300 dark:hover:!bg-slate-600"
          onClick={() => {
            setCurrentTheme("light");
            localStorage.theme = "light";
          }}
        >
          {themeIcons.light} &ensp;Light
        </Dropdown.Item>
        <Dropdown.Item
          className="hover:!bg-slate-300 dark:hover:!bg-slate-600"
          onClick={() => {
            setCurrentTheme("default");
            localStorage.removeItem("theme");
          }}
        >
          {themeIcons.default} &ensp;Default
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default ThemeButton;
