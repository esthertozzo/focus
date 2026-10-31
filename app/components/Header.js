import logoImage from "../assets/images/favicon.svg";

function Header({ brandName, navItems }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e9f0] bg-white shadow-[0_20px_50px_rgba(40,35,90,0.1)]">
      <nav className="flex min-h-20 flex-col items-center justify-center gap-4 px-8 py-4 md:flex-row md:justify-between md:px-12 md:py-0">
        <a href="#inicio" className="flex items-center gap-4 text-2xl font-bold text-[--color-nav] no-underline">
          <span className="flex items-center justify-center">
            <img className="h-8 w-8" src={logoImage} alt="Logo da Focus" />
          </span>

          <span className="logo-text">{brandName}</span>
        </a>

        <ul className="m-0 flex list-none flex-wrap justify-center gap-x-8 gap-y-4 p-0 text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="text-[#55576b] no-underline transition-colors hover:text-[#0059ff]" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;