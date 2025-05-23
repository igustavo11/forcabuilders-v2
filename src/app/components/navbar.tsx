"use client"

import Link from "next/link"
import Image from "next/image"
import {useState, useEffect} from "react"

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false)

    useEffect(() =>{
        const handleScroll = () => {
            if(window.scrollY > 50){
                setScrolling(true)
            } else{
                setScrolling(false)
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])


    return(
       <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolling ? 'bg-colorgray' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto w-full flex justify-between items-center p-6 text-white"> 
            <div className="flex items-center ">
                  <Image
                    src="/img/logo.png"
                    alt="Logo"
                    width={120}
                    height={90}
                     />
            </div>              
            <ul className="flex space-x-6 md:space-x-9">
                <li className="hover:text-colorprimary transition-colors">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:text-colorprimary transition-colors">
                    <Link href="/services">Services</Link>
                </li>
                <li className="hover:text-colorprimary transition-colors">
                    <Link href="/portifolio">Portifolio</Link>
                </li>
                <li className="hover:text-colorprimary transition-colors">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
       </header>
    )
}
