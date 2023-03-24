"use client"

import Link from "next/link"
import {  usePathname } from 'next/navigation'
interface NavLinkProps {
  children: string
  href: string
}
export function NavLink({ children,href }:NavLinkProps) {
  const path = usePathname()
  return (
    <Link

      className="px-4 py-1.5 border-1 border-white/5 text-zinc-400 hover:text-white transition-colors"
      href={href}
    >
      {children}
      {path}
    </Link>
  )
}
