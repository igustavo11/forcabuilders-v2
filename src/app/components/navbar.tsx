"use client"

import Link from "next/link"
import Image from "next/image"
import {useState, useEffect} from "react"
import {House, Wrench, FolderOpen, Mail} from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
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

    const isActive = (path) => {
        return pathname === path
    }

    return(
       <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolling ? 'bg-colorgray' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto w-full flex justify-between items-center p-3 text-white"> 
            <div className="flex items-center">
                <Image
                    src="/img/logo.png"
                    alt="Logo"
                    width={100}
                    height={75}
                    className="h-auto"
                />
            </div>              
            <ul className="flex space-x-4 md:space-x-8 text-sm">
                <li className="group">
                    <Link href="/" className={`flex items-center hover:text-colorprimary transition-colors ${isActive('/') ? 'text-colorprimary' : ''}`}>
                        <House size={16} className="mr-1" />
                        <span>Home</span>
                        <span className={`block h-0.5 bg-colorprimary mt-0.5 transition-all duration-300 ${isActive('/') ? 'max-w-full' : 'max-w-0 group-hover:max-w-full'}`}></span>
                    </Link>
                </li>
                <li className="group">
                    <Link href="/services" className={`flex items-center hover:text-colorprimary transition-colors ${isActive('/services') ? 'text-colorprimary' : ''}`}>
                        <Wrench size={16} className="mr-1" />
                        <span>Services</span>
                        <span className={`block h-0.5 bg-colorprimary mt-0.5 transition-all duration-300 ${isActive('/services') ? 'max-w-full' : 'max-w-0 group-hover:max-w-full'}`}></span>
                    </Link>
                </li>
                <li className="group">
                    <Link href="/portfolio" className={`flex items-center hover:text-colorprimary transition-colors ${isActive('/portfolio') ? 'text-colorprimary' : ''}`}>
                        <FolderOpen size={16} className="mr-1" />
                        <span>Portfolio</span>
                        <span className={`block h-0.5 bg-colorprimary mt-0.5 transition-all duration-300 ${isActive('/portfolio') ? 'max-w-full' : 'max-w-0 group-hover:max-w-full'}`}></span>
                    </Link>
                </li>
                <li className="group">
                    <Link href="/contact" className={`flex items-center hover:text-colorprimary transition-colors ${isActive('/contact') ? 'text-colorprimary' : ''}`}>
                        <Mail size={16} className="mr-1" />
                        <span>Contact</span>
                        <span className={`block h-0.5 bg-colorprimary mt-0.5 transition-all duration-300 ${isActive('/contact') ? 'max-w-full' : 'max-w-0 group-hover:max-w-full'}`}></span>
                    </Link>
                </li>
            </ul>
        </nav>
       </header>
    )
}
