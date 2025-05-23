import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-colorgray text-white py-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex-1">
                        <Image
                            src="/img/logo.png"
                            alt="Força Builders Logo"
                            width={130}
                            height={45}
                            className="mb-3"
                        />
                        <p className="text-white text-sm max-w-md">
                            The Value We Bring: Quality in our highest levels of craftsmanship, care for the unique needs of our clients, and a steadfast commitment to always doing the job the right way.
                        </p>
                        <div className="flex space-x-5 mt-4">
                            <Link href="https://www.instagram.com/forcabuilders/" className="hover:text-pink-500 transition-transform hover:scale-125">
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://www.youtube.com/@forcabuilders" className="hover:text-red-600 transition-transform hover:scale-125">
                                <Youtube size={20} />
                            </Link>
                            <Link href="https://wa.me/19734495343" className="hover:text-green-500 transition-transform hover:scale-125">
                                <MessageCircle size={20} />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-start">
                        <h3 className="text-lg font-bold mb-3 border-b-2 border-gray-300 pb-1">Quick Links</h3>
                        <nav className="flex flex-col space-y-2 mt-2">
                            <Link href="/" className="text-base hover:text-colorprimary transition-colors">
                                Home
                            </Link>
                            <Link href="/services" className="text-base hover:text-colorprimary transition-colors">
                                Services
                            </Link>
                            <Link href="/portfolio" className="text-base hover:text-colorprimary transition-colors">
                                Portfolio
                            </Link>
                            <Link href="/contact" className="text-base hover:text-colorprimary transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div className="flex-1 flex flex-col items-start">
                        <h3 className="text-lg font-bold mb-3 border-b-2 border-gray-300 pb-1">Branch Location</h3>
                        <Link href="https://maps.app.goo.gl/ru8jhT1Wovs2jPSW6" className="flex items-center hover:text-colorprimary transition-colors mt-2 text-base">
                            <MapPin size={16} className="mr-2 text-gray-400" />
                            Covering all of New Jersey
                        </Link>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-600">
                    <p className="text-center text-white text-sm">
                        &copy; {new Date().getFullYear()} Força Builders. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}