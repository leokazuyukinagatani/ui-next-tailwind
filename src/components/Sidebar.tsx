import { Logo } from './icons/Logo'
import { NavLink } from './NavLink'

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6 hidden md:block">
      <Logo className="text-white h-4 w-auto" />
      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Guides
          </strong>
          <div className='text-sm flex flex-col pl-2'>
            <NavLink href="/test/introduction">Introduction</NavLink>
            <NavLink href="/test/1">Quickstart</NavLink>
            <NavLink href="/test/2">SDKS</NavLink>
            <NavLink href="/test/3">Authentication</NavLink>
            <NavLink href="/test/4">Errors</NavLink>
            <NavLink href="/test/5">Webhooks</NavLink>
          </div>
        </div>

        <div>
          <strong className="text-zinc-100 font-medium text-sm">
            Resources
          </strong>
          <div className='text-sm flex flex-col pl-2'>
            <NavLink href="/test/1">Contacts</NavLink>
            <NavLink href="/test/1">Conversations</NavLink>
            <NavLink href="/test/1">Messages</NavLink>
            <NavLink href="/test/1">Groups</NavLink>
            <NavLink href="/">Attachments</NavLink>
          </div>
        </div>
      </nav>
    </aside>
  )
}
