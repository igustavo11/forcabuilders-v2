import Image from 'next/image';
export default function Contact(){
    return(
     <div className="w-full relative -mt-32">
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
                    <div className="absolute inset-0 bg-black/30 z-10"></div>
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-2xl mb-4">
                                CONTACT
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white drop-shadow-lg font-medium">
                                Get in Touch with Our Team
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-full">
                        <Image
                            src="/img/top-image/contact.png"
                            alt="Contact Banner - Get in Touch with Our Professional Team"
                            fill
                            className="object-cover object-center"
                            quality={100}
                            priority
                            unoptimized
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                        />
                    </div>
                </div>
            </div>

      
    )
}