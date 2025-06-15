import Image from "next/image";
import CardsServices  from "../components/cards-services";

export default function Services() {
    return (
        <>
            <div className="w-full relative -mt-32">
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">               
                    <div className="absolute inset-0 bg-black/30 z-10"></div>
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-2xl mb-4">
                                SERVICES
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white drop-shadow-lg font-medium">
                                Professional Construction Solutions
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-full">
                        <Image
                            src="/img/top-image/ft7.jpeg"
                            alt="Services Banner - Professional Construction Solutions"
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

            <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Excellence in Every Project
            </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* First Image with Content */}
            <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <Image 
                        src="/img/photos-services/service.jpg"
                        alt="Professional Construction Service"
                        width={600}
                        height={400}
                        className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Custom Home Building</h3>
                        <p className="text-sm opacity-90">Creating dream homes with precision and care</p>
                    </div>
                    <div className="absolute top-6 right-6">
                        <span className="bg-colorprimary text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Premium
                        </span>
                    </div>
                </div>
            </div>

            {/* Second Image with Content */}
            <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <Image
                        src="/img/photos-services/service2.jpg"
                        alt="Commercial Construction Service"
                        width={600}
                        height={400}
                        className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Commercial Projects</h3>
                        <p className="text-sm opacity-90">Building the future of business infrastructure</p>
                    </div>
                    <div className="absolute top-6 right-6">
                        <span className="bg-colorprimary text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Enterprise
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            <CardsServices />
        </>
    )
}