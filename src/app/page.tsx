import Slider from "./components/swiper/slider";
import Link from "next/link";
import { Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Homecards from "./components/cards/homecards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Quality Construction & Renovations in NJ",
  description: "Welcome to Força Builders. We deliver excellence in residential and commercial construction. From new builds to renovations, we build with passion.",
};

export default function Home() {
  return (
    <>
      <Slider />
      <section className="py-20 px-6 md:px-12 lg:px-20 w-full">
        <div className="flex items-center mb-16">
          <div className="w-12 h-1 bg-colorprimary mr-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group h-[450px] lg:h-[500px] mt-5">
              <video
                src="/video/video.mp4"
                loop
                muted
                autoPlay
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 lg:pt-8">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Força <span className="text-colorprimary">Builders</span>
              </h3>

              <div className="space-y-5 text-gray-700">
                <p className="text-base lg:text-lg leading-relaxed">
                  At Força Builders, we specialize in the construction of
                  <span className="font-semibold text-gray-900">
                    {" "}
                    residential, commercial, and mixed-use buildings
                  </span>
                  .
                </p>

                <p className="text-base lg:text-lg leading-relaxed">
                  We understand that a home is more than just a structure; it
                  represents{" "}
                  <span className="font-semibold text-gray-900">
                    comfort, stability, safety, and cherished memories
                  </span>
                  .
                </p>

                <div className="bg-gray-50 p-5 lg:p-6 rounded-xl border-l-4 border-colorprimary shadow-sm">
                  <p className="text-base lg:text-lg leading-relaxed italic text-gray-800">
                    For over a decade, we have dedicated ourselves to
                    transforming houses into homes for our valued clients.
                  </p>
                </div>

                <p className="text-base lg:text-lg leading-relaxed">
                  From renovations to new home constructions, we take pride in
                  the moment when our clients witness their transformed spaces.
                  It is a privilege to be a part of such a significant and
                  emotional experience.
                </p>

                <div className="bg-colorprimary/5 p-5 lg:p-6 rounded-xl border border-colorprimary/10">
                  <p className="text-base lg:text-lg leading-relaxed font-medium text-gray-800">
                    At Força Builders,{" "}
                    <span className="text-colorprimary font-bold">
                      Welcome Home
                    </span>{" "}
                    is not merely a phrase; it embodies our company culture,
                    which is built on collaboration, continuous learning, and
                    shared achievements.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                asChild 
                className="group bg-colorprimary hover:bg-colorprimary/90 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-colorprimary/25 hover:-translate-y-1"
                size="lg"
              >
                <Link href="/portifolio" className="inline-flex items-center gap-2">
                  <span className="text-base">View Our Portfolio</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
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
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            <Button asChild className="relative w-[200px] pl-6 pr-12 py-2.5 rounded-lg bg-gradient-to-tr from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-base font-bold uppercase shadow-md hover:shadow-xl transition-all duration-300">
              <Link
                href="https://www.youtube.com/@forcabuilders"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-center"
              >
                Youtube
                <span className="absolute right-0 h-full w-10 rounded-r-lg grid place-items-center bg-red-700">
                  <Youtube size={25}/>
                </span>
              </Link>
            </Button>

            <Button asChild className="relative w-[200px] pl-6 pr-12 py-2.5 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white text-base font-bold uppercase shadow-md hover:shadow-xl transition-all duration-300">
              <Link
                href="https://www.instagram.com/forcabuilders/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-center"
              >
                Instagram
                <span className="absolute right-0 h-full w-10 rounded-r-lg grid place-items-center bg-pink-700">
                  <Instagram size={25} />
                </span>
              </Link>
            </Button>
          </div>

        </div>

      </section>
    </>
  );
}
