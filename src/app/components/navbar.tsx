"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { House, Wrench, FolderOpen, Mail, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

    const isActive = (path: string) => {
        return pathname === path
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }
    const menuItems = [
        { href: "/", label: "Home", icon: House },
        { href: "/services", label: "Services", icon: Wrench },
        { href: "/portifolio", label: "Portfolio", icon: FolderOpen },
        { href: "/contact", label: "Contact", icon: Mail },
    ]

    return(
       <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolling ? 'bg-colorgray' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto w-full flex justify-between items-center p-3 text-white"> 
            {/* Logo */}
            <div className="flex items-center">
                <Image
                    src="/img/logo.png"
                    alt="Logo"
                    width={100}
                    height={75}
                    className="h-auto"
                />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-sm">
                {menuItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                        <li key={index} className="group">
                            <Link 
                                href={item.href} 
                                className={`flex items-center hover:text-colorprimary transition-colors ${
                                    isActive(item.href) ? 'text-colorprimary' : ''
                                }`}
                            >
                                <IconComponent size={16} className="mr-1" />
                                <span>{item.label}</span>
                                <span className={`block h-0.5 bg-colorprimary mt-0.5 transition-all duration-300 ${
                                    isActive(item.href) ? 'max-w-full' : 'max-w-0 group-hover:max-w-full'
                                }`}></span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 hover:text-colorprimary transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {mobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 md:hidden z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeMobileMenu}
                    />
                    
                    {/* Mobile Menu */}
                    <motion.div
                        className="fixed top-0 right-0 h-full w-64 bg-colorgray shadow-lg md:hidden z-50"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 30,
                            duration: 0.3 
                        }}
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-600">
                            <Image
                                src="/img/logo.png"
                                alt="Logo"
                                width={80}
                                height={60}
                                className="h-auto"
                            />
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 hover:text-colorprimary transition-colors text-white"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Mobile Menu Items */}
                        <nav className="p-4">
                            <ul className="space-y-4">
                                {menuItems.map((item, index) => {
                                    const IconComponent = item.icon
                                    return (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + 0.2 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className={`flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors ${
                                                    isActive(item.href) 
                                                        ? 'text-colorprimary bg-gray-700/50' 
                                                        : 'text-white'
                                                }`}
                                            >
                                                <IconComponent size={20} className="mr-3" />
                                                <span className="text-base font-medium">{item.label}</span>
                                                {isActive(item.href) && (
                                                    <motion.div
                                                        className="ml-auto w-2 h-2 bg-colorprimary rounded-full"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: 0.3 }}
                                                    />
                                                )}
                                            </Link>
                                        </motion.li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
       </header>
    )
}
