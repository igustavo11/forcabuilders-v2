
import Image from "next/image";

export default function Services() {
    return (
        <>
            <div className="w-full h-[400px] relative -mt-32">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
                    <div className="z-10">
                        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
                            SERVICES
                        </h1>
                    </div>
                </div>
                <div className="relative w-full h-[400px]">
                    <Image
                        src="/img/top-image/services.jpg"
                        alt="Services Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
            </>
        
    )
}