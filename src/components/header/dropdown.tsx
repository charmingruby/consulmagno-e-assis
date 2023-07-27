import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export interface DropdownLink {
  label: string
  url: string
}

interface DropdownProps {
  label: string
  links: DropdownLink[]
}

export function Dropdown({ label, links }: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center bg-opacity-20 focus:outline-none font-medium group items-center border-b-2 border-gray-75 h-[3.75rem] transition-colors hover:border-primary-main cursor-pointer">
          <span className="group-hover:text-primary-main transition-colors">
            {label}
          </span>
          <ChevronDown
            size={18}
            className="mt-0.5 text-gray-300 group-hover:text-secondary-main transition-colors"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-50 shadow-lg focus:outline-none">
          <div className="px-1 py-1 ">
            {links.map(({ label, url }) => (
              <Menu.Item key={label}>
                {({ active }) => (
                  <Link href={url}>
                    <button
                      className={`${
                        active ? 'text-primary-main underline' : 'text-gray-400'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {label}
                    </button>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
