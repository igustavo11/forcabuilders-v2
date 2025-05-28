import Slider from "./components/swiper/slider";
import Link from "next/link";
import Image from "next/image";

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
                    "For over a decade, we have dedicated ourselves to
                    transforming houses into homes for our valued clients."
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
                      "Welcome Home"
                    </span>{" "}
                    is not merely a phrase; it embodies our company culture,
                    which is built on collaboration, continuous learning, and
                    shared achievements.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/portfolio"
                className="group bg-colorprimary hover:bg-colorprimary/90 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-colorprimary/25 hover:-translate-y-1"
              >
                <span className="text-base">View Our Portfolio</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="overflow-hidden mb-6">
                <Image
                  src="/img/cards-home/card1.jpg"
                  alt="Quality"
                  width={500}
                  height={400}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="border-l-4 border-colorprimary pl-4">
                <h3 className="text-2xl font-bold mb-2">Quality</h3>
                <p className="text-gray-700 font-medium">
                  Within our highest levels of craft
                </p>
              </div>
            </div>

            <div className="group">
              <div className="overflow-hidden mb-6">
                <Image
                  src="/img/cards-home/card2.jpg"
                  alt="Care"
                  width={500}
                  height={400}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="border-l-4 border-colorprimary pl-4">
                <h3 className="text-2xl font-bold mb-2">Care</h3>
                <p className="text-gray-700 font-medium">
                  For the unique needs of our client
                </p>
              </div>
            </div>

            <div className="group">
              <div className="overflow-hidden mb-6">
                <Image
                  src="/img/cards-home/card3.jpg"
                  alt="Commitment"
                  width={500}
                  height={400}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="border-l-4 border-colorprimary pl-4">
                <h3 className="text-2xl font-bold mb-2">Commitment</h3>
                <p className="text-gray-700 font-medium">
                  To doing the job the right way - always
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
