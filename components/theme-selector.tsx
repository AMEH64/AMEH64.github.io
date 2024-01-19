"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/components/ui/dropdown";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

export function ThemeSelector() {
  const { setTheme } = useTheme();

  return (
    <Dropdown>
      <DropdownButton outline>
        <SunIcon
          title="Light Theme"
          className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <MoonIcon
          title="Dark Theme"
          className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span className="sr-only">Select theme</span>
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem onClick={() => setTheme("light")}>Light</DropdownItem>
        <DropdownItem onClick={() => setTheme("dark")}>Dark</DropdownItem>
        <DropdownItem onClick={() => setTheme("system")}>System</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
