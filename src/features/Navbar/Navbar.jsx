import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {RxAvatar} from 'react-icons/rx'
import {BsSearch} from 'react-icons/bs'
import {BiShoppingBag} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', link: '/', current: true },
  { name: 'About', link: '/about', current: false },
  { name: 'Shop', link: '/products', current: false },
  { name: 'Blog', link: '/blog', current: false },
  { name: 'Contact', link: '/contact', current: false },
]
const navigationMobile = [
  { name: 'Home', link: '/', current: true },
  { name: 'About', link: '/about', current: false },
  { name: 'Shop', link: '/products', current: false },
  { name: 'Blog', link: '/blog', current: false },
  { name: 'Contact', link: '/contact', current: false },
  { name: 'Login', link: '/login', current: false },
  { name: 'Search', link: '#', current: false },
  { name: 'Basket', link: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({children}) => {
  return (
   <>
       <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-32 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto"
                    src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10047.png"
                    alt="Your Company"
                  />
                </div>
                <p className="text-gray-600 pl-3 pr-3 pt-2">|</p>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className={classNames(
                          item.current ?  'text-black text-lg font-bold' : 'text-black  hover:text-black hover:font-bold',
                          'rounded-md px-3 py-2  font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className=" invisible lg:visible relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Login</span>
                    <RxAvatar className="invisible lg:visible text-white" />
                  </button>
                 <Link to={'/login'}> <span className="invisible lg:visible text-black cursor-pointer pl-3 pr-3">Login</span></Link>
                  <p className="invisible lg:visible text-gray-600 pr-3">|</p>
                  <BsSearch className="invisible lg:visible text-black"/>
                  <span className="invisible lg:visible text-black cursor-pointer pl-3 pr-5">Search</span>
                  <p className="invisible lg:visible text-gray-600 pr-3">|</p>
                  <BiShoppingBag className="invisible lg:visible text-black"/>
                  <span className="invisible lg:visible text-black cursor-pointer pl-3 pr-5 ">Basket</span>
                </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigationMobile.map((item) => (
            <Link to={item.link}>
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.link}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
            </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    {children}
   </>
  )
}

export default Navbar