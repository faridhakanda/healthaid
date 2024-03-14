"use client"
import React, { useState } from 'react'
import Link from '../../node_modules/next/link';
import Image from '../../node_modules/next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const view = "sm:hidden md: hidden lg:visible xl:visible 2xl:visible"
    const list_of_link = [
        {
            id: 1,
            title: 'Home',
            url: '/'
        },
        {
            id: 2,
            title: 'Services',
            url: '/services'
        },
        {
            id: 3,
            title: 'Result',
            url: '/result'
        },
        {
            id: 4,
            title: 'About',
            url: '/about'
        }
    ];
  return (
    <div>
        {/* Here is the desktop responsive navbar */}
        <div className={`bg-slate-50 text-slate-950 justify-around p-4 w-full h-16 sm:hidden md:hidden lg:flex xl:flex 2xl:flex`}>
            <div>
                <Link href="/" className="text-2xl">HealthAid</Link>
            </div>
            <div className="">
                <ul className="justify-around space-x-3 text-xl">
                    {
                        list_of_link.map((link_url) => {
                            return (
                                <Link className="" key={link_url.id} href={link_url.url}>{link_url.title}</Link>
                            )
                        })
                    }
                </ul>                
            </div>
        </div>
        {/** Here is the mobile responsive navbar with hamburger menu and close icon */}
        <div className="">
            <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden justify-around bg-slate-50 text-slate-950 p-3">
                <div>
                    <Link href="/">HealthAid</Link>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen ? <Image src="/Hamenu.svg" alt="menuhm" width="32" height="32" /> : <Image src="/Haclose.svg" alt="close" width="32" height="32" />}       
                </div>
            </div>
            <div id="sideNav" className={`bg-slate-100 text-slate-950 lg:invisible xl:invisible 2xl:invisible  ${isOpen ? 'opacity-100': 'opacity-0'}`}>
                <ul id="sideNavbar" className={`justify-center`}>
                    {list_of_link.map((link_url) => {
                        return (
                            <Link onClick={() => setIsOpen(!isOpen)} className={``} key={link_url.id} href={link_url.url}>{link_url.title}</Link>
                        )
                    })}
                </ul>
            </div>
        </div>
        
    </div>
    
  )
}

export default Navbar