import Image from 'next/image';
import Gallery from '../components/gallery/gallery';

export default function Portifolio() {
  return(
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="w-full h-[400px] relative -mt-32">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <div className="z-10">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">
              PORTFOLIO
            </h1>
            <p className="mt-4 text-lg text-white drop-shadow-lg">Our Quality Projects</p>
          </div>
        </div>
        <div className="relative w-full h-[400px] bg-gray-300">
          <Image
            src="/img/top-image/portifolio.jpg"
            alt="Portfolio Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <Gallery />
    </div>
  )
}