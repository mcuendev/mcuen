import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="border-t p-4 md:p-10 text-center text-sm">
      &copy; {new Date().getFullYear()} {siteConfig.name}
    </footer>
  );
};
export default Footer;
