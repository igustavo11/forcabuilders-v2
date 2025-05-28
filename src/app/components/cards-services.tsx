import Image from "next/image";

export default function CardsServices() {
    return (
        <section className="py-20 px-4 md:px-12 lg:px-24 w-full bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 relative">
                    <h3 className="text-2xl md:text-3xl font-bold inline-block">
                    Constructing a Stronger Future
                    </h3>
                    <div className="w-24 h-1 bg-colorprimary mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group">
                        <div className="overflow-hidden mb-4">
                            <Image
                                src="/img/photos-services/service-card-1.jpg"
                                alt="Custom Home Building"
                                width={400}
                                height={250}
                                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="border-l-4 border-colorprimary pl-4">
                            <h3 className="text-lg font-bold mb-2">Crafted to Perfection</h3>
                            <p className="text-gray-700 text-sm">
                            Every detail meticulously curated, ensuring elegance and style.
                            </p>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden mb-4">
                            <Image
                                src="/img/photos-services/service-card-2.jpg"
                                alt="Renovations"
                                width={400}
                                height={250}
                                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="border-l-4 border-colorprimary pl-4">
                            <h3 className="text-lg font-bold mb-2">Built with Heart, Designed with Purpose</h3>
                            <p className="text-gray-700 text-sm">
                            Spaces that reflect passion and precision.
                            </p>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden mb-4">
                            <Image
                                src="/img/photos-services/service-card-3.jpg"
                                alt="Commercial Construction"
                                width={400}
                                height={250}
                                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="border-l-4 border-colorprimary pl-4">
                            <h3 className="text-lg font-bold mb-2">Where Vision Becomes Reality</h3>
                            <p className="text-gray-700 text-sm">
                            Transforming ideas into remarkable living experiences.
                            </p>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden mb-4">
                            <Image
                                src="/img/photos-services/service-card-4.jpg"
                                alt="Interior Design"
                                width={400}
                                height={250}
                                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="border-l-4 border-colorprimary pl-4">
                            <h3 className="text-lg font-bold mb-2">Where Luxury Meets Precision</h3>
                            <p className="text-gray-700 text-sm">
                            Building with excellence and flawless craftsmanship.
                            </p>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden mb-4">
                            <Image
                                src="/img/photos-services/service-card-5.jpg"
                                alt="Project Management"
                                width={400}
                                height={250}
                                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="border-l-4 border-colorprimary pl-4">
                            <h3 className="text-lg font-bold mb-2">Elevating Spaces, Enriching Lives</h3>
                            <p className="text-gray-700 text-sm">
                            Each project, a testament to dedication and lifestyle.
                            </p>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden mb-4">
                            <Image
                                src="/img/photos-services/service-card-6.jpg"
                                alt="Consulting"
                                width={400}
                                height={250}
                                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="border-l-4 border-colorprimary pl-4">
                            <h3 className="text-lg font-bold mb-2">Beauty in Every Corner</h3>
                            <p className="text-gray-700 text-sm">
                            Bringing refined design and superior quality together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}