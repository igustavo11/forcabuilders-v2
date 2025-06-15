"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function CardsServices() {
    const cards = [
        {
            image: "/img/photos-services/service-card-1.jpg",
            alt: "Custom Home Building",
            title: "Crafted to Perfection",
            description: "Every detail meticulously curated, ensuring elegance and style."
        },
        {
            image: "/img/photos-services/service-card-2.jpg",
            alt: "Renovations",
            title: "Built with Heart, Designed with Purpose",
            description: "Spaces that reflect passion and precision."
        },
        {
            image: "/img/photos-services/service-card-3.jpg",
            alt: "Commercial Construction",
            title: "Where Vision Becomes Reality",
            description: "Transforming ideas into remarkable living experiences."
        },
        {
            image: "/img/photos-services/service-card-4.jpg",
            alt: "Interior Design",
            title: "Where Luxury Meets Precision",
            description: "Building with excellence and flawless craftsmanship."
        },
        {
            image: "/img/photos-services/service-card-5.jpg",
            alt: "Project Management",
            title: "Elevating Spaces, Enriching Lives",
            description: "Each project, a testament to dedication and lifestyle."
        },
        {
            image: "/img/photos-services/service-card-6.jpg",
            alt: "Consulting",
            title: "Beauty in Every Corner",
            description: "Bringing refined design and superior quality together."
        }
    ];

    return (
        <section className="py-20 px-4 md:px-12 lg:px-24 w-full bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="mb-16 relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold inline-block">
                        Constructing a Stronger Future
                    </h3>
                    <motion.div 
                        className="w-24 h-1 bg-colorprimary mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="overflow-hidden mb-4 rounded-lg">
                                <Image
                                    src={card.image}
                                    alt={card.alt}
                                    width={400}
                                    height={250}
                                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <motion.div 
                                className="border-l-4 border-colorprimary pl-4"
                                whileHover={{ x: 8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.h3 
                                    className="text-lg font-bold mb-2"
                                    whileHover={{ color: "var(--color-primary)" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {card.title}
                                </motion.h3>
                                <p className="text-gray-700 text-sm">
                                    {card.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}