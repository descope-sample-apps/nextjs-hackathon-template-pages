import 'flowbite'

import Image from "next/image"
import Link from 'next/link'

import { useSession, signIn } from "next-auth/react"


export default function Navbar({ Logo }: { Logo: string }) {
    const { data: session, status } = useSession()

    return (
        <nav className="absolute top-0 w-full py-4">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <Image
                        src={Logo}
                        alt="navbar logo"
                        width={60}
                        height={60}
                        className="w-5 h-5"
                    />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-800 dark:hover:bg-gray-300" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col items-center max-md:items-start p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 max-md:bg-[#1d232d]">
                        <li>
                            <Link href="#about" className="max-md:text-white block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                        </li>
                        <li>
                            <Link href="#schedule" className="max-md:text-white block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Schedule</Link>
                        </li>
                        <li>
                            <Link href="#speakers" className="max-md:text-white block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Speakers</Link>
                        </li>
                        <li>
                            <Link href="#sponsors" className="max-md:text-white block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sponsors</Link>
                        </li>
                        <li>
                            <Link href="#faq" className="max-md:text-white block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQ</Link>
                        </li>
                        <li>
                            <Link href={"/team"} className="max-md:text-white block py-2 pl-3 pr-4 max-md:mb-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Team</Link>
                        </li>
                        <li className='mr-6 max-md:pb-2 max-md:mb-1'>
                            {session ? 
                                <div className="text-[#e9e9e9] bg-[#262d3b] py-2 px-7 border-[#45546e] border-4">
                                    <Link href={"/dashboard"}>Dashboard</Link>
                                </div>
                                :
                                <button onClick={() => signIn("descope", { callbackUrl: "/dashboard" })} className="text-[#e9e9e9] bg-[#262d3b] py-2 px-7 border-[#45546e] border-4">Apply</button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
