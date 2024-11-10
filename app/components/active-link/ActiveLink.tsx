
'use client'
import Link from "next/link";
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation";
interface Props {
  label: string;
  href: string;
}

export function ActiveLink({ label, href }: Props) {

    const pathName = usePathname()
    console.log(pathName);
  return (
    <Link className={`${style.link } ${(pathName === href) && style['active-link']}`} key={label} href={href}>
      {label}
    </Link>
  );
}
