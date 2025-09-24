interface NavItem {
  title: string;
  href: string;
  showAdmin?: boolean;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Artworks", href: "/artworks" },
  { title: "About us", href: "/about" },
  { title: "Contact", href: "/contact", showAdmin: false },
  { title: "Dashboard", href: "/dashboard", showAdmin: true },
];
