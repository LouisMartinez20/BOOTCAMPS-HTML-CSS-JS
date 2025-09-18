import * as React from "react";
import {
  StyledMenuBlock,
  StyledMenuItem,
  StyledMenuItemIcon,
  StyledMenuItemLabel,
  StyledToggle,
  StyledSlideToggle,
  StyledSlider,
} from "./Sidebar.style";
const ITEMS = [
  { id: "settings", label: "General Settings", icon: "/icons/settings.svg" },
  { id: "notifications", label: "Notifications", icon: "/icons/bell.svg" },
  { id: "privacy", label: "Privacy and Security", icon: "/icons/lock.svg" },
  { id: "language", label: "Language", icon: "/icons/globe.svg" },
  { id: "dark-mode", label: "Dark Mode", icon: "/icons/moon.svg", toggle: true },
];
export function SidebarMenu() {
  const [darkOn, setDarkOn] = React.useState(false);
  const normalItems = ITEMS.filter((item) => !item.toggle);
  const darkModeItem = ITEMS.find((item) => item.toggle);
  const toggleDarkMode = () => {
    setDarkOn((prev) => !prev);
  };
  return (
    <StyledMenuBlock>
      {normalItems.map((item) => (
        <StyledMenuItem key={item.id} >
          <StyledMenuItemIcon>
            <img src={item.icon}  />
          </StyledMenuItemIcon>
          <StyledMenuItemLabel>{item.label}</StyledMenuItemLabel>
        </StyledMenuItem>
      ))}
      {darkModeItem && (
        <StyledMenuItem key={darkModeItem.id} as="div">
          <StyledMenuItemIcon>
            <img src={darkModeItem.icon}  />
          </StyledMenuItemIcon>
          <StyledMenuItemLabel>{darkModeItem.label}</StyledMenuItemLabel>
          <StyledSlideToggle
            aria-checked={darkOn}
            data-on={darkOn}
            onClick={toggleDarkMode}
            >
            <StyledSlider data-on={darkOn} />
          </StyledSlideToggle>
        </StyledMenuItem>
      )}
    </StyledMenuBlock>
  );
}
