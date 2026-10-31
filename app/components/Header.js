import Image from "next/image";

function Header({ brandName, navItems }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <nav className="flex min-h-20 flex-col items-center justify-center gap-4 px-8 py-4 md:flex-row md:justify-between md:px-12 md:py-0">
        <a
          href="#inicio"
          className="flex items-center gap-4 text-2xl font-bold text-slate-900"
        >
          <Image
            className="h-8 w-8"
            src="/favicon.svg"
            alt={`${brandName} logo`}
            width={32}
            height={32}
            priority
          />
          <span>{brandName}</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base font-medium text-slate-600">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-blue-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
