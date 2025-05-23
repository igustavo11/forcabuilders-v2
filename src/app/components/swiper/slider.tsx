"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button"; 

const slides = [
	{
		image: "/img/swiper/ft1.png",
	},
	{
		image: "/img/swiper/ft2.png",
	},
	{
		image: "/img/swiper/ft3.png",
	},
	{
		image: "/img/swiper/ft4.png",
	},
];

export default function Slider() {
	return (
		<div className="w-full h-[550px] relative -mt-32"> 
			<div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none">
				<div className="z-10">
					<h2 className="text-4xl font-bold text-white mb-4 drop-shadow">
                        BUILDING WITH STRENGTH AND INTEGRITY
					</h2>								
					<Button variant="default" className="text-lg px-8 py-6 mt-1 bg-colorprimary">Explore</Button>
				</div>
			</div>

			<Swiper
				modules={[Autoplay, Pagination]}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				loop
				className="w-full h-full"
			>
				{slides.map((slide, idx) => (
					<SwiperSlide key={idx}>
						<div className="relative w-full h-[550px] flex items-center justify-center">
							<Image
								src={slide.image}
								alt="Slide Image"
								fill
								className="object-cover"
								priority={idx === 0}
							/>
							<div className="absolute inset-0 bg-black/40"></div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}