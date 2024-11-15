import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";


const navItems = [
  {
    
    label: 'About',
    href: '/about',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'demo',
    href: '/demo',
  },
];

export  function NavBar() {

  // const result = await testPromise();
  console.log('NavBar');
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex items-center" href={'/'}>
      <HomeIcon className="mr-2"/>
      <span>Home</span>
      </Link>
      <div className="flex flex-1">
      </div>
      <div className="flex">
        {navItems.map((item) => (
          <ActiveLink key={item.label} {...item} />
        ))}
      </div>
    </nav>
  );
}
