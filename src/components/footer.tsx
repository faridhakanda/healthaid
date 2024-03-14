import React from 'react'
import Image from '../../node_modules/next/image';
import Contact from './contact';

const Footer = () => {
    const all_contact_images = [
        {
            id: 1,
            title:"X",
            url: '/twitterx.png'
        },
        {
            id: 2,
            title: "Telegram",
            url: '/telegram.png'
        },
        {
            id: 3,
            title: 'Linkedin',
            url: '/linkedin.png'
        },
        {
            id: 4,
            title: 'Youtue',
            url: '/youtube.png'
        },
        {
            id: 5,
            title: 'Github',
            url: '/github.png'
        }
    ];
  return (
    <div className="bg-gray-950 pb-2">
        <div className="sm:flex-col sm:text-center md:flex md:text-center lg:flex xl:flex 2xl:flex  justify-around pt-5">
            <div>
                <h1 className="text-2xl">Company</h1>
                <ul className="pb-3">
                    <li className="pt-3 pb-1">Web Development</li>
                    <li className="pb-1">Game Development</li>
                    <li className="pb-1">App Development</li>
                    <li className="pb-1" >Embedded System</li>
                    <li className="pb-1">Digital Marketing</li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl">Product</h1>
                <ul className="pb-3">
                    <li className="pt-3 pb-1">Web Development</li>
                    <li className="pb-1">Game Development</li>
                    <li className="pb-1">App Development</li>
                    <li className="pb-1" >Embedded System</li>
                    <li className="pb-1">Digital Marketing</li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl">Services</h1>
                <ul className="pb-3">
                    <li className="pt-3 pb-1">Web Development</li>
                    <li className="pb-1">Game Development</li>
                    <li className="pb-1">App Development</li>
                    <li className="pb-1" >Embedded System</li>
                    <li className="pb-1">Digital Marketing</li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl">Contact Us</h1>
                <ul className="pb-3">
                    <li className="pt-3 pb-1">Web Development</li>
                    <li className="pb-1">Game Development</li>
                    <li className="pb-1">App Development</li>
                    <li className="pb-1" >Embedded System</li>
                    <li className="pb-1">Digital Marketing</li>
                </ul>
            </div>
        </div>
        <div className="flex justify-around pt-4">
            <div>
                <h1>HealthAid</h1>
            </div>
            <div className="flex justify-around space-x-4">
                <h1>About us</h1>
                <h1>Terms and Conditions</h1>
                <h1>Privacy policy</h1>
            </div>
        </div>
        <div className="flex justify-center mx-auto text-center">
            <Contact />
        </div>
       
        <h1 className="text-center">&copy;2024 - HealthAid Inc.</h1>
    </div>
  )
}

export default Footer