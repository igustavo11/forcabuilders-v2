import Slider from "./components/swiper/slider";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, MessageCircle, MapPin } from 'lucide-react';
import Homecards from "./components/cards/homecards";

export default function Home() {
  return (
    <>
      <Slider />
      <section className="py-16 px-2 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex items-center mb-4">
          <div className="w-10 h-8 bg-colorprimary mr-3"></div>
          <h2 className="text-3xl font-bold">About Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          <div className="flex flex-col justify-start items-start">
            <video
              src="/video/video.mp4"
              loop
              muted
              autoPlay
              className="w-full object-cover rounded-md shadow-lg "
            ></video>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-5">Força Builders</h3>

              <p className="mb-2 text-md font-semibold leading-relaxed">
                At Força Builders, we specialize in the construction of
                residential, commercial, and mixed-use buildings.
              </p>

              <p className="mb-2 text-md font-semibold leading-relaxed">
                We understand that a home is more than just a structure; it
                represents comfort, stability, safety, and cherished memories.
              </p>

              <p className="mb-2 text-md font-semibold leading-relaxed">
                For over a decade, we have dedicated ourselves to transforming
                houses into homes for our valued clients.
              </p>

              <p className="mb-2 text-md font-semibold leading-relaxed">
                From renovations to new home constructions, we take pride in the
                moment when our clients witness their transformed spaces. It is
                a privilege to be a part of such a significant and emotional
                experience.
              </p>

              <p className="mb-2 text-md font-semibold leading-relaxed">
                At Força Builders, "Welcome Home" is not merely a phrase; it
                embodies our company culture, which is built on collaboration,
                continuous learning, and shared achievements.
              </p>

              <p className="mb-2 text-md font-semibold leading-relaxed">
                We are honored to welcome you to our Força Builders family.
              </p>
            </div>

            <div className="mt-auto">
              <Link
                href="/portfolio"
                className="bg-colorprimary hover:bg-yellow-600 text-white font-medium py-3 px-10 inline-block rounded-sm transition-colors duration-300 text-lg"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-12 lg:px-24 w-full bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 relative">
            <h3 className="text-3xl md:text-4xl font-bold inline-block">
              The Value <span className="text-colorprimary">We Bring</span>
            </h3>
            <div className="w-24 h-1 bg-colorprimary mt-4"></div>
          </div>
          <Homecards></Homecards>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">
              See more on our social channels
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mt-6">
            <Link href="https://www.youtube.com/@forcabuilders"
                  target="_blank"
                  className="flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              <Youtube size={25} />
                YOUTUBE
            </Link>

            <Link href="https://www.instagram.com/forcabuilders/"
                  target="_blank"
                  className="flex items-center bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              <Instagram size={25} />
                INSTAGRAM
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}
