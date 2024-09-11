export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-background px-6 py-4 text-foreground">
      <div>
        <a href="#" className="text-2xl">
          Logo
        </a>
      </div>
      <div>
        <ul className="flex">
          <li>
            <a href="#" className="ml-4 text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="ml-4 text-sm">
              About
            </a>
          </li>
          <li>
            <a href="#" className="ml-4 text-sm">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="ml-4 text-sm">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
